let img;
let img1;
let partImage;

function preload(){

img1= loadImage('https://i.imgur.com/9jqK7Wq.png ');
img= loadImage('https://i.imgur.com/9jqK7Wq.png');

}


function setup() {
  // put setup code here
createCanvas(windowWidth,windowHeight);
image(img,0,0);
partImage= get(120,50,150,150);
background(200,10,120);
}

function draw() {
  //Put draw code here
  for(let i=0;i< width;i=i+150){
    tint(random(0,255),random(0,255),random(0,255));
      image(partImage,i,0);

  }

  image(img1,0,0);
  blend(img1,250,100,250,250,1000,300,250,250,DIFFERENCE);



}
