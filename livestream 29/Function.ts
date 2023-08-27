let username: string = "Ali";

username = "Tobi";

// Function
// let fullName: Function;
// let fullName: () => number;

// fullName = () => {
//   console.log("working");
//   return 30;
// };

// Function Signatures
// let fullName: (a: string, b: string) => string;

// fullName = (firstName: string, lastName: string) => {
//   return `${firstName} ${lastName}`;
// };

// Example One
// let user: (a: number, b: string) => string;

// user = (age: number, name: string) => {
//   return `${name} is ${age} years old`;
// };

// Example Two
let adding: (a: number, b: number, c: number) => number;

let test: () => void;

adding = (num1: number, num2: number, num3: number) => {
  return num1 + num2 + num3;
};
