class Quarter {
    
    //Field
    private value = .25;

    //Property
    get Value() {
        return this.value;
    }

    set Value(newValue: number){
        this.value = newValue;
    }

    getImageUrl()  {
        return "img/Quarter.png";
    }
    
}