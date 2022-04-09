/*
  Title:
    Is it a palindrome?
    
  Description:
    Write a function that checks if a given string (case insensitive) is a palindrome.
    
*/

// Now Solution
function isPalindrome(x) {
  let xArray = x.toLowerCase().split('').reverse().join('')
  return x.toLowerCase() === xArray || false
}
