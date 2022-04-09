/*
  Title:
    Sum Mixed Array
    
  Description:
    Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
    Return your answer as a number.
    
*/
    
    
// Other Solution
/*
function sumMix(x){
  const init = 0;
  const sumArr = x.reduce(
    (preVal, currVal) => Number(preVal) + Number(currVal),
    init
  );
  return sumArr
}
*/

// Now Solution
function sumMix(x){
    return x.map(i => +i).reduce((a, b) => a + b)
}
