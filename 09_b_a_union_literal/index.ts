type StringOrNumber = string | number;

type Size = "small" | "medium" | "large";

let userId: StringOrNumber = 101;
userId = "user_101"; 

let shirtSize: Size = "medium";

console.log("User ID:", userId);
console.log("Shirt Size:", shirtSize);

