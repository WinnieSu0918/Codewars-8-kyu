/*
  Title:
    Are arrow functions odd?
    
  Description:
    Time to test your basic knowledge in functions! Return the odds from a list:
    
  Examples:
    [1, 2, 3, 4, 5]  -->  [1, 3, 5]
    [2, 4, 6]        -->  []
    
*/

// Now Solution
function odds(values){
    return values.filter(e => e%2);
}