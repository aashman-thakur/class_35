
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint


function setup() {
	createCanvas(800,400);
    engine = Engine.create();
	world = engine.world;
  
  ball=new Ball(200,100)
   g=new Ground(400,375,800,40)  
  b1=new box(500,300,45,45)
  b2=new box(545,300,45,45)
  b3=new box(500,250,45,45)
  b4=new box(545,250,45,45)
  b5=new box(500,200,45,45)
  b6=new box(545,200,45,45)
  b7=new box(500,150,45,45)
  b8=new box(545,150,45,45)
  b9=new box(500,100,45,45)
  b10=new box(545,100,45,45)
  c=new Chain(ball.body,{x:400,y:50})
 
    Engine.run(engine);
  
}


function draw() {
  background(220)
  ball.display()
  g.display()
  b1.display()
  b2.display()
  b3.display()
  b4.display()
  b5.display()
  b6.display()
  b7.display()
  b8.display()
  b9.display()
  b10.display()
  c.display()

}
  