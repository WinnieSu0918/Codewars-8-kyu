/*
  Title:
    Reversed Words
    
  Description:
    Complete the solution so that it reverses all of the words within the string passed in.
    
  Examples:
    "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"
    
*/
    
// Now Solution
function reverseWords(str){
    return str.split(' ').reverse().join(' ')  // reverse those words
}