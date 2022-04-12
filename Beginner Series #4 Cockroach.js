/*
  Title:
    Beginner Series #4 Cockroach
    
  Description:
    The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).
    
  Examples:
    1.08 --> 30
    
  Notes:
    Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.
    
*/

// Now Solution
function cockroachSpeed(s) {
    if(s < 0) return 0
    return Math.floor(s * 100000 / 3600)
}
