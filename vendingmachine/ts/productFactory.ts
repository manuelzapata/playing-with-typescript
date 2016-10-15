import * as products from "./product";

//default export. Only applies to one element of the module.
export default function GetProduct(): products.Product {
    let random = Math.floor(Math.random() * 5);
    switch(random){
        case 0: return new products.CocaCola();
        case 1: return new products.Sprite();
        case 2: return new products.Gummies();
        case 3: return new products.Hershey();
        case 4: return new products.MilkyWay();
    }
}