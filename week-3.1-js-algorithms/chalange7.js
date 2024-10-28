
// Challenge 7: FizzBuzz Simplified
// Write a function fizzBuzzSimplified that takes a number as an argument. If the number is divisible by 3, 
// return "Fizz". If the number is divisible by 5, return "Buzz". If the number is divisible by both 3 and 5, 
// return "FizzBuzz". If the number is not divisible by 3 or 5, return the number.
// Usage examples:


function fizzBuzzSimplified(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return "FizzBuzz"; // Check for FizzBuzz first
    } else if (num % 3 === 0) {
        return "Fizz"; // Check for Fizz
    } else if (num % 5 === 0) {
        return "Buzz"; // Check for Buzz
    } else {
        return num; // Return the number if not divisible by 3 or 5
    }
}

 console.log(fizzBuzzSimplified(3)); // "Fizz"
 console.log(fizzBuzzSimplified(5)); // "Buzz"
 console.log(fizzBuzzSimplified(15)); // "FizzBuzz"
 console.log(fizzBuzzSimplified(2)); // 2 


