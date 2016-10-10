/// <reference path="product.ts" />


class ProductFactory{

    static GetProduct(): Product {
        let random = Math.floor(Math.random() * 5);
        switch(random){
            case 0: return new CocaCola();
            case 1: return new Sprite();
            case 2: return new Gummies();
            case 3: return new Hershey();
            case 4: return new MilkyWay();
        }
    }

}