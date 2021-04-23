---
title: "Stock Price Predictor"
date: "2021-04-23"
author: "zerocod3r"
path: "/stock_price_predictor"
---

I am hoping you are having basic market knowledge and Python knowledge before starting this. We are writing a code a here to predict next one day price for a stock. 


*Disclaimer: This is for demonstration and learning 
purpose only, I don't recommend trusting purely this
for stock market trading. Trust your instincts.*


 ## Requirements

We require python3 for this, you can install python
from here [https://www.python.org/downloads/](https://www.python.org/downloads/)
After installing python you need to install these
python packages. Open terminal/cmd and put these 
commands.
```
$ pip3 install scikit-learn
$ pip3 install pandas
$ pip3 install pandas-datareader
$ pip3 install matplotlib
$ pip3 install tensorflow
```

## Code go through
Import these libraries first as we need will be requiring these.
```python
import numpy as np
import matplotlib.pyplot as plt
import pandas as pd
import pandas_datareader as web
import datetime as dt

from sklearn.preprocessing import MinMaxScaler
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, Dropout, LSTM
```

Now we need to define the stock, start date and end data for which we need to fetch stock prices dataset,
```python
company =  'AAPL'  # Apple stock symbol
start = dt.datetime(2020,  1,  1)
end = dt.datetime(2021,  2,  1)
```

We need to preprocess dataset to scale it to lower values range, here we keeping range to -1 to 1. We are using only close values here, the value of stocks after market has stopped.
```python
scaler = MinMaxScaler(feature_range=[0,1])
scaled_data = scaler.fit_transform(data['Close'].values.reshape(-1,1))
```

## Storing trained data
Here we storing the training data in arrays. Going from number of prediction days to length of scaled data, starting counting from 60th index to the last index of scaled data.
Here in `x_train` we adding data for first 60 values, using this we will we will store 61th value in `y_train` and so on
Convert our arrays to numpy array and reshape.
```python
prediction_days = 60
x_train =  []
y_train =  []
for x in  range(prediction_days,  len(scaled_data)):
	x_train.append(scaled_data[x-prediction_days:x,  0])  # 60 values
	y_train.append(scaled_data[x,0])  # 61st value

x_train = np.array(x_train)
y_train = np.array(y_train)
x_train = np.reshape(x_train,  (x_train.shape[0], x_train.shape[1],  1))
```
## Building model
Initialize a Sequential model. A `Sequential` model is appropriate for a plain stack of layers where each layer has exactly one input tensor and one output tensor.
We are using Long Short-Term Memory Networks here, is a type of neural network model which is capable of learning dependency of order in sequence prediction problem, like the one we need to do here, process past data to get next data. Units are layers of data set to be trained, more the number more time it will take to train data. `return_sequences` is set true because LSTM does feedback operation to feed again data.
Data epochs 30 means 29 times iterate same data. We can tweak this number to get better results
```python
model = Sequential()
model.add(LSTM(units=50,  return_sequences=True,  input_shape=(x_train.shape[1],  1)))
model.add(Dropout(0.2))
model.add(LSTM(units=50,  return_sequences=True))
model.add(Dropout(0.2))
model.add(LSTM(units=50))
model.add(Dropout(0.2))
model.add(Dense(units=1))  # Prediction of next closing value
model.compile(optimizer='adam',  loss='mean_squared_error')
model.fit(x_train, y_train,  epochs=30)
```

## Using model to predict next close price
First we create a test data and use our model on it to check how well it matches with actual data.
Again we will be fetching Close prices for same company stock from desired date to current date, and reshape last 60 days values.
Then we need to create and reshape our data to numpy array, as predict function takes input a defined 
```python
test_start = dt.datetime(2020,1,1)
test_end = dt.datetime.now()
test_data = web.DataReader(company,  'yahoo', test_start, test_end)
actual_prices = test_data['Close'].values
total_dataset = test_data['Close']
model_inputs = total_dataset[len(total_dataset) - prediction_days:].values
model_inputs = model_inputs.reshape(-1,  1)
model_inputs = scaler.transform(model_inputs)
```

Here we are putting out `model_inputs` numpy array to model predict to get the desired value, but before putting it we need to reshape our data to dimensions that model had used while training.
```python
real_data =  [model_inputs[len(model_inputs)  -  1  - prediction_days:len(model_inputs+1),  0]]
real_data = np.array(real_data)
real_data = np.reshape(real_data,  (real_data.shape[0], real_data.shape[1],  1))
prediction = model.predict(real_data)
prediction = scaler.inverse_transform(prediction)
print(f"Prediction: {prediction}")
```
```console
(venv) D:\projects\stock_price_predictor>python main.py
Prediction: [[130.61981]]
(venv) D:\projects\stock_price_predictor>
```

## Conclusion
You can check the code [Here](https://github.com/zerocod3r/stock_price_predictor).

The prediction is not always correct as stock markets are very much volatile to news and things happening around, but this could be used a starter for coding such scripts to automate trading. In future I will keep on updating the code making it more generic and accurate.

Suggestions and abuses are welcome on github issue.