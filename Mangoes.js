class Mangoes extends BaseClass{
    constructor(x,y,height,angle){
      super(x,y,60,height,angle);
      this.image = loadImage("mango.png");
      Matter.Body.setAngle(this.body, angle);
      var options={
        'isStatic':false,
        'restitution':0,
        'friction':1,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
    }
  }