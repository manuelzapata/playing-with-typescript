import getVendingProduct from "./productFactory";
import {Product, Initial as Init} from "./product";
import * as Coins from "./coin";

export enum VendingMachineSize {
    small = 6,
    medium = 9,
    large = 12
}

class Cell {
    constructor (public product: Product){

    }

    //type inference is also applied to generics.
    stock = ko.observable(3);
    sold = ko.observable(false);
}

export class VendingMachine{
    
    private paid = ko.observable(0);
    selectedCell = ko.observable(new Cell(new Init()));
    cells = ko.observableArray([]);
    acceptedCoins: Array<Coins.Coin> = [new Coins.Dime(), new Coins.Quarter(), new Coins.Half(), new Coins.Dollar()];
    canPay = ko.pureComputed(() => this.paid() - this.selectedCell().product.price >= 0);

    set size(givenSize: VendingMachineSize){
        //Call it as a function because it is an ko observable array
        this.cells([]);

        for (let index=0; index < givenSize; index++) {
            let product = getVendingProduct();
            this.cells.push(new Cell(product));
        }
    }

    select = (cell: Cell): void => {
        cell.sold(false);
        this.selectedCell(cell);
    }

    //Arrow function
    acceptCoin = (coin: Coins.Coin): void => {
        let oldTotal = this.paid();
        this.paid(oldTotal + coin.value);
    }

    pay = (): void => {
        if(this.selectedCell().stock() < 1){
            alert("I'm sorry, we're out of them!");
            return;
        }
        let currentPaid = this.paid();
        this.paid(Math.round( ((currentPaid - this.selectedCell().product.price) * 100))/100);
        let currentStock = this.selectedCell().stock();
        this.selectedCell().stock(currentStock - 1);
        this.selectedCell().sold(true);
    }

}