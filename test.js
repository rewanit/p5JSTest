
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(25);
}
var ang = 0;
function draw() {
  clear();
  background(25);
  ang+=1;
  for (let i = 0; i < 360; i+=360/6) {
    var rad = radians(i+ang+30);
    drawHex(mouseX+Math.cos(rad)*(180*Math.sin(millis()/10000)),mouseY+Math.sin(rad)*(180*Math.sin(millis()/10000)),20,ang,Math.sin(millis()/1000)*128);
    rad = radians(i+ang+15);
    rad=-rad;
    drawHex(mouseX+Math.cos(rad)*(260*Math.sin(millis()/1000)),mouseY+Math.sin(rad)*(260*Math.sin(millis()/1000)),20,ang,Math.sin(millis()/10000)*128);
    
  }
  drawHex(mouseX,mouseY,20,ang,Math.sin(millis()/100)*200);
  
  
}

function drawHex(posX,posY,radius,angle=0,color=255)
{
  fill(color);
  beginShape();
  for (let i = 0; i < 360; i+=360/6) {
    var rad = radians(i+angle);
    vertex(posX+Math.cos(rad)*radius,posY+Math.sin(rad)*radius);    
  }
  return endShape(CLOSE);

}

function mouseClicked() {
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

}