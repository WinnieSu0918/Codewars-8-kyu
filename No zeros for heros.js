/*
  Title:
    No zeros for heros
    
  Description:
    Numbers ending with zeros are boring.

    They might be fun in your world, but not here.

    Get rid of them. Only the ending ones.
    
  Examples:
    1450 -> 145
    960000 -> 96
    1050 -> 105
    -1050 -> -105
    
  Notes:
    Zero alone is fine, don't worry about it. Poor guy anyway
    
*/

// Now Solution
function noBoringZeros(n) {
  let nArr = String(n).split("");
  for (let i = nArr.length - 1; i >= 0; i -= 1) {
    if (nArr[i] !== "0") {
      return +nArr.slice(0, i + 1).join("");
    } else if (n === 0) return 0;
  }
}
