


let xpos = 50;
let ypos = 50;
let xballspeed = 2;
let yballspeed = 3;
let circlecolor = 130;
let rectcolor = 150;
let rcolor = 150;
let circcol = 130;
function setup() {
  // put setup code here
createCanvas(windowWidth,windowHeight);
background(75,0,130);
// create a purple background with various lines
// when the page is refreshed, have the lines move and reappear in a different spot
//make the line color stroke a light shade of blue to pop out of the background
for(let i = 0; i < 100; i = i + 1){
  let x1 = random(0,width);
  let y1 = random(0,height);
  let x2 = random(0,width);
  let y2 = random(0,height);

strokeWeight(4);
stroke(0,120,240);
line(x1,y1,x2,y2);

}
}

function draw() {
  //create four different shapes that change color when clicked on
  // create a shape that bounces off the sides of the canvas and that changes location when clicked on


fill(circlecolor,0,0);
circle(width/5,height/5,150);
if (mouseIsPressed & dist(mouseX,mouseY,width/5,height/5)< 75){
circlecolor = 225;
}
else {
  circlecolor = 130;
}



fill(0,0,rectcolor);
rect(width/1.3,height/1.3,150);

if(mouseIsPressed & dist(mouseX,mouseY,width/1.3,height/1.3)< 75){
  rectcolor = 300;
}
else {
  rectcolor =150;

}


fill(0,0,rcolor);
rect(width/2.5,height/2.5,150);
if(mouseIsPressed & dist(mouseX,mouseY,width/2.5,height/2.5)< 75){
rcolor = 180;
}
else {
  rcolor = 150;
}





fill(circcol,0,0);
circle(width/1.5,height/1.5,150);
if(mouseIsPressed & dist(mouseX,mouseY,width/1.5,height/1.5)<75){
  circcol = 268;
}
else {
  circcol = 130;
}

// This is where the code that makes the ball bounce around starts
fill(120,0,120);
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


}
