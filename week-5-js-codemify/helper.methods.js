class Helpers {
    // HelperMethods.getUsersByAge(response, 30, 40)); // [ Alice, Eva, Frank, Henry, Karon ]
    getUsersByAge(response, ageMin, ageMax) {
      const users = [];
      
     // Filter out all users younger than 40 and older than 30
       
     //response.users.filter((user) => age >= 30 && age <= 40)

     response.users.forEach(user => {
       // if(user.age >= 30 && user.age <= 40) users.push(user.name) // 30 , 40 - actual numbers ---> hardcode
       if(user.age >= ageMin && user.age <= ageMax) users.push(user.name) // we are pushing the name
     });

      return users;
    }

    // helperMethods.getUsersByRole(response, 'admin')); // [ Alice, Eva, Henry ]
    getUsersByRole(response, role) {
      const users = [];
  
      response.users.forEach(user => {
        if(user.role === role) users.push(user.name);
      });

      return users;
    }
  
    getUsersByCountry(response, country) {
      const users = [];
  
      response.users.forEach(user => {
        if(user.country === country) users.push(user.name);
      });

      return users;
    }
  
    getUsersByBalance(response, minBalance, maxBalance) {
      const users = [];
  
      response.users.forEach(user => {
         if(user.balance >= minBalance && user.balance <= maxBalance) users.push(user.name) // we are pushing the name
      });
  
      return users;
    }
  }
  
  export default new Helpers();
  