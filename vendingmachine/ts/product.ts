import * as categories from "./productCategory";

export interface Product {
    name: string;
    price: number;
    category?: categories.ProductCategory;
}

export class Initial implements Product{
    name = "Please select a product";
    price = 0;
}

export class CocaCola implements Product {
    name = "Coca-Cola";
    price = 2.30;
    category = new categories.SodaCategory();
}

export class Sprite implements Product {
    name = "Sprite";
    price = 2.10;
    category = new categories.SodaCategory();
}

export class Gummies implements Product {
    name: string = "Gummies";
    price = 1.90;
    category = new categories.CandyCategory();
}

export class Hershey implements Product {
    name: string = "Hershey's";
    price = 1.30;
    category = new categories.CandyBarCategory();
}

export class MilkyWay implements Product {
    name: string = "Milky Way";
    price = 1.80;
    category = new categories.CandyBarCategory();
}