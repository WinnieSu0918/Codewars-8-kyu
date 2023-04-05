/*
  Title:
    Sum of differences in array
    
  Description:
    Your task is to sum the differences between consecutive pairs in the array in descending order.
    
  Examples:
    [2, 1, 10]  -->  9
    
  Notes:
    In descending order: [10, 2, 1]

    Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

    If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).

*/

// Other Solution
/*
const sumOfDifferences = (arr) => arr.sort((a, b) => b - a).shift() - arr.pop() || 0
*/

// Now Solution
const sumOfDifferences = (arr) => {
  arr.sort((a, b) => b - a);
  let sum = 0;
  for (let i = 0; i < arr.length - 1; ++i) {
    sum += arr[i] - arr[i + 1];
  }
  return sum;
};
