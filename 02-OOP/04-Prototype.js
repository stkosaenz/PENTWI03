// Omar Sáenz Mendoza
// omar.saenz@softtek.com
// MEAN: Javascript for experienced developers

const vegetable = function () {
    this.type = "Veggie";
}

vegetable.prototype.print = function () {
    console.log(this.type + " is good for you");
}

var carrot = new vegetable();
carrot.print();

vegetable.prototype.color = "Wonderful color";
carrot.color = "orange";

console.log(carrot.color);