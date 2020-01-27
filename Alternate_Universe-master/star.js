class Star{
  constructor(x,y,width){
      var options = {
        'isStatic':true
      };
      this.width = width;
      this.width = width;
      this.image = loadImage("star.png");
      this.body = Bodies.rectangle(x,y,width,width,options);
      World.add(world,this.body);
  }
  display(name){
   image(this.image,this.body.position.x,this.body.position.y,this.width,this.width);
   imageMode(CENTER);
   if(frameCount %5 == 0){
    this.width = this.width+1;
   }
   text(name,this.body.position.x,this.body.position.y);
   textAlign(CENTER);

  }
}