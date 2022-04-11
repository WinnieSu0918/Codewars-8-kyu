/*
  Title:
    Beginner Series #2 Clock
    
  Description:
    Clock shows h hours, m minutes and s seconds after midnight.

    Your task is to write a function which returns the time since midnight in milliseconds.

  Examples:
    h = 0
    m = 1
    s = 1

    result = 61000
    
  Notes:
    0 <= h <= 23
    0 <= m <= 59
    0 <= s <= 59
    
    * result to milliseconds
        second sto milliseconds
        seconds x 1000

        minutes to milliseconds
        minutes x 1000 x 60

        hours to milliseconds
        hours x 1000 x 60 x 60
*/

// Now Solution
function past(h, m, s){
    return s*1000 + m*1000*60 + h*1000*60*60
}