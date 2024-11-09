class Helpers {
  
    getUsersByAge(response, ageMin, ageMax) {
    const users = [];

    for (let i = 0; i < response.users.length; i++) {
      if (response.users[i].age >= ageMin && response.users[i].age <= ageMax) {
        users.push(response.users[i].name); 
      }
    }

    return users;
  }

  getUsersByRole(response, role) {
    const users = [];

    for (let i = 0; i < response.users.length; i++) {
      if (response.users[i].role === role) {
        users.push(response.users[i].name);
      }
    }

    return users;
  }

  getUsersByCountry(response, country) {
    const users = [];

    for (let i = 0; i < response.users.length; i++) {
      if (response.users[i].country === country) {
        users.push(response.users[i].name);
      }
    }

    return users;
  }

  getUsersByBalance(response, minBalance, maxBalance) {
    const users = [];

    for (let i = 0; i < response.users.length; i++) {
      if (
        response.users[i].balance >= minBalance &&
        response.users[i].balance <= maxBalance
      ) {
        users.push(response.users[i].name);
      }
    }

    return users;
  }
}

export default new Helpers();
