var hr,mn,sc;


var scAngle,mnAngle,hrAngle;

function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);
  

}

function draw() {
  background("indigo");  

  stroke("cyan");
  strokeWeight(14);
  text("#AI CLOCK",400,100);

  strokeWeight(12);
  stroke("yellow");
  text("BANG! BANG! KEEP YOUR EYES AT 12", 400,200);

  stroke("red");
  strokeWeight(12);
  text("OUT AT 12!!!",400,300);


  translate(200,200);
    rotate(-90);

  hr= hour();
  mn= minute();
  sc= second();

  

  
  scAngle = map(sc,0,60,0,360);
  push();
  rotate(scAngle);
  stroke("orange");
  strokeWeight(7);
  line(0,0,100,0);
  pop();


  mnAngle = map(mn,0,60,0,360);
  push();
  rotate(mnAngle);
  stroke("white");
  strokeWeight(7);
  
  line(0,0,75,0)
  pop();

  


  hrAngle = map(hr%12,0,12,0,360);
  push();
  rotate(hrAngle);
  stroke("lime");
  strokeWeight(7);
  line(0,0,50,0);
  
  pop();
  
  

  
  

  drawSprites();

  
  
  strokeWeight(10);
  noFill();
  stroke("orange");
  arc(0,0,300,300,0,scAngle);

  stroke("white");
  arc(0,0,280,280,0,mnAngle);

  stroke("lime");
  arc(0,0,260,260,0,hrAngle);
}