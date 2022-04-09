/*
  Title:
    Unfinished Loop - Bug Fixing #1
    
  Description:
    Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!
    
*/

// Now Solution
function createArray(number){
    var newArray = [];
    for(let counter = 1; counter <= number; counter++){
      newArray.push(counter);
    }
    return newArray;
}