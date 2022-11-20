var face
var hair
var C1
var C2
var FC
var song
var songp = false
var music_btn
var haircolor_btn
var eyecolor_btn
var amp
var hairp = false
var eyep = false


function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)

  music_btn = createButton("讓人物哼歌")
  music_btn.position(10,10)
  music_btn.size(100, 100);
  music_btn.style('background-color', 'black');
  music_btn.style('font-size', '20px');
  music_btn.style('color', 'white');
  music_btn.mousePressed(music_btn_pressed)

  haircolor_btn = createButton("幫人物染頭髮")
  haircolor_btn.position(10,120)
  haircolor_btn.size(100, 100);
  haircolor_btn.style('background-color', 'black');
  haircolor_btn.style('font-size', '20px');
  haircolor_btn.style('color', 'white');
  haircolor_btn.mousePressed(haircolor_btn_pressed)

  eyecolor_btn = createButton("改變人物DNA")
  eyecolor_btn.position(10,230)
  eyecolor_btn.size(100, 100);
  eyecolor_btn.style('background-color', 'black');
  eyecolor_btn.style('font-size', '20px');
  eyecolor_btn.style('color', 'white');
  eyecolor_btn.mousePressed(eyecolor_btn_pressed)
  
}
function eyecolor_btn_pressed(){
  if(!eyep){
    eyep = true
  }
  else{
    eyep = false 
  }
}
function haircolor_btn_pressed(){
  if(!hairp){
  hairp = true
  }
  else{
  hairp = false 
  }
}
  function music_btn_pressed(){
  if(!songp){
  song.play()
  songp = true
  amp=new p5.Amplitude()
  }
  else{
  song.pause()
  songp = false 
 
}
}



function preload(){
   face = loadImage('01.png')
   hair = loadImage('02.png')
   song = loadSound('music.mp3')
   C1 = loadImage('01C.png')
   C2 = loadImage('02C.png')
   FC = loadImage('FC.png')

}
function draw() {
  translate(width/2,height/2)
  background(220);
  imageMode(CENTER)
  image(hair,0,0,1980,1070)
  image(face,0,0,2000,1100)
  image(FC,0,0,2000,1100)
  if(!hairp){
    image(C1,0,0,1980,1070)
  }
  else{
    image(C2,0,0,1980,1070)
  }

  
  push()
  if(!eyep){
//眼邊框
  stroke(0)
  strokeWeight(5)
  fill(13,76,145)
  ellipse(80+map(mouseX,0,width,-3,3),-70+map(mouseY,0,height,-1,3),50,63)
  ellipse(-80+map(mouseX,0,width,-3,3),-70+map(mouseY,0,height,-1,3),50,63)
 
//中間黑眼珠
  strokeWeight(1)
  fill(0)
  ellipse(80+map(mouseX,0,width,-3,3),-70+map(mouseY,0,height,-1,3),25,32)
  ellipse(-80+map(mouseX,0,width,-3,3),-70+map(mouseY,0,height,-1,3),25,32)
  }
  else{
  //眼邊框
  stroke(0)
  strokeWeight(5)
  fill(103,53,52)
  ellipse(80+map(mouseX,0,width,-3,3),-70+map(mouseY,0,height,-1,3),50,63)
  fill(81,126,181)
  ellipse(-80+map(mouseX,0,width,-3,3),-70+map(mouseY,0,height,-1,3),50,63)
 //中間黑眼珠
  strokeWeight(1)
  fill(84,33,38)
  ellipse(80+map(mouseX,0,width,-3,3),-70+map(mouseY,0,height,-1,3),25,32)
  fill(50,76,127)
  ellipse(-80+map(mouseX,0,width,-3,3),-70+map(mouseY,0,height,-1,3),25,32)  
  }


//上眼白
  fill(220)
  noStroke()
  ellipse(63+map(mouseX,0,width,-3,3),-88+map(mouseY,0,height,-1,3),18,21)
  ellipse(-97+map(mouseX,0,width,-3,3),-88+map(mouseY,0,height,-1,3),18,21)

//上粗眼睫毛
  stroke(0)
  noFill()
  strokeWeight(4)
  arc(80,-73,75,65,190,5)
  arc(-80,-73,75,65,175,350)

//細眼睫毛
  noFill()
  strokeWeight(1.5)
  arc(80,-78,85,70,205,355)//右上細眼睫毛
  arc(76,-60,80,65,30,110)//右下細眼睫毛
  arc(-80,-78,85,70,185,335)//左上細眼睫毛
  arc(-76,-60,80,65,70,150)//下細眼睫毛



//小睫毛
  noFill()
  strokeWeight(2.5)
  arc(105,-80,40,20,5,25)//右小睫毛
  arc(100,-90,45,20,5,25)
  arc(95,-100,50,20,5,25)
  arc(85,-110,55,20,5,25)
  arc(70,-115,55,20,5,25)
  arc(50,-115,65,25,0,20)
  arc(-105,-80,40,20,155,175)//左小睫毛
  arc(-100,-90,45,20,155,175)
  arc(-95,-100,50,20,155,175)
  arc(-85,-110,55,20,155,175)
  arc(-70,-115,55,20,155,175)
  arc(-50,-115,65,25,160,180)


 //鼻子
  noFill()
  strokeWeight(3)
  arc(-25,-5,55,35,10,35)
  line(-8,9,-2,14)  
  
  noFill()
  strokeWeight(2)
  arc(0,50,65,30,15,165)

if(!songp){
  noFill()
  strokeWeight(2)
  arc(0,50,65,30,15,165)
}
else{
  strokeWeight(2)
  fill(255,0,0)
  arc(0,50,60,60,15,165,OPEN)
}
pop()



}