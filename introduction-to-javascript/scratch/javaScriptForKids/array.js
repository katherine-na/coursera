// array

var shoppingList = ["milk", "eggs", "bread", "apples", "avocado", "wather"];

// changing elements in an array

shoppingList[0] = "juice";

// maxing data types in an array

var kathy = ["negrete", ["mexican", "student", "single"], 21];

// working with arrays
// length on an array

console.log(kathy.length);

// .unshift on an array

var myFavoriteAnimals = ["cats", "dogs", "hamster"];

myFavoriteAnimals.unshift("meerkat");

// push on an array

myFavoriteAnimals.push("polar bear");

// .shift on an array
myFavoriteAnimals.shift();

// .pop on an array

myFavoriteAnimals.pop();

// adding arrays .concat

var momsFamily = ["Guille", "Aurora", "Cesar", "Jaime"];
var dadsFamily = ["Jorgue", "Noe", "Oscar", "Cesar"];
var myFamily = momsFamily.concat(dadsFamily);

// joinig multiple arrays

var sistersFamily = ["Mathy", "Oscar", "Liz", "Marilyn", "Ravi"];
var allFamily = [momsFamily.concat(dadsFamily, sistersFamily)];

// .index of an element in an array

var myFavoriteColors = ["blue", "pink", "black", "white"];

var insects = ["bee", "ant", "bugs"];

// .join

var americaCountries = [
  "Canada",
  "USA",
  "Mexico",
  "Colombia",
  "Brasil",
  "Argentina",
  "Chile",
];

console.log(americaCountries.join());
console.log(americaCountries.join(" - "));
console.log(americaCountries.join(" * "));

var mexicanFood = [
  "Pozole",
  "Mole",
  "Quesadillas",
  "Tlacoyos",
  "Pambazos",
  "chiles",
];

console.log(mexicanFood.join(" "));
console.log(mexicanFood.join(" y "));
