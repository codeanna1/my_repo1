// Challenge 6: Factorial a Number
// Write a function that takes a number as an argument and returns the factorial of that number.

 
function factorial(num) {

    if (num < 0) return undefined;
    if(num === 0) return 1;
    return num * factorial(num - 1);
 
}
 
 console.log(factorial(5)); // 120
 console.log(factorial(0)); // 1
 console.log(factorial(1)); // 1
 console.log(factorial(10)); // 3628800