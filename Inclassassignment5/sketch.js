let lemonList = [];
let orangeList = [];
let xposList = [];
let yposList = [];

let yspeedList = [];

function preload(){


for (let i = 0; i < 20; i = i + 1){
lemonList[i]= loadImage('https://i.imgur.com/gqP6Vts.png');


  }
for(let m=0; m < 20; m = m + 2){
orangeList[m]= loadImage('https://i.imgur.com/pwIz6cm.png ');

}

}


function setup() {
  // put setup code here
createCanvas(windowWidth,windowHeight);
for (let i = 0;i < 20; i=i+1){
  yposList[i] = 0;
  xposList[i] = random(0,width);
  yspeedList[i] = random(1,20);


}

for (let m=0;m < 20; m = m + 2){
  yposList[m] = 0;
  xposList[m] = random(0,width);
  yspeedList[m] = random(2,5);


}



}








function draw() {
  //Put draw code here
  background(200,10,120);
  imageMode(CENTER);

  for (let i = 0; i < 20; i = i + 1){
    image(lemonList[i],xposList[i],yposList[i],100,100);

    yposList[i] = yposList[i] + yspeedList[i];
    if(yposList[i] < 0){
      yposList[i]=height;

    }
  }

for (let m=0;m < 20; m = m + 2){
image(orangeList[m], xposList[m],yposList[m],100,100);

yposList[m] = yposList[m] + yspeedList[m];
if(yposList[m]<0){
  yposList[m]=height;
}
}


}
