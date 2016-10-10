/// <reference path="productCategory.ts" />

interface Product {
    name: string;
    price: number;
    category?: ProductCategory;
}

class Initial implements Product{
    name = "Please select a product";
    price = 0;
}

class CocaCola implements Product {
    name = "Coca-Cola";
    price = 2.30;
    category = new SodaCategory();
}

class Sprite implements Product {
    name = "Sprite";
    price = 2.10;
    category = new SodaCategory();
}

class Gummies implements Product {
    name: string = "Gummies";
    price = 1.90;
    category = new CandyCategory();
}

class Hershey implements Product {
    name: string = "Hershey's";
    price = 1.30;
    category = new CandyBarCategory();
}

class MilkyWay implements Product {
    name: string = "Milky Way";
    price = 1.80;
    category = new CandyBarCategory();
}