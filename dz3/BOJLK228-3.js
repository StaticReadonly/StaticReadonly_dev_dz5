const ranks = [
    {name: "Greatest", level: 100},
    {name: "Master", level: 90},
    {name: "Champion", level: 80},
    {name: "Conqueror", level: 70},
    {name: "Elite", level: 60},
    {name: "Sage", level: 50},
    {name: "Veteran", level: 40},
    {name: "Warrior", level: 30},
    {name: "Fighter", level: 20},
    {name: "Novice", level: 10},
    {name: "Pushover", level: 0}
];

function getRank(level){
    for (const r of ranks){
        if (level >= r.level)
            return r.name;
    }
}

class Warrior{
    constructor(){
        this._level = 1;
        this._rank = "Pushover";
        this._exp = 100;
        this._achievements = [];
    }

    level(){
        return this._level;
    }
    rank(){
        return this._rank;
    }
    experience(){
        return this._exp;
    }
    achievements(){
        return this._achievements;
    }

    updateExp(exp){
        if (this._exp + exp > 10000)
            this._exp = 10000;
        else
            this._exp += exp;
    }

    updateLevel(){
        this._level = Math.floor(this._exp / 100);
    }

    updateRank(){
        for (const r of ranks){
            if (this._level >= r.level){
                this._rank = r.name;
                break;
            }
        }
    }

    updateStats(exp){
        this.updateExp(exp);
        this.updateLevel();
        this.updateRank();
    }

    battle(warrior_level){
        if (warrior_level < 1 || warrior_level > 100)
            return "Invalid level";

        if (warrior_level === this._level){
            this.updateStats(10); 
            return "A good fight";
        }
        else if (warrior_level + 1 === this._level){
            this.updateStats(5);
            return "A good fight";
        }
        else if (warrior_level > this._level){
            if (this._level + 5 <= warrior_level && this._rank !== getRank(warrior_level))
                return "You've been defeated";
            else
                this.updateStats(20 * Math.pow(warrior_level - this._level, 2));
                return "An intense fight";
        }
        else
            return "Easy fight";
    }

    training(train){
        if (train[2] <= this._level){
            this._achievements.push(train[0]);
            this.updateStats(train[1]);
            return train[0];
        }
        else{
            return "Not strong enough";
        }
    }
}