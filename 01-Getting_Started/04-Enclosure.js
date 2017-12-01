// Omar Sáenz Mendoza
// omar.saenz@softtek.com
// MEAN: Javascript for experienced developers

function showName(firstName, lastName) {
    var nameIntro = "Your name is ";

    function makeFullName() {
        return nameIntro + firstName + " " + lastName;
    }

    return makeFullName();
}

const fn = showName("Omar", "Sáenz");
console.log(fn);