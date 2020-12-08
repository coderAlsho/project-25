class dustbin{

    constructor(x,y,width,height){

        var option={

            isStatic:true

        }

       this.width = width;
       this.height = height;
        this.dustbinObject = Bodies.rectangle(x,y,width,height,option);
        World.add(world,this.dustbinObject);

    }

    display(){
        fill("white");
        noStroke();
        rectMode(CENTER);
        rect(this.dustbinObject.position.x,this.dustbinObject.position.y,this.width,this.height);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);

    }

}