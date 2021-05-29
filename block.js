class Block extends BaseClass{
    constructor(x, y, width, height) {
      super(x,y,50,50);
       //add image for block
       this.image = loadImage("block.png");
       //to make the block vanish
       this.visibility = 255
        var options = {
          //restitution: 0.4,
          friction: 0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        //to check the speed of the block
        console.log(this.body.speed);
        //display boxes when speed is less than 3
        if(this.body.speed<3){
          super.display();
        }
        else{
          push();
        World.remove(world, this.body);
        this.visibility = this.visibility-5;
        tint(255, this.visibility);
        image(this.image, this.body.position.x,this.body.position.y)
        pop();
        }
      }
}
