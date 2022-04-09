/*
  Title:
    Reversed Strings
    
  Description:
    Complete the solution so that it reverses the string passed into it.
    
  Examples:
    'world'  =>  'dlrow'
    'word'   =>  'drow'
    
*/

// Now Solution
function solution(str){
    return str.split("").reverse().join("");
}
