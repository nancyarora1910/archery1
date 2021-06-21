class ComputerBase {
    constructor(x,y,width,height) {
        var options = {
            isStatic: true
        }

        this.shape = Bodies.rectangle(x,y,width,height,options)
        this.width = width
        this.height = height
        this.Image = loadAnimation("./assets/base1.png","./assets/base2.png")
        //this.Image = loadImage("./assets/base2.png")

        World.add(world,this.shape)
    }

    show() {
        var pos = this.body.position
        var angle = this.body.angle

        push ()
        translate (pos.x,pos.y)
        rotate (angle)
        imageMode (CENTER)
        image (this.image,0,0,this.width,this.height)
        pop ()
    
    }
}