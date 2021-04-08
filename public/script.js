var app = document.getElementById('terminal');

var typewriter = new Typewriter(app, {
});

typewriter.typeString('> zerocod3r.sh')
    .pauseFor(2500)
    .start();