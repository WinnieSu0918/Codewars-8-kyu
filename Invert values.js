/*
  Title:
    Invert values
    
  Description:
    Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
    
  Examples:
    invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
    invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
    invert([]) == []
    
  Notes:
    You can assume that all values are integers. Do not mutate the input array/list.
    
*/
    
// Now Solution
function invert(array) {
    return array.map(i => i === 0 ?  Math.abs(i) * -1 : -i)
}