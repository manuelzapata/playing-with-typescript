abstract class Coin {
    constructor(public value: number){
    }
    abstract getImageUrl(): string;
}

class Quarter extends Coin {

    constructor(){
        super(.25);
    }

    getImageUrl()  {
        return "img/Quarter.png";
    }
    
}

class Dime extends Coin {
    
    constructor(){
        super(.10);
    }

    getImageUrl (){
        return "img/Dime.png";
    }
}

class Half extends Coin {
    
    constructor(){
        super(.5);
    }

    getImageUrl (){
        return "img/Half.jpg";
    }
}

class Dollar extends Coin {
    
    constructor(){
        super(1);
    }

    getImageUrl (){
        return "img/Dollar.jpg";
    }
}