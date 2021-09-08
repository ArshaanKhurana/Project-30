class Block{
    constructor(x, y,color) {
        var options = {
           
            restitution :0.4,
            friction :0.0,
            //isStatic:true
           
        }
        this.body = Bodies.rectangle(x,y,30,40,options);
        World.add(world, this.body);
        this.color=color
        this.visiblity=255;
      }
      display(){
        if(this.body.speed<3) {
          var angle = this.body.angle;
          var pos = this.body.position;
          push();
          translate(pos.x,pos.y);
          rotate(angle);
          fill(this.color)
          stroke("black")
          rectMode(CENTER);
          rect(0,0,30,40);
          pop();
          }
        else{
          World.remove(world,this.body);
          push();
          this.visiblity = this.visiblity -5;
          tint(255,this.visiblity);
          pop();
    
        }
      }
    }
