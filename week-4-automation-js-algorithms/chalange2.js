// Challenge 2: Find the Largest Number
// Write a function to find the largest number in the array.



function findNumbersGreaterThanTen(numbers) {
    const result = [];

    for (let i = 0; i < numbers.length; i++) {
        if(numbers[i]> 10) {
        result.push(numbers[i]);
    }  
}
return result;
}

console.log(findNumbersGreaterThanTen([5, 10, 15, 20])); // [15, 20]
console.log(findNumbersGreaterThanTen([1, 2, 3, 4, 5])); // []
console.log(findNumbersGreaterThanTen([10, 20, 30, 40, 50])); // [20, 30, 40, 50]


