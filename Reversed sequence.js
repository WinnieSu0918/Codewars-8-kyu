/*
  Title:
    Reversed sequence
    
  Description:
    Build a function that returns an array of integers from n to 1 where n>0.
    
  Examples:
    n=5 --> [5,4,3,2,1]
    
*/

// Other Solution
/*
const reverseSeq = n => {
  let arr = [];
  for (let i = n; i > 0; i--) {
    arr.push(i);
  } 
  return arr;
};
*/

// Now Solution
const reverseSeq = n => {
    return Array.from({length: n}, (v, i) => i + 1).reverse();
};
