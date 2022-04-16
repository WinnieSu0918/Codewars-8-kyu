/*
  Title:
    Sort and Star
    
  Description:
    You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

    The returned value must be a string, and have "***" between each of its letters.

    You should not remove or add elements from/to the array.
    
*/

// Other Solution
/*
function twoSort(s) {
  const strArr = s.sort()[0].split("");

  let finalArr = strArr
    .map((i, idx) => {
      if (idx < strArr.length - 1) return i + "***";
      else return i;
    })
    .join("");

  return finalArr;
}
*/

// Now Solution
function twoSort(s) {
    return s.sort()[0].split('').join('***')
}