/*
  Title:
    Find the smallest integer in the array
    
  Description:
    Given an array of integers your solution should find the smallest integer.
    
  Examples:
    Given [34, 15, 88, 2] your solution will return 2
    Given [34, -345, -1, 100] your solution will return -345
    
  Notes:
    You can assume, for the purpose of this kata, that the supplied array will not be empty.
    
*/
    
    
// Other Solution
/*
class SmallestIntegerFinder {
  findSmallestInt(arr) {
    let min = arr[0]
    for (let i = 0; i < arr.length; i++) {
      if(arr[i] < min) min = arr[i]
    }
    return min
  }
}
*/

// Now Solution
class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min(...args);
    }
}