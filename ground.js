class ground{

    constructor(x,y,width,height){

        var option={

            isStatic:true

        }

        this.groundObject = Bodies.rectangle(x,y,width,height,option);
        World.add(world, this.groundObject);
        this.width=width;
        this.height=height;

    }
    display(){
        rectMode(CENTER);
        fill("pink");
        stroke(0);

        rect(this.groundObject.position.x,this.groundObject.position.y,this.width,this.height);

    }
}