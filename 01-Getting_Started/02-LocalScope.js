// Omar Sáenz Mendoza
// omar.saenz@softtek.com
// MEAN: Javascript for experienced developers

var color = "blue";

function printColor() {
    var color = "purple"; //Global
    console.log(color); //Purple
}
printColor();
console.log(color); //blue
