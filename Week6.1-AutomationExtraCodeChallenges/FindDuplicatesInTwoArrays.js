function findDuplicates(array1, array2) {
    const duplicate = [];

    // Merge the two arrays
    const mergedArray = [...array1, ...array2];

    // Iterate through the merged array to find duplicates
    for (let i = 0; i < mergedArray.length; i++) {
        const element = mergedArray[i];

        // If the element appears more than once, add it to the duplicates list
        if (mergedArray.indexOf(element) !== mergedArray.lastIndexOf(element) && !duplicate.includes(element)) {
            duplicate.push(element);
        }
    }

    return duplicate;
}

const array1 = [1, 2, 3, 4, 5, 5];
const array2 = [4, 5, 6, 7, 7, 8];

console.log(findDuplicates(array1, array2)); // Output: [4, 5, 7]
