/*
  Title:
    Sum without highest and lowest number
    
  Description:
    Task
        Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

        The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

        Mind the input validation.
    
  Examples:
    { 6, 2, 1, 8, 10 } => 16
    { 1, 1, 11, 2, 3 } => 6
    
  Notes:
    If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.
    
*/
    
    
// Other Solution
/*
function sumArray(array) {
  if (!array|| array.length <= 2) return 0
  let maxNumber = Math.max(...array);
  let minNumber = Math.min(...array);
  let sumArr = array.reduce((a, b) => a + b)
  return sumArr - maxNumber - minNumber
}
*/

// Now Solution
function sumArray(array) {
    if(!array || array.length <= 2) return 0
    let sumArr = array.sort((a,b) => a - b).slice(1, -1).reduce((a,b) => a + b)
    return sumArr
}
