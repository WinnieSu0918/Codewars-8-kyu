/*
  Title:
    Century From Year
    
  Description:
    The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
    
    Given a year, return the century it is in.

  Examples:
    1705 --> 18
    1900 --> 19
    1601 --> 17
    2000 --> 20
    
*/
    
    
// Other Solution
/*
function century(year) {
    if(year > 100){
        return year % 100 >= 1 ? Math.floor(year / 100)  + 1 : year / 100 
    } else {
        return 1
    }
}
*/

// Now Solution
function century(year) {
    return Math.ceil(year / 100)
}
