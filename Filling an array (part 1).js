/*
  Title:
    Filling an array (part 1)
    
  Description:
    We want an array, but not just any old array, an array with contents!

    Write a function that produces an array with the numbers 0 to N-1 in it.
    
  Examples:
    For example, the following code will result in an array containing the numbers 0 to 4:

    arr(5) // => [0,1,2,3,4]
    
  Notes:
    The parameter is optional. So you have to give it a default value.
    
*/

// Other Solution
/*
function arr(n) {
  return Array.from({length: n}, (v, i) => i)
}
*/

// Now Solution
const arr = (N) => Array.from({ length: N }, (v, i) => i);
