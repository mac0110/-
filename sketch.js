function setup() {
  createCanvas(400, 400);
}

function draw() {
  rectMode(CENTER)
  background(0);
  noFill(0)
  stroke(255)
  //ellipse(25,25,50)
  //rect(25,25,50)
  //ellipse(50,50,25)

 // ellipse(25+50,25,50)
 // rect(25+50,25,50)
 // ellipse(50+50,50,25)

 // ellipse(25+50*2,25,50)
  //rect(25+50*2,25,50)
 // ellipse(50+50*2,50,25)

  //ellipse(25+50*3,25,50)
  //rect(25+50*3,25,50)
 // ellipse(50+50*3,50,25)


  //ellipse(25+50*4,25,50)
  //rect(25+50*4,25,50)
 // ellipse(50+50*4,50,25)

  //ellipse(25+50*5,25,50)
 // rect(25+50*5,25,50)
//ellipse(50+50*5,50,25)

 // ellipse(25+50*6,25,50)
 // rect(25+50*6,25,50)
 // ellipse(50+50*6,50,25)
 //for(var i=0;i<windowWidth/50;i++)
 {
// ellipse(25+50*i,25,50)
 //rect(25+50*i,25,50)
// ellipse(50+50*i,50,25)
 }
 //for(var i=0;i<windowWidth/50;i++)
{
//ellipse(25+50*i,25+50,50)
//rect(25+50*i,25+50,50)
//ellipse(50+50*i,50+50,25)
}
 

 //for(var i=0;i<windowWidth/50;i++)
{
//ellipse(25+50*i,25+50*2,50)
//rect(25+50*i,25+50*2,50)
//ellipse(50+50*i,50+50*2,25)
}
 
////for(var i=0;i<windowWidth/50;i++)
{
//ellipse(25+50*i,25+50*3,50)
//rect(25+50*i,25+50*3,50)
//ellipse(50+50*i,50+50*3,25)
}
for (var j=0;j<windowHeight/50;j++){
for(var i=0;i<windowWidth/50;i++){
stroke("#a4c3b2")
ellipse(25+(i*50),25+(j*50),mouse/10);
stroke("#6b9080")
rect(0+(i*50),0+(j*50),50,mouseY/4);
stroke("#f6fff8")
ellipse(50+(i*50),50+(j*50),25)
}
}




}
