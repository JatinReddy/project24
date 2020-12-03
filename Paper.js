class Paper {
    constructor(x,y,r){
        var options = {
            isStatic : false,
            restituition : 2,
            friction:0.5,
            density : 1.2
            
        }
            
       
        this.body = Bodies.circle(x,y,r/2,options);
        World.add(world,this.body);
        this.x = x;
        this.y = y;
        this.r = r;
        
    }
    display (){
        var paperpos = this.body.position;

        push();
        fill("pink");
        translate(paperpos.x,paperpos.y);
        rectMode(CENTER);
        
        ellipse(0,0,this.r,this.r);
        pop();
    }
}