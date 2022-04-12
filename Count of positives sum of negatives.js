/*
  Title:
    Count of positives / sum of negatives
    
  Description:
    Given an array of integers.

    Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

    If the input is an empty array or is null, return an empty array.
    
  Examples:
    For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
    
*/

// Now Solution
function countPositivesSumNegatives(input) {
    if(!input || !input.length) return []
    let posSum = input.filter((e) => e > 0).length
    let init = 0;
    let NegSum = input.filter((e) => e < 0).reduce((prev, curr) => prev + curr, init)
    return [posSum ,NegSum]
}