// Omar Sáenz Mendoza
// omar.saenz@softtek.com
// MEAN: Javascript for experienced developers

function Fruit(name, color) {
    console.log("Object created by constructor");

    this.type = function () {
        console.log("Hi, I am a fruit");
    }

    this.name = name;
    this.color = color;
}

const orange = new Fruit("orange", "orange");
orange.type();
console.log(orange);