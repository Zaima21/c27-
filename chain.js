class chain{
    constructor (bodyA,bodyB){
        var link_options={
            bodyA :bodyA,
            bodyB : bodyB,
            length :20,
            stifness : 0.7
        }
    
    
        this.chain = Constraint.create(link_options);
        World.add(world,this.chain);
    
    }
    }
}
