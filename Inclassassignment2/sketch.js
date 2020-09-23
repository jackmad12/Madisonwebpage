let xpos = 50;
let ypos = 50;
let xballspeed = 2;
let yballspeed = 3;
function setup() {
  // put setup code here
createCanvas(windowWidth,windowHeight);

}

function draw() {
  background(180,70,230);
  fill(100,150,200);
  circle(xpos,ypos,150);

xpos= xpos + xballspeed;
ypos= ypos + yballspeed;

  if(xpos > width - 50){
xballspeed = -xballspeed;

  }

if(xpos < 50){
  xballspeed = -xballspeed
}

if(ypos > height - 50){
yballspeed = -yballspeed;

}

if(ypos < 50){
  yballspeed = -yballspeed;
}


 if(mouseIsPressed & dist(mouseX,mouseY,xpos,ypos) < 50){
xpos = random(0,width);
ypos = random(0,height);



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
