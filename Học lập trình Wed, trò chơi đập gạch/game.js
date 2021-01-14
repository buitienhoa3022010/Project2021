var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

context.strokeStyle = 'green';
context.rect(0, 0, 50, 50);
context.stroke();

context.strokeStyle = 'red';
context.rect(0, 100, 100, 50);
context.stroke();

context.fillStyle = 'black';
context.fill();