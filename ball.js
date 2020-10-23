class Ball {
    constructor(x,y) {
      var options = {
          density:5,
          friction:0.5
}
      this.body = Bodies.circle(x,y,30,options);
      this.radius=30
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(RADIUS);
      fill("gray");
      circle(pos.x, pos.y,this.radius);
    }
  };