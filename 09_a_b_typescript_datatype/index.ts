let isDone: boolean = true;
let age: number = 25;
let firstName: string = "Komal";

let numbers: number[] = [1, 2, 3];

enum Color {
  Red,
  Green,
  Blue,
}

let inferredString = "Hello Komal"; 
let inferredNumber = 123;               
let inferredBool = false;            

let someValue: unknown = "I am a string";
let strLength1: number = (<string>someValue).length;
let strLength2: number = (someValue as string).length;

console.log("Primitive Types:");
console.log(`Name: ${firstName}, Age: ${age}, Done: ${isDone}`);
console.log("Numbers:", numbers);

console.log("\nEnum:");
console.log("My Color:", Color.Green);

console.log("\nType Inference:");
console.log("Inferred String:", inferredString);
console.log("Inferred Number:", inferredNumber);
console.log("Inferred Boolean:", inferredBool);

console.log("\nType Assertion:");
console.log("String length (1):", strLength1);
console.log("String length (2):", strLength2);
