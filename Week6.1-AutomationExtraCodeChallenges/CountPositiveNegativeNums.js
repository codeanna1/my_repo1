function countPositiveNegative(arr) {
    let positiveCount = 0;
    let negativeCount = 0;

    // Loop through the array and check each number
    arr.forEach(num => {
        if (num > 0) {
            positiveCount++;
        } else if (num < 0) {
            negativeCount++;
        }
    });

    return { positive: positiveCount, negative: negativeCount };
}

let arr = [10, 20, -1, 22, 99, 20, -9];
// Call the function and store the result
let result = countPositiveNegative(arr);

// Log the result using the properties of the returned object
console.log(`The negative numbers in the array are ${result.negative}`); // "The negative numbers in the array are 2"
console.log(`The positive numbers in the array are ${result.positive}`); // "The positive numbers in the array are 5"


