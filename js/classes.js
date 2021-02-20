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
        this.actualLife=this.life
    }
    action(){
        console.log("Action")
    }
}

class Player extends Character{
    constructor(){
        super()
        this.baseActionSpeed=2000
    }
}
class Enemy extends Character{
    constructor(){
        super()
    }
}