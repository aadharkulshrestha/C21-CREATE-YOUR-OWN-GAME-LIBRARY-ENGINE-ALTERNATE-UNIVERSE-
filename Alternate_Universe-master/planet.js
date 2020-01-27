class Planet{
    constructor(x,y,width,imagename){
        var options = {
          'isStatic':true
        };
        this.width = width;
        this.width = width;
        this.image = loadImage(imagename);
        this.body = Bodies.rectangle(x,y,width,width,options);
        World.add(world,this.body);
    }
    display(name){
     image(this.image,this.body.position.x,this.body.position.y,this.width,this.width);
     imageMode(CENTER);
     fill(255);
     text(name,this.body.position.x,this.body.position.y+this.width);
     textAlign(CENTER);
    }
  }