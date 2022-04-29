/*
  Title:
    Grasshopper - Combine strings
    
  Description:
    Create a function named combineNames that accepts two parameters (first and last name). The function should return the full name.
    
  Examples:
    combineNames('James', 'Stevens')

    return 'James Stevens'

*/


// Other Solution
/*
let combineNames = (firStr , secStr) => firStr + ' ' + secStr
*/

// Now Solution
let combineNames = (...Str) => Str.join(' ')