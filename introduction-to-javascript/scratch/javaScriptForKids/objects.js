const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const car = {
  type: "Fiat",
  model: "500",
  color: "white",
};

const mom = {
  firstName: "Claudia",
  lastName: "Aguilar Casas",
  id: 01,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const dad = {
  firstName: "Jose",
  lastName: "Negrete Barbosa",
  id: 02,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

// console.log(dad);

// console.log(mom.firstName);

// console.log("I wear my sunglasses at night", car.type);

const favoriteSong = {
  name: "Sunglasses At Night",
  artist: " Corey Hart",
  released: 1983,
  lyrics: ` I wear my sunglasses at night
So I can, So I can
Watch you weave then breathe your story lines
And I wear my sunglasses at night
So I can, So I can
Keep track of the visions in my eyes

While, she's deceiving me,
It cuts my security (has)
she got control of me
I turn to her and say

Don't switch the blade on the guy in shades; oh no
Don't masquerade with the guy in shades;
(oh no) (I can't believe it)
You got it made with the guy in shades; oh no

I wear my sunglasses at night
So I can, So I can
Forget my name while you collect your claim
And I wear my sunglasses at night
So I can, So I can
See the light that's right before my eyes

While she's deceiving me,
she cuts my security (has)
She got control of me
I turn to her and say

Don't switch the blade on the guy in shades (oh no)
Don't masquerade with the guy in shades
(oh no) (I can't believe it)
(cuz) You got it made with the guy in shades (oh no)

While she's deceiving me,
she cuts my security (has)
She got control of me
I turn to her and say

Don't switch the blade on the guy in shades (oh no)
Don't masquerade with the guy in shades
(oh no) (I can't believe it)
don't be afraid of the guy in shades
(oh No) (It can't escape you)
(cus) You got it made with the guy in shades (oh no)

I said
I wear my sunglasses at night
I wear my sunglasses at night
I wear my sunglasses at night

I say to ya now
I wear my sunglasses at night
I wear my sunglasses at night
I wear my sunglasses at night

I cry to you
I wear my sunglasses at night
I wear my sunglasses at night
`,
};

// console.log(favoriteSong.lyrics);

// console.log(favoriteSong.released);

const family = ["claudia", "jose", "marilyn", "liz", "kathy"];
console.log(family);
