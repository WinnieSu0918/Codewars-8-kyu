/*
  Title:
    FIXME: Replace all dots
    
  Description:
    The code provided is supposed replace all the dots . in the specified String str with dashes -

    But it's not working properly.

    Task
        Fix the bug so we can all go home early.

  Notes:
    String str will never be null.
    
*/


// Other Solution 1
/*
const replaceDots = function(str) {
    return str.replace(/[.]/g, '-');
}
*/

// Now Solution
const replaceDots = function(str) {
  return str.replace(/\./g,'-');
}