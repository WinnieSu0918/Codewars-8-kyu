/*
  Title:
    Double Char
    
  Description:
    Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
    
  Examples:
    * "String"      -> "SSttrriinngg"
    * "Hello World" -> "HHeelllloo  WWoorrlldd"
    * "1234!_ "     -> "11223344!!__  "
    
*/

// Now Solution
function doubleChar(str) {
    let doubleStr = str.split('').map((i) => i + i)
    return doubleStr.join('')
}