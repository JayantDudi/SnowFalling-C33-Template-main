class Drop {
    constructor(x,y) {

        var options = {
            restitution: 0.8,
            friction: 0.3,
            density: 1,
        }
        this.body = Bodies.circle(x,y,5,options);
        this.radius = 5;
        World.add(world,this.body);
    }
    display() {
        var pos = this.body.position
        fill("blue");
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radius)
    }

    updateY() {
        if(this.body.position.y > height){

            Matter.Body.setPosition(this.body, {x:random(0,400), y:random(0,400)})
        }
    }
}