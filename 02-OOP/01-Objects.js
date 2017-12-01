// Omar Sáenz Mendoza
// omar.saenz@softtek.com
// MEAN: Javascript for experienced developers

const myGrades = {};

const collegeAlgebra = {
    level: "Freshman",
    difficulty: "Hard",
    expectedGrade: 98,
    textbook: function () {
        console.log("College Algebra for Freshman is the required text.");
    }
};

var collegeAlg = new Object();
collegeAlg.level = "Freshman";
collegeAlg["textbook"] = function () {
    console.log("College Alg for Freshman is the required text.");
}

const idk = collegeAlg["textbook"];

console.log(collegeAlgebra);
console.log(collegeAlg);

idk();