
var radius = 50;
var biggest,smaller;
var Hexagons = 40;
var sensetive,maxRadius,minRadius;
function setup() {
  biggest = (windowWidth<=windowHeight?windowHeight:windowWidth);
  smaller = (windowWidth>=windowHeight?windowHeight:windowWidth);
  radius = biggest/Hexagons;  
  maxRadius = radius-0.5;
  minRadius = radius/2;
  sensetive = 1;







  createCanvas(windowWidth, windowHeight);
}
var radius = 50;
function draw() {


  background(111, 32, 135);
  var smesh = false;

  function dist(x1, y1, x2, y2) {
    function diff(num1, num2) {
      if (num1 > num2) {
        return (num1 - num2);
      } else {
        return (num2 - num1);
      }
    };
    var deltaX = diff(x1, x2);
    var deltaY = diff(y1, y2);
    var dist = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
    return (dist);
  };

  var mils = millis() / 2000;
  for (let posY = 0; posY <= height + 100; posY += radius * 2 * 3 / 4) {
    smesh = !smesh;
    for (let posX = 0; posX <= width + 100; posX += sqrt(3) * radius) {
      drawPos = {
        x: posX + (smesh ? -sqrt(3) * radius / 2 : 0),
        y: posY
      }
      drawHex(
        drawPos.x,
        drawPos.y,
        //radius/2-Math.cos(posY/2000+posX/1000-mils )*radius/2,
        map(dist(mouseX, mouseY, drawPos.x, drawPos.y)/(radius/Hexagons), 0, biggest/radius* (biggest/smaller)*sensetive, minRadius, maxRadius, true),
        30,
        80 + Math.sin(posY / 2000 + posX / 1000 - mils) * 120);
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
  trigger = true;

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

}