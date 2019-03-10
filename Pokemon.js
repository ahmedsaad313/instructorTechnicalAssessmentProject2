class Pokemon{
    constructor(name, attack, defense, health, type) {
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.health = health;
        this.starthealth = health;
        this.type = type;
    }
    takeDamage(damage){
        this.health=this.health-damage;
        if (0>this.health){
            this.health = 0;
        }
    }
    attackOpponent(opponent){
        let blow = this.attack - opponent.defense;
        if(blow < 1){
            blow = 1;
        }
        opponent.takeDamage(blow);
    }
    display(){
        return (this.name.toUpperCase() + 
        " (" + this.type.toUpperCase()+ ") " + this.health 
        + "/" + this.starthealth);
    }
}