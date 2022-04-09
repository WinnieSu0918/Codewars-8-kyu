/*
  Title:
    Opposite number
    
  Description:
    Very simple, given an integer or a floating-point number, find its opposite.
    
  Examples:
    1: -1
    14: -14
    -34: 34
    
*/
    
    
// Other Solution
/*
function opposite(num) {
  return num > 0 ? Math.abs(num) * -1 : Math.abs(num)
}
*/

// Now Solution
function opposite(num) {
    return -num
}
