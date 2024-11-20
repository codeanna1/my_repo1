// Find the most frequent element in a given array
// Write a function to find the most frequent element in the array. 
// If there are multiple elements that appear a maximum number of times, print the first of them

function mostFrequent(arr, n) {

    const freqMap = {};  // To store frequency of each element
    let maxCount = 0;    // To store the maximum frequency
    let mostFrequentElement = arr[0];  // To store the most frequent element

    // Loop through the array and count the frequency of each element
    for (let i = 0; i < n; i++) {
        const num = arr[i];
        freqMap[num] = (freqMap[num] || 0) + 1;
        
        // If the current element has higher frequency, update maxCount and the mostFrequentElement
        if (freqMap[num] > maxCount) {
            maxCount = freqMap[num];
            mostFrequentElement = num;
        }
    }

    return mostFrequentElement;
}

let arr = [40, 50, 30, 40, 50, 20, 30, 100, 11, 11];
let n = arr.length;
console.log(mostFrequent(arr, n));  // Output: 40
