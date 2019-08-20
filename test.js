function setup() {
  createCanvas(600, 600);
  background(51);
}
var ang =1;
var kol = 2;
var del=120;
var tmp=0;
function draw() {
tmp+=0.001
  var R = width/2;
  translate(width / 2, height / 2);
  //rotate(radians(ang+=0.1));
  clear();  
  background(200);
  for(var l = 0;l<TWO_PI;l+=TWO_PI/del)
  {
    line(Math.cos(l+mouseX/width*2+tmp)*R,Math.sin(l+mouseY/height*2+tmp)*R,Math.cos(l*kol+mouseX/width*2+tmp)*R,Math.sin(l*kol+mouseY/height*2+tmp)*R);
    line(Math.sin(l+mouseX/width*2-tmp)*R,Math.cos(l+mouseY/height*2-tmp)*R,Math.sin(l*kol+mouseX/width*2-tmp)*R,Math.cos(l*kol+mouseY/height*2-tmp)*R);
  }
  
}

function mouseClicked()
{
  
}

function mouseWheel(event) {
  kol += event.delta/10;
  del += event.delta;
  //move the square according to the vertical scroll amount
  
  //uncomment to block page scrolling
  return false;
}