/*
  Title:
    Beginner - Reduce but Grow
    
  Description:
    Given a non-empty array of integers, return the result of multiplying the values together in order.
    
  Examples:
    [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
    
*/

// Now Solution
function grow(x){
    const sumX = x.reduce(
    (prevVal, currVal) => prevVal * currVal);
    return sumX
}