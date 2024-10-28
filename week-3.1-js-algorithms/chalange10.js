
// Challenge 10: Meal Suggestion
// Write a function suggestMeal(time, diet) that takes a time of the day ("morning", "afternoon", "evening") 
// and a type of diet ("vegan", "vegetarian", "omnivore") as input. The function should return meal suggestions 
// based on the input parameters.
// Usage examples:


  function suggestMeal(time, diet) {

    if (time == "morning" && diet == "vegan")  {
        
        return "Fruit smoothie with oats" ;
    }

   if (time == "morning" && diet == "vegetarian") {

    return "Vegetarian scrambled eggs with toast" ;

   }
   
   if (time == "morning" &&  diet == "omnivore" ) {

    return "Bacon and eggs with toast";
   }

   if (time == "afternoon" && diet == "vegan") {

    return "Vegan burrito";
   }
   
   if ( time == "afternoon" && diet == "vegetarian") {

    return "Vegetarian pizza";

   }

   if ( time == "afternoon" && diet == "omnivore") {

    return "Chicken sandwich";

   }

   if (time == "evening" && diet == "vegan") {

    return "Vegan lentil stew";
   }
  }





 console.log(suggestMeal("morning", "vegan")); // "Fruit smoothie with oats"
 console.log(suggestMeal("morning", "vegetarian")); // "Vegetarian scrambled eggs with toast"
 console.log(suggestMeal("morning", "omnivore")); // "Bacon and eggs with toast"
 console.log(suggestMeal("afternoon", "vegan")); // "Vegan burrito"
 console.log(suggestMeal("afternoon", "vegetarian")); // "Vegetarian pizza"
 console.log(suggestMeal("afternoon", "omnivore")); // "Chicken sandwich"
 console.log(suggestMeal("evening", "vegan")); // "Vegan lentil stew"