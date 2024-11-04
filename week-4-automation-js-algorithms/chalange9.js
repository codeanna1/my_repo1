// Challenge 9: Find the Longest Word in a String
// Write a function that returns the length of the longest word in the provided sentence.


function findLongestWord(string){
    let max = 0;
    const arr = string.split(" ");

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > max )
        max = (arr[i].length );
    }
    return max;
}

 console.log(findLongestWord('The quick brown fox')); // 5
 console.log(findLongestWord('Hello world')); // 5
 console.log(findLongestWord('')); // 0
 console.log(findLongestWord('OneWord')); // 7


 