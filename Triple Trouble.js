/*
  Title:
    Triple Trouble
    
  Description:
    Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!

    E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"

  Notes:
    You can expect all of the inputs to be the same length.
    
*/

// Other Solution
/*
function tripleTrouble(one, two, three) {
  let arr = [];
  for (let i = 0; i < one.length; i++) {
    arr.push(one[i], two[i], three[i]);
  }
  return arr.join("");
}
*/

// Now Solution
function tripleTrouble(one, two, three) {
  let sumStr = "";
  for (let i = 0; i < one.length; i++) {
    sumStr += one[i] + two[i] + three[i];
  }
  return sumStr;
}
