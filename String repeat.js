/*
  Title:
    String repeat
    
  Description:
    Write a function called repeatStr which repeats the given string string exactly n times.
    
  Examples:
    repeatStr(6, "I") // "IIIIII"
    repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
    
*/
    
    
// Other Solution
/*
function repeatStr (n, s) {
  return s.repeat(n)
}
*/

// Now Solution
repeatStr = (n,s) => s.repeat(n)