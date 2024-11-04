
// Challenge 3: Find Strings with Dollar Sign
// Write a function to find all strings that include a $ sign in the array.


function findDollarStrings(strings){
    return strings.filter(str => str.includes('$'))

}

 console.log(findDollarStrings(["I", "have", "$10"])); // ["$10"]
 console.log(findDollarStrings(["$", "$$", "$$$"])); // ["$", "$$", "$$$"]
 console.log(findDollarStrings(["no", "dollars", "here"])); // []

