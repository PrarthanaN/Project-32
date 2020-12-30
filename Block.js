class Block{
    constructor(x, y, width, height){
        var block_options ={
            restitution: 0.8,
            isStatic: false
        }
        this.Visibility = 255;
        this.body = Bodies.rectangle(x, y, width, height, block_options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }

    display(){
        if (this.body.speed < 3){

        
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        //fill("pink");
        rect(0,0,this.width,this.height);
        pop();}
        else {
            World.remove(world, this.body);
            push();
            this.Visibility = this.Visibility - 5;
            tint(255, this.Visibility);
            pop();
        }
    }
    score(){
        if (this.Visibility < 0 && this.Visibility > -105){
            score++;
        }
    }
}