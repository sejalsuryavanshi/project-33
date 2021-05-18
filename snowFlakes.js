class SnowFlakes{

constructor(x,y,w,h){

    var options={
    restitution:0,
    friction:1.0,
    density:1.0
    }

    this.body=Bodies.rectangle(x,y,w,h,options);
    this.w=width;
    this.h=height;
    this.image=loadImage("snow4.webp")

    World.add(world,this.body);
}

display(){
   
    var position=this.body.position;
    push();
    translate(this.body.position.x, this.body.position.y)
    imageMode (CENTER);
    image(this.image,0,0,this.width, this.height);
    pop();
}







}