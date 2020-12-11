
let brainimage;
let numbersimage;
let scienceimage;
let y=0;
let xposList=[100,300,500,700];
let yposList=[200,400,600,800];
let yspeedList=[10,10,10,10];
let value= 0;


function preload(){

brainimage= loadImage('https://i.imgur.com/mdyR0fj.jpg');
numbersimage= loadImage('https://i.imgur.com/hP9F7en.png');
scienceimage= loadImage('https://i.imgur.com/Bi2aBcJ.png');




}
function setup() {

createCanvas(windowWidth,windowHeight);


}

function draw() {




//The background image of the brain represents the fact that this piece is meant to portray the left side of the brain. It is black and white and a bit transparent
  background(brainimage);
  stroke(0);
  strokeWeight(5);
line(0, y, width, y);

// The math and science images go along with the fact that the left side of the brain is the more logical side
image(numbersimage,100,100);

image(scienceimage,950,450);



// creates a cursor image of a flashing gray square
fill(117, 128+sin(frameCount*0.05)*128);
    rect(mouseX, mouseY, 100, 100)


y++;
if (y > height) {
  y = 0;
}









//adds the transparent image of a brain on the canvas. The transparency making it visible yet not distract from the patterns and shapes that take up the rest of the canvas


fill(0);



for(let i=0; i<xposList.length; i=i+1){

rect(xposList[i],yposList[i],50);

yposList[i] = yposList[i] + yspeedList[i];

if(yposList[i] > height){
yspeedList[i] = -yspeedList[i];

}

if(yposList[i] < 0){

yspeedList[i]= -yspeedList[i];


}



}

// all of the squares are neatly lined up on all four sides of the canvas to promote a symmetrical appearence. The viewer can also interact with the squares by pressing the left and right arrow keys
fill(value);
rect(250,25,50,50);

fill(value);
rect(325,25,50,50);

fill(value);
rect(400,25,50,50);

fill(value);
rect(475,25,50,50);

fill(value);
rect(550,25,50,50);

fill(value);
rect(625,25,50,50);

fill(value);
rect(700,25,50,50);

fill(value);
rect(775,25,50,50);

fill(value);
rect(850,25,50,50);

fill(value);
rect(925,25,50,50);











fill(value);
rect(250,645,50,50);

fill(value);
rect(325,645,50,50);

fill(value);
rect(400,645,50,50);

fill(value);
rect(475,645,50,50);

fill(value);
rect(550,645,50,50);

fill(value);
rect(625,645,50,50);

fill(value);
rect(700,645,50,50);

fill(value);
rect(775,645,50,50);

fill(value);
rect(850,645,50,50);

fill(value);
rect(925,645,50,50);









fill(value);
rect(25,85,50,50);

fill(value);
rect(25,160,50,50);

fill(value);
rect(25,235,50,50);

fill(value);
rect(25,310,50,50);

fill(value);
rect(25,385,50,50);

fill(value);
rect(25,460,50,50);

fill(value);
rect(25,535,50,50);



fill(value);
rect(1180,85,50,50);

fill(value);
rect(1180,160,50,50);

fill(value);
rect(1180,235,50,50);

fill(value);
rect(1180,310,50,50);

fill(value);
rect(1180,385,50,50);

fill(value);
rect(1180,460,50,50);

fill(value);
rect(1180,535,50,50);



}

// pressing the left and right arrow keys changes the color of the squares from black to white
function keyPressed(){
if(keyCode===LEFT_ARROW){
value = 225;

}
else{

if(keyCode===RIGHT_ARROW){
value = 0;

}


}

}
