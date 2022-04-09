/*
  Title:
    Name Shuffler
    
  Description:
    Write a function that returns a string in which firstname is swapped with last name.
    
*/

// Now Solution
function nameShuffler(str) {
  return str.split(" ").reverse().join(" ");
}
