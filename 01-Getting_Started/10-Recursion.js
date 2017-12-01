// Omar Sáenz Mendoza
// omar.saenz@softtek.com
// MEAN: Javascript for experienced developers

var factorial = function (n) {
    return !(n > 1) ? 1 : arguments.callee(n - 1) * n;
}

console.log(factorial(5));