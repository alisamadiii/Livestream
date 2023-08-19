// Arrays
// const city: string[] = ["newyork", "makassar", 30];

const sizes: (number | boolean)[] = [30, 49, 10, true];

const username: string = "Ali";

const isDead = true;

const isStrong = true;

const city: (string | number | boolean)[] = ["newyork", "makassar", 30, true];

// Objects
type Television = {
  name: string;
  screenWidth: number | string;
  screenHeight: string | number;
};

const television: Television = {
  name: "Samsung",
  screenWidth: "500",
  screenHeight: 400,
};
