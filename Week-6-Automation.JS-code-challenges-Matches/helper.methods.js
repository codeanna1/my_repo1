class Helpers {
    filterMatchesByLocationAndStatus(response) {
        
            const result = [];
            response.matches.forEach(match => {
              if (match.locationlvl1 === 'Germany' && match.status === 'canceled') {
                result.push(match.matchId);
              }
            });
            return result;
          }
        
    filterMatchesByCoatingAndShower(response) {
      
        const result = [];
        response.matches.forEach(match => {
            if (match.matchInfo.coating === 'Main.artificialGrass' && match.matchInfo.isShower === true) {
              result.push(match.matchId);
            }
          });
      return result;
    }
  
    filterMatchesByLocationAndPrice(response) {
      const result = [];
        response.matches.forEach(match => {
        if(match.locationlvl1 === 'Germany' && match.price > 0 ) {
            result.push(match.matchId);
        }
        });
      return result;
    }
  
    filterMatchesByCreatorFeeAndStatus(response) {
      const result = [];
      response.matches.forEach(match => {
        if(match.creatorFeePerPlayer > 0   && match.status === 'canceled' ){
            result.push(match.matchId);
        }
      });
      
      return result;
    }
  
    filterMatchesByCoveringAndDressingRoom(response) {
      
      const result = [];
      response.matches.forEach(match => {
        if(match.matchInfo.covering === 'Main.onTheStreet' && match.matchInfo.isDressingRoom === true){
            result.push(match.matchId);
        }
      });
      return result;
    }
  }
  export default new Helpers();