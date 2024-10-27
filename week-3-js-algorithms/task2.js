
// 2 - Create a function that returns the length of a string


  function getStringLength(str){
    // Add code here to return the length of str
    var count = 0;
    for(var letter in str){
      count += 1;
    }
    return count;
  }
  
  console.log(getStringLength('sergii')) // 6
  console.log(getStringLength('alex')) // 4









