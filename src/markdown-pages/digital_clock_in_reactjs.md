---
title: "Digital Clock in Reactjs"
date: "2021-05-05"
author: "zerocod3r"
path: "/digital_clock_in_reactjs"
---
Its simple program I made while learning reactjs. You can put this on websites to automate clock, nothing else needed.
## Tech 
 - [reactjs](https://reactjs.org/)
 - Any web browser

## Code go through
Create a React componenet, and set state to Date object. Create function to set state to new Date object.
Now we will override componentDidMount to call function tick every second, it will update state of component to new current Date object, which will make it look like clock is running in real time.

```javascript
class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = {date: new Date()};
  } 
  tick(){
    this.setState({date: new Date()});
  }
  componentDidMount(){
    this.timerID = setInterval(
      () => this.tick(),1000
    );
  }
  componentWillUnmount(){
    clearInterval(this.timerID);
  }
  render(){
    return(
      <div>
        <h1> Time is {this.state.date.toLocaleTimeString()}.</h1>
      </div>
    );
  }
}

ReactDOM.render(
<Clock />, document.getElementById('divid')
```

## Conclusion
You can check working of it here [https://codepen.io/darowo9631/pen/oNYKzgN](https://codepen.io/darowo9631/pen/oNYKzgN).
Feel free to make cool versions of it.

Questions or comments? Send an email to [zerocod3r@protonmail.com](mailto:zerocod3r@protonmail.com).
