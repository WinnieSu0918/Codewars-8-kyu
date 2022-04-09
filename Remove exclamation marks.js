/*
  Title:
    Remove exclamation marks
    
  Description:
    Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
    
*/

// Now Solution
function removeExclamationMarks(s) {
    return s.replace(/!/g,'');
}