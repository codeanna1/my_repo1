
// Challenge 9: Traffic Sign
// Write a function called checkSign that accepts the color of a traffic sign ("red", "yellow", "green") as an argument.
// The function should return "Stop" if the sign is red, "Caution" if the sign is yellow, and "Go" if the sign is green.
// Usage examples:



function checkSign(color){

    if(color == "red") {

        return "Stop"
    }

    if (color == "yellow") {
        return "Caution"
    }

    if (color == "green") {

        return "Go" 
    }
}



 console.log(checkSign("red")); // "Stop"
 console.log(checkSign("yellow")); // "Caution"
 console.log(checkSign("green")); // "Go"