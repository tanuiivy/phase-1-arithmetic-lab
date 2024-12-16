// Variables provided for the tests
const num1 = 31;
const num2 = 2;
const num3 = 10;
const num4 = 6;
const numbers = [5, 10, 15, 20]; // Modify the array to match the expected output

// Multiply to equal 62
const multiply = num1 * num2; // 31 * 2 = 62

// Random integer greater than 0
const random = Math.floor(Math.random() * 100) + 1; // Random integer between 1 and 100

// Modulo operation to get remainder of 4
const mod = num3 % num4; // 10 % 6 = 4

// Find the highest number in the array (set)
const max = Math.max(...numbers); // 20 is the highest number in the array

// Test code (for testing purposes)
console.log(multiply); // Expected: 62
console.log(random); // Expected: random number between 1 and 100
console.log(mod); // Expected: 4
console.log(max); // Expected: 20
