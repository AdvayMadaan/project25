class paper{
    constructor(x,y,r){
        var option={
            density:1.2,
            isStatic:false,
            restitution:0.3,
            friction:0
        }

        this.body=Bodies.circle(x,y,r,option)
        this.r=r
        this.image=loadImage("paper.png")
        World.add(world,this.body)

        
    }

    display(){
        var pos=this.body.position
        var angle=this.body.angle
        push();
        translate(pos.x,pos.y)
        rotate(angle)
        imageMode(CENTER)
        image(this.image,0,0,this.r,this.r)
        pop();
        
    }
}