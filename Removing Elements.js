/*
  Title:
    Removing Elements
    
  Description:
    Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
    
  Examples:
    ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
    
  Notes:
    None of the arrays will be empty, so you don't have to worry about that!
    
*/

    
// Other Solution
/*
function removeEveryOther(arr){
    return arr.filter((i, idx) => idx % 2 === 0);
}
*/

// Now Solution
const removeEveryOther = arr => arr.filter((e ,idx) => !(idx % 2));