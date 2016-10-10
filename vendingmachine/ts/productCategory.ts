

abstract class ProductCategory {
    protected imgPath = "img/";

    name: string;
    abstract getImageUrl(): string;
}

class SodaCategory extends ProductCategory {

    name = "Soda";

    getImageUrl() {
        console.log(this.imgPath);
        return this.imgPath +  "SodaCan.png";
    }
}

class ChipsCategory extends ProductCategory {

    name = "Potato chips";

    getImageUrl() {
        return this.imgPath +  "Chips.jpg";
    }
}

class CandyCategory extends ProductCategory {

    name = "Candy";

    getImageUrl() {
        return this.imgPath +  "Candy.png";
    }
}

class CandyBarCategory extends ProductCategory {

    name = "Candy bar";

    getImageUrl() {
        return this.imgPath +  "CandyBar.png";
    }
}