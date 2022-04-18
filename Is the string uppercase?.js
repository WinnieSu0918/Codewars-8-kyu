/*
  Title:
    Is the string uppercase?
    
  Description:
    "c".isUpperCase() == false
    "C".isUpperCase() == true
    "hello I AM DONALD".isUpperCase() == false
    "HELLO I AM DONALD".isUpperCase() == true
    "ACSKLDFJSgSKLDFJSKLDFJ".isUpperCase() == false
    "ACSKLDFJSGSKLDFJSKLDFJ".isUpperCase() == true
    
  Notes:
    In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.
    
*/

// Now Solution
String.prototype.isUpperCase = function() {
    return this.toString() === this.toUpperCase()
}