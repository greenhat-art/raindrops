//making drops using array and for function
var drop = [100];

function setup() {
  createCanvas(400,400);
  
  for(var i=0;i<100;i++){
     drop[i] = new rainDrops;
  }
}

function draw() {
  background(145);
  for(var i=0;i<100;i++){
    drop[i].display();  
    drop[i].fall();
  }
}