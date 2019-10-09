/* If we list all the natural numbers below 10 that are multiples of 3 or 5,
we get 3, 5, 6 and 9. The sum of these multiples is 23.
Finish the solution so that it returns the sum of all the multiples of 3 or 5 
below the number passed in.
Note: If the number is a multiple of both 3 and 5, only count it once.*/

const multiple = (n) => {
    let count = 0;
      for(let i = 0; i < n; i++){
        console.log("run "+ i);
          let checkMulti_3 = i%3 === 0 ? true: false;
          let checkMulti_5 = i%5 === 0 ? true: false;
          let checkMuilti_3and5 = checkMulti_3 && checkMulti_5? true : false;
  
          if(checkMuilti_3and5){
              count = count + i;
              continue;
          }else if(checkMulti_3 || checkMulti_5){
            count = count + i;
          }
      }
  
      return count;
  }

exports.multiple = multiple;