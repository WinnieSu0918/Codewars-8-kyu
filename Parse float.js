/*
  Title:
    Parse float
    
  Description:
    Write function parseF which takes an input and returns a number or null if conversion is not possible. The input can be one of many different types so be aware.
    
*/

// Other Solution
/*
let parseF = (s) => {
  if (typeof s === 'boolean' || typeof s === 'undefined') {
    return null;
  } else if (isNaN(Number(s))) {
    return null;
  } else {
    return Number(s);
  }
}
*/

// Now Solution
let parseF = (s) => isNaN(parseFloat(s)) ? null : parseFloat(s);