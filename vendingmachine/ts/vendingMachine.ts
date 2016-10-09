/// <reference path="./coin.ts" />

enum VendingMachineSize {
    small = 6,
    medium = 9,
    large = 12
}

class Cell {
    constructor (public product: CocaCola){

    }

    stock = ko.observable(3);
    sold = ko.observable(false);
}

class VendingMachine{
    
    private paid = ko.observable(0);
    acceptedCoins: Quarter[] = [new Quarter()];

    //Arrow function
    acceptCoin = (coin: Quarter): void => {
        let oldTotal = this.paid();
        this.paid(oldTotal + coin.Value);
    }

}