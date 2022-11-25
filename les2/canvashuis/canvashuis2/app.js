var canvas = document.getElementById('canvasId');
var g = canvas.getContext('2d');
g.canvas.width  = window.innerWidth;
g.canvas.height = window.innerHeight;
var gX = canvas.width / 2;
var gY = canvas.height / 2;
var black = "#53A6AB";
var white = "#FFF";


g.beginPath();
g.rect(gX - 100, gY - 50, 200, 200);
g.fillStyle = black;
g.fill();
g.closePath();

g.beginPath();
g.rect(gX - 70, gY - 20, 40, 40);
g.fillStyle = white;
g.fill();
g.closePath();


g.beginPath();
g.moveTo(gX - 100, gY - 50);
g.lineTo(gX, gY - 150);
g.lineTo(gX + 100, gY - 50);
g.lineTo(gX - 100, gY -50);
g.fillStyle = black;
g.fill();
g.closePath();

g.beginPath();
g.rect(gX + 20, gY + 71, 50, 80);
g.fillStyle = white;
g.fill();
g.closePath();

for (var j = 0; j < 5; j++) {
  for (var i = 0; i < 10; i++) {
   g.beginPath();
   g.moveTo((gX - 70) + (i * 20), (gY - 50) - (j * 20));
   g.lineTo((gX - 80) + (i * 20), (gY - 60) - (j * 20));
   g.moveTo((gX - 110) + (i * 20), (gY - 50) - (j * 20));
   g.lineTo((gX - 90) + (i * 20), (gY - 70) - (j * 20));
   g.strokeStyle = white;
   g.stroke();
   g.closePath();
  }
}

for (var j = 0; j < 7; j++) {
  for (var i = 0; i < 8; i++) {
   g.beginPath();
   g.moveTo((gX - 100) + (i * 30), (gY + 135) - (j * 30));
   g.lineTo((gX - 130) + (i * 30), (gY + 135) - (j * 30));
   g.lineTo((gX - 130) + (i * 30), (gY + 150) - (j * 30));
   if ( j != 6 ) {
   g.moveTo((gX - 115) + (i * 30), (gY + 135) - (j * 30));
   g.lineTo((gX - 115) + (i * 30), (gY + 120) - (j * 30));
   g.lineTo((gX - 85) + (i * 30), (gY + 120) - (j * 30));
   }
   g.strokeStyle = white;
   g.stroke();
   g.closePath();
  }
}


g.beginPath();
g.rect(gX + 60, gY - 120, 20, 50);
g.rect(gX + 50, gY - 130, 40, 10);
g.fillStyle = black;
g.fill();
g.closePath();

g.beginPath();
g.moveTo(gX - 70, gY);
g.lineTo(gX - 30, gY);
g.moveTo(gX - 50, gY - 20);
g.lineTo(gX - 50, gY + 20);
g.strokeStyle = black;
g.lineWidth = 2;
g.stroke();
g.closePath();