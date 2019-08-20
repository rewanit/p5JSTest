var slider1;
var slider2;
var slider3;
function setup() {
  createCanvas(500, 500);
  slider1 = createSlider(1,500,1);
  slider2 = createSlider(1,500,1);
  slider3 = createSlider(1,500,1);
  
  background(51);
}
var ang =1;
var kol = 2;
var del=120;
function draw() {
  kol=slider1.value();
  del=slider2.value();
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