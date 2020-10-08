


let xposList = [100,200,500,1000,800,900];
let yposList = [400,300,300,600,600,500];
let yspeedList = [10,20,20,10,20,10];
let xspeedList = [10,20,20,10,20,10];
function setup() {
  // put setup code here
createCanvas(windowWidth,windowHeight);


}

function draw() {
  //Put draw code here
  background(130,10,130);



for(let i = 0; i < xposList.length; i = i + 1){
circle(xposList[i], yposList[i],50);

xposList[i]= xposList[i] + xspeedList[i];
yposList[i] = yposList[i] + yspeedList[i];

if(yposList[i] > height){
  yspeedList[i] = -yspeedList[i];
}
if(yposList[i] < 0){
yspeedList[i] = -yspeedList[i];

}
if(xposList[i] > width){
  xspeedList[i] = -xspeedList[i];
}
if(xposList[i] < 0){
  xspeedList[i] = -xspeedList[i];
}
}
}
