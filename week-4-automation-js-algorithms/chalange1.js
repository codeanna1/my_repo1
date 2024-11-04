
// Challenge 1: Find the Longest String
// Write a function to find the longest string in the array 


function findLongestString(arr) {  
let longestString = '';

for (let str of arr){
    if (str.length > longestString.length){
        longestString = str;
    }
}
return longestString;
}

 console.log(findLongestString(["I", "am", "learning", "JavaScript"])); // "JavaScript"
 console.log(findLongestString(["one", "two", "three"])); // "three"
 console.log(findLongestString(["1", "22", "333"])); // "333"
