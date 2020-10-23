class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.01,
            length: 200
        }
        
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    

    display(){
        var pointA=this.sling.bodyA.position
        var pointB=this.pointB
       
            push()
            stroke(61,28,10)
            strokeWeight(7)
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            pop ()
        }
}    

   