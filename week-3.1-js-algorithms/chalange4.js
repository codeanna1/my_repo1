
// Challenge 4: Multi-level conditions II
// Write a function called checkEligibility that accepts an age and returns whether the person is eligible to vote, 
// drive, and/or drink. If the person is 16 or older, they can drive. If they are 18 or older, they can vote. 
// If they are 21 or older, they can drink.
// Usage examples:


function checkEligibility(age) {

    if (age >= 21 ) {

    return "Can't vote, drive and drink";
}

     if(age >= 18 ) {

    return "Can vote and drive"; }

   if (age >= 16 ) {
    return "Can drive" ;
   }

   else {

   return  "Can vote, drive, or drink";
   }
   }

 console.log(checkEligibility(15)); // "Can't vote, drive, or drink"
 console.log(checkEligibility(16)); // "Can drive"
 console.log(checkEligibility(18)); // "Can vote and drive"
 console.log(checkEligibility(22)); // "Can vote, drive, and drink"  