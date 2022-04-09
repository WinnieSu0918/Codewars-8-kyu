/*
  Title:
    Sum of positive
    
  Description:
    You get an array of numbers, return the sum of all of the positives ones.
    
  Examples:
    [1,-4,7,12] => 1 + 7 + 12 = 20
    
  Notes:
    if there is nothing to sum, the sum is default to 0.
*/
    
    
// Other Solution
/*
function positiveSum(arr) {
  let testArr = 0
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] > 0) {
      testArr += arr[i]
    }
  }
  return testArr
}
*/

// Now Solution
function positiveSum(arr) {
    let reducer = (accumulator,current) => accumulator + (current > 0 ? current : 0)
    return arr.reduce(reducer,0)
}