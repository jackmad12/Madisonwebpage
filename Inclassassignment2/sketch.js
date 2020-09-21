let xpos = 550;
let ypos = 0;
let xballspeed = 4;
let yballspeed = 5;
function setup() {
  // put setup code here
createCanvas(windowWidth,windowHeight);

}

function draw() {
  background(180,70,230);
  fill(100,150,200);
  circle(xpos,ypos,150);

 if(mouseIsPressed & dist(xpos,ypos,mouseX,mouseY) < 100){
xpos,ypos =random(10,100);




 }







  xpos = xpos + xballspeed;
  ypos = ypos + yballspeed;

//Check for x position
//Check when ball crosses right side of the canvas
if(xpos > width){
xballspeed = -xballspeed

}
//Check when ball crosses left side of the canvas
if(xpos < 0){
xballspeed = -xballspeed

}

//Check for y position
//Check when ball crosses the bottom of the canvas
if (ypos > height){
yballspeed = -yballspeed;

}

//Check when ball crosses the top of the canvas
if(ypos < 0){
yballspeed = -yballspeed;

}

}
