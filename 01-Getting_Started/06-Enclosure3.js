// Omar Sáenz Mendoza
// omar.saenz@softtek.com
// MEAN: Javascript for experienced developers

function theLocation() {
    var city = "San Francisco";

    return {
        get: function () { console.log(city); },
        set: function (newCity) { city = newCity; }
    }
}

var myPlace = theLocation();
myPlace.get();
myPlace.set("Aguascalientes");
myPlace.get();