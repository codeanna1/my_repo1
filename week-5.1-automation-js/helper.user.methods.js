class Helpers {
    
    getUsersByStatus(response, status) {
        const users = [];

        // Your code here
        for (let i = 0; i < response.users.length; i++) {
            if (response.users[i].role.status === status && response.users[i].role.description !== null && response.users[i].role.description.length > 1) {
                users.push(response.users[i].name)
            }
        }
        return users;
    }
    getUsersByRole(response, role, roleId) {
        const users = [];
       

        for (let i = 0; i < response.users.length; i++) {
            const result = response.users[i];
            if (result.role.name === role && result.role.id === roleId) {
                users.push(result.name);
            }
        }
        return users;
    }
    
    getUsersByEmailDomain(response, domain) {
        const users = [];
        

        for (let i = 0; i < response.users.length; i++) {
            const result = response.users[i];
            if(result.email.includes(domain)){
                users.push(result.name)
            }
        }
        return users;
    }

    getUserBalanceByCurrency(response, currency) {
        const balances = [];

        for (let i = 0; i < response.users.length; i++) {
            const result = response.users[i];
            if (result.currency.includes (currency)) {
                balances.push(result.balance);
            }
        }
        return balances;
    }
}
export default new Helpers()