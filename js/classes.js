class Character {
    constructor(){
        this.attributes = {
            strength:10,
            agility:10,
            stamina:10
        }
        this.life=this.attributes.stamina*10
    }
}

class Player extends Character{
    constructor(){
        super()
    }
}
class Enemy extends Character{
    constructor(){
        super()
    }
}