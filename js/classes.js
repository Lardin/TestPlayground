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
                value:10
            },
            stamina:{
                label:"Stamina",
                selector:"stamina",
                value:9
            },
        }
        this.life=this.attributes.stamina.value*10
        this.actualLife=this.life
        this.baseActionSpeed=2000
        this.actionSpeed=40+this.attributes.agility.value
        this.actionMeter=0
    }
    waitUntilAtion(){
        this.actionMeter+=this.actionSpeed
        if(this.actionMeter>this.baseActionSpeed){
            var excess = this.actionMeter - this.baseActionSpeed
            while(excess>0){
                this.action()
                excess -= this.baseActionSpeed
            }
            this.actionMeter = 0
        }
        return this.actionMeter
    }
    calcDamage(){
        return this.attributes.strength.value
    }
    action(){
        if(this instanceof Player){
            game.enemy.actualLife -= this.calcDamage()
        }
        if(this instanceof Enemy){
            game.player.actualLife -= this.calcDamage()
        }
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
        this.baseActionSpeed=4000
    }
}