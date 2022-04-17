/*
  Title:
    Generate range of integers
    
  Description:
    Implement a function named generateRange(min, max, step), which takes three arguments and generates a range of integers from min to max, with the step. The first integer is the minimum value, the second is the maximum of the range and the third is the step. (min < max)

    Task
        Implement a function named
    
  Examples:
    generateRange(2, 10, 2) // should return array of [2,4,6,8,10]
    generateRange(1, 10, 3) // should return array of [1,4,7,10]
    
  Notes:
    min < max
    step > 0
    the range does not HAVE to include max (depending on the step)
    
*/
    
    
// Other Solution
/*
function generateRange(min, max, step){
  let sumArr = []
  for(let i = min; i <= max; i+= step) {
    sumArr.push(i)
  }
  return sumArr
}
*/

// Now Solution
function generateRange(min, max, step){
    return Array.from({length:1 + (max-min)/step}, (v, i) => min + i * step);
}
