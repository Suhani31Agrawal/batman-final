class Drop {
    constructor(x,y,r) {
      var options = {
        isStatic:false,
        restitution:0.4,
          friction:0,
          density:0.8
      }
      this.body = Bodies.circle(x,y,r,options);
      this.r = r;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y)
      ellipseMode(CENTER);
      fill("blue");
      ellipse(0, 0, this.r*2, this.r*2);
      pop();
    }
  };