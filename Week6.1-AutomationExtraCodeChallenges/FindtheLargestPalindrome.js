// Find the Largest Palindrome
// Write a function to find the largest palindrome made from the product of any two numbers 
// between 0 and 1000

function getLargestPalindrome(maxNumber){
    let largestPalindrome = 0;

    for (let i = maxNumber; i > 0; i --){
        if(i * i < largestPalindrome) break;

        for (let j = i; j > 0; j--){
            const result = i * j;
            if(result.toString() === result.toString().split('').reverse().join('') && result > largestPalindrome){
            largestPalindrome = result;
        }
            if(result < largestPalindrome) break;
    }
}
return largestPalindrome;
}
    // console.log(getLargestPalindrome(1000));; // 906609
    console.log(getLargestPalindrome(1000))

