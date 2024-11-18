import helperMethods from "./helper.methods.js";  // IMPORTING THIS FILE, WHERE ALL FUNCTIONS LOCATED
import response from './api.response.js'; // IMPORTING DATA OR RESPONSE BODY ( right click go to DEFINITIon)

console.log(helperMethods.getUsersByAge(response, 30, 40)); // [ Alice, Eva, Frank, Henry, Karon ]
console.log(helperMethods.getUsersByRole(response, 'admin')); // [ Alice, Eva, Henry ]
console.log(helperMethods.getUsersByCountry(response, 'USA')); // [ Alice, David, Henry ]
console.log(helperMethods.getUsersByBalance(response, 1100, 2000)); // [ David ]

// our MAIN FILE , ALL STARTS FROM HERE, IT COMBINES EVERYTHING 