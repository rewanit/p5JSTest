
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(25);

}
var tmp=0;
var ang = 0;
var radius = 50;
function draw() {
  clear();
  background(25);
  
  var smesh = false;
  var tmp_rad=radius;
 
  for (let posY = 0; posY <= height+100; posY += radius * 2 * 3 / 4) {
    smesh = !smesh;
    tmp+=0.0001;
    tmp_rad = millis()/10000;
    var mils = millis();
    for (let posX = 0; posX <= width+100; posX += sqrt(3) * radius  ) {
      ang += 0.001;
      
      drawHex(
        posX+(smesh?-sqrt(3) * radius/2:0),
        posY,
        radius/2-(Math.cos(posX+tmp_rad)*radius/2),
        30,
        128+(Math.cos(mils/1000)+0.2)*10);
    }
  }
  //drawHex(mouseX,mouseY,20,ang,Math.sin(-millis()/1000)*200);


}

function drawHex(posX, posY, radius, angle = 0, color = 255) {
  fill(color);
  noStroke();
  beginShape();
  for (let i = 0; i < 360; i += 360 / 6) {
    var rad = radians(i + angle);
    vertex(posX + Math.cos(rad) * radius, posY + Math.sin(rad) * radius);
  }
  return endShape(CLOSE);

}

function mouseClicked() {

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

}