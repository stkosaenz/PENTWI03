// Omar Sáenz Mendoza
// omar.saenz@softtek.com
// MEAN: Javascript for experienced developers

const seafood = {
    small: "Shrimp",
    big: "Shark"
};

console.log("small" in seafood);

console.log(seafood.hasOwnProperty("toString"));

for (const item in seafood) {
    console.log(item + ":" + seafood[item]);
}