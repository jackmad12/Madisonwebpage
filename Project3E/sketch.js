




let angleR;
let offsetR;



function setup() {
  // the background is a dark color to appear dark and gloomy and to make the bright colors stand out more
createCanvas(windowWidth,windowHeight);
background(15,65,65);
noStroke();

angleMode(DEGREES);
offsetR= 0.0;
noLoop();




}

function draw() {
  //creates brightly colored squares on top of a dark colored background, representing the way happy feelings can hide the dark, sad feelings for a little while

for(let i=0; i<width; i=i + 150){
for(let j=0; j< height; j=j + 150){

push();
translate(i,j);
angleR=noise(offsetR)*90;
rotate(angleR);

fill(158,244,244);
rect(0,0,100);
offsetR=offsetR +0.01;
pop();



}





}



}
