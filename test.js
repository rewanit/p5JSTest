
function setup() {
  createCanvas(500, 500);
  background(51);
}
var ang =1;
var kol = 2;
var del=120;
function draw() {
  //kol+=0.01;
  del+=0.02;
  var R = width/2;
  translate(width / 2, height / 2);
  rotate(radians(ang+=0.1));
  clear();  
  background(200);
  for(var l = 0;l<TWO_PI;l+=TWO_PI/del)
  {
    line(Math.cos(l)*R,Math.sin(l)*R,Math.cos(l*kol)*R,Math.sin(l*kol)*R);
  }
  
}

function mouseClicked()
{
  
}