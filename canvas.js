function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function drawCircle(x, y, r, color) {
    c.beginPath();
    c.arc(x, y, r, 0, Math.PI * 2);
    c.strokeStyle = color;
    c.stroke();
}

function drawLine(x1, y1, x2, y2, color) {
    c.beginPath();
    c.moveTo(x1, y1);
    c.lineTo(x2, y2);
    c.strokeStyle = color;
    c.stroke();
}

var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

var centerX = canvas.width / 2;
var centerY = canvas.height / 2;
var radius = 250;

var mod = 400;
var factor = 2;

c.lineWidth = 1;

colors = []
for (var i = 0; i < mod; i++) {
    colors.push(getRandomColor());
}

color = 'black';

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.width, canvas.height);

    //drawCircle(centerX, centerY, radius, color);
    radius = 450
    for (var i = 0; i < mod; i++) {
        var firstAngle = i * Math.PI * 2 / mod;
        var secondAngle = ((i * factor) % mod) * Math.PI * 2 / mod;

        var firstX = Math.cos(firstAngle) * (radius) + centerX;
        var firstY = Math.sin(firstAngle) * (radius) + centerY;
        var secondX = Math.cos(secondAngle) * (radius) + centerX;
        var secondY = Math.sin(secondAngle) * (radius) + centerY;

        drawLine(firstX, firstY, secondX, secondY, 'black');
	//radius--;
    }

    factor += 0.01;
}

animate();
