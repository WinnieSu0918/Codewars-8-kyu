/*
  Title:
    Square(n) Sum
    
  Description:
    Complete the square sum function so that it squares each number passed into it and then sums the results together.
    
  Examples:
    [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
    
*/
    
    
// Other Solution
/*
function squareSum(numbers){
    let total = 0
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i] ** 2
    }
    return total
}
*/

// Now Solution
function squareSum(numbers){
    let total = 0
    numbers.forEach(function(num) {
        total += num ** 2
    })
    return total
}