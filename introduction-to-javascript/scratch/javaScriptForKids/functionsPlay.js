// // e1
// console.log("the interpreter is in the global environment");
// const casa = "san bernabe";
// const mama = "lached";
// console.log({ casa });

// const greet = function (personName) {
//   // e2
//   console.log("the interpreter is inside a function environment");
//   // function body
//   const casa = "playa del carmen";
//   const papa = "jose";
//   console.log({ casa });
//   console.log({ personName });
//   console.log(mama);
//   return "hello" + personName + "how are you?";
// };

// const greetings = [];
// console.log({ greetings });
// greetings.push(greet("marilyn"));
// console.log({ greetings }); // ['hello marilyn how are you?']
// greetings.push(greet("ravi"));
// console.log({ greetings });
// // greet((personName = "marilyn"));

// greet();

const multiply = function (firstNumber, secondNumber) {
  const out = firstNumber * secondNumber;
  return out;
};

console.log("the interpreter is in the global environment");

// console.log("2*5");
// console.log(2 * 5);

// console.log("multiply(2, 5)");
// console.log(multiply(2, 5));
