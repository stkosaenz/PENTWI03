// Omar Sáenz Mendoza
// omar.saenz@softtek.com
// MEAN: Javascript for experienced developers

// function expression
var sayHi = function () {
    console.log("Hello");
}

// in an object
var Pony = {
    sayName: function () {
        console.log("My name is Pony");
    }
};

// event handler
// $("p").click = function () {
//     console.log("hello");
// }

// self invoking
(function () {
    console.log("self hello!");
})();