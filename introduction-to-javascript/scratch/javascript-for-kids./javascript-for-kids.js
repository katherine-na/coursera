// strings
var myMomsName = "Claudia";
var myTrueMomsNameLength = myMomsName.length;
// console.log(myTrueMomsNameLength);

myMomsName = "Marilyn";
// console.log(myMomsName);

myMomsName = "Rous";
// console.log(myMomsName);

let myDadsName = "Jose";

myDadsName = "Benjamin";
// console.log(myDadsName);

var myDadsNameLength = myDadsName.length;
// console.log(myDadsNameLength);

var myMomsNameLength = myMomsName.length;
// console.log(myMomsNameLength);

// 4 variables
// output
// 6
// 7
// 5
// 9

var myFavoriteCat = "Kevin Stiven";
var myFavoriteCatLength = myFavoriteCat.length;
console.log(myFavoriteCatLength);

var myFavoriteCat2 = "Timon";
var myFavoriteCatLength2 = myFavoriteCat2.length;
console.log(myFavoriteCatLength2);

var myFavoriteCat3 = "Mishuga";
var myFavoriteCatLength3 = myFavoriteCat3.length;
console.log(myFavoriteCatLength3);

var myFavoriteCat4 = "Brandy";
var myFavoriteCatLength4 = myFavoriteCat4.length;
console.log(myFavoriteCatLength4);

var secreteMessage =
  "Mi gato favorito es " +
  myFavoriteCat +
  " y su nombre tiene" +
  " " +
  myFavoriteCatLength +
  " caracteres";

console.log(secreteMessage);

console.log(myFavoriteCat4[0]);

console.log(myFavoriteCat4.slice(-2, -5));

// B r a n d y
// 0 1 2 3 4 5

console.log(myFavoriteCat3.slice(2, 5));
console.log(myFavoriteCat3.slice(-5));

// M   I  S  H  U  G  A
// -7 -6 -5 -4 -3 -2 -1

console.log(myFavoriteCat2.toUpperCase());
console.log(myFavoriteCat2.toLowerCase());

var myDogsName = "camila negrete aguilar";
// output
// Camila

var capitalizeDogName =
  myDogsName[0].toUpperCase() + myDogsName.slice(1).toLowerCase();

console.log(capitalizeDogName);
