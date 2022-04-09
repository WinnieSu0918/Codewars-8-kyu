/*
  Title:
    Array plus array
    
  Description:
    I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

    P.S. Each array includes only integer numbers. Output is a number too.
    
*/
    
// Now Solution
function arrayPlusArray(arr1, arr2) {
    const totalArr = arr1.concat(arr2)
    const sumArr = totalArr.reduce(
        (previousValue, currentValue) => previousValue + currentValue
    );
    return sumArr
}