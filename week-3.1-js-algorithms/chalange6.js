
// Challenge 6: Season Checker
// Write a function called checkSeason that takes a month as an argument (from 1-12 where 1 is January and 12 is December) 
// and checks which season it is based on meteorological seasons. The function should return "Winter" for December (12), 
// January (1), and February (2), "Spring" for March (3), April (4), and May (5), "Summer" for June (6), July (7), 
// and August (8), and "Autumn" for September (9), October (10), and November (11).
// Usage examples:



function checkSeason(month) {

    if (month == 12 || month == 2 || month == 1){

        return "Winter";
    }

   else if (month == 5 || month == 4 || month == 3) {

    return "Spring";
   }

   else if (month == 6 || month == 7 || month == 8) {

    return "Summer";
   }
   
   else  {

    return "Autumn";
   }

}
 console.log(checkSeason(1)); // "Winter"
 console.log(checkSeason(4)); // "Spring"
 console.log(checkSeason(7)); // "Summer"
 console.log(checkSeason(10)); // "Autumn"