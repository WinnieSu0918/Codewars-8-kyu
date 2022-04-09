/*
  Title:
    Beginner - Lost Without a Map
    
  Description:
    Given an array of integers, return a new array with each value doubled.
    
  Examples:
    [1, 2, 3] --> [2, 4, 6]
    
*/
    
    
// Other Solution
/*
function maps(x){
    return x.map(x => x + x);
}
*/

// Now Solution
const maps = arr => arr.map(x => x * 2)