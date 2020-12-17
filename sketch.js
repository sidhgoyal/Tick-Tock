


function setup() {
  createCanvas(400,400);
  
  
}

function draw() {
  background(0);
  fill("darkgreen");
  textSize(20)
  stroke("lightgreen")
  text("Tick Tock", 150,20);
  
  
  let hr = hour();
  let mn = minute();
  let sc = second();
 
  fill("blue")
  text("Time is "+hr+":"+mn+":"+sc,140,380)
  
  translate(200,200);
  rotate(-90);

  //sec
  strokeWeight(8);
  stroke("lightGreen");
  noFill();
  var sec = map(sc,0,60,0,360);
  arc(0,0,300,300,0,sec);

  push();
  rotate(sec);
  strokeWeight(7);
  stroke("lightgreen");
  line(0,0,100,0);
  pop();
  //////////////////////////////////////////
  //min
  strokeWeight(8);
  stroke(0,255,0);
  noFill();
  var min = map(mn,0,60,0,360);
  arc(0,0,280,280,0,min);

  push();
  rotate(min);
  strokeWeight(7);
  stroke(0,255,0);
  line(0,0,75,0);
  pop();
  //////////////////////////////////////////
  //hrs
  strokeWeight(8);
  stroke("green");
  noFill();
  var h = map(hr%12,0,12,0,360);
  arc(0,0,260,260,0,h);

  push();
  rotate(h);
  strokeWeight(7);
  stroke("green");
  line(0,0,50,0);
  pop();
  //////////////////////////////////////////
  //pt
  push();
  stroke("white");
  point(0,0);
  pop();

}
