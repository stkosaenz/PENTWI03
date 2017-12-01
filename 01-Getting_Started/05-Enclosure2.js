// Omar Sáenz Mendoza
// omar.saenz@softtek.com
// MEAN: Javascript for experienced developers

function celebrityName(firstName) {
    var nameIntro = "This celebrity is ";

    function lastName(theLastName) {
        console.log(nameIntro + firstName + " " + theLastName);
    }
    return lastName;
}

var myName = celebrityName("Omar");
myName("Sáenz");