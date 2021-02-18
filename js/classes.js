class Character {
    constructor(){
        this.attributes = {
            strength:{
                label:"Strength",
                selector:"strength",
                value:10
            },
            agility:{
                label:"Agility",
                selector:"agility",
                value:8
            },
            stamina:{
                label:"Stamina",
                selector:"stamina",
                value:9
            },
        }
        this.life=this.attributes.stamina.value*10
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