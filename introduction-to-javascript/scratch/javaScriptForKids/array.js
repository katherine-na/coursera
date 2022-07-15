// array

var shoppingList = ["milk", "eggs", "bread", "apples", "avocado", "wather"];
console.log(shoppingList);

// accessing an array's elements

console.log(shoppingList[0]);
console.log(shoppingList[4]);

// changing elements in an array

shoppingList[0] = "juice";
console.log(shoppingList);

// maxing data types in an array

var kathy = ["negrete", ["mexican", "student", "single"], 21];
console.log(kathy);

console.log(kathy[1]);
console.log(kathy[1][2]);

// working with arrays
// length on an array

console.log(kathy.length);

// .unshift on an array

var myFavoriteAnimals = ["cats", "dogs", "hamster"];
console.log(myFavoriteAnimals);

myFavoriteAnimals.unshift("meerkat");
console.log(myFavoriteAnimals);

// push on an array

myFavoriteAnimals.push("polar bear");
console.log(myFavoriteAnimals);

// .shift on an array
myFavoriteAnimals.shift();
console.log(myFavoriteAnimals);

// .pop on an array

myFavoriteAnimals.pop();
console.log(myFavoriteAnimals);

// adding arrays .concat

var momsFamily = ["Guille", "Aurora", "Cesar", "Jaime"];
var dadsFamily = ["Jorgue", "Noe", "Oscar", "Cesar"];
var myFamily = momsFamily.concat(dadsFamily);
console.log(myFamily);

// joinig multiple arrays

var sistersFamily = ["Mathy", "Oscar", "Liz", "Marilyn", "Ravi"];
var allFamily = [momsFamily.concat(dadsFamily, sistersFamily)];
console.log(allFamily);

// .index of an element in an array

var myFavoriteColors = ["blue", "pink", "black", "white"];
console.log(myFavoriteColors.indexOf("white"));

var insects = ["bee", "ant", "bugs"];
console.log(insects.indexOf("bee"));

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
