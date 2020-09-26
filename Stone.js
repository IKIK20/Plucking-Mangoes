class Stone {
    constructor(x,y){
      var options={
        'isStatic':false,
        'restitution':0,
        'friction':1.0,
        'density':1.2
      }
      this.body=Bodies.circle(x,y,15,options)
      
      this.image = loadImage("stone.png");
    }
  
    display() {
     // this.body.position.x = mouseX;
     // this.body.position.y = mouseY;
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, 60,60);
    pop();
    }
  }