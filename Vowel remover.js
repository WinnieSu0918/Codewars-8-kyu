/*
  Title:
    Vowel remover
    
  Description:
    Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.
    
  Examples:
    "hello"     -->  "hll"
    "codewars"  -->  "cdwrs"
    "goodbye"   -->  "gdby"
    "HELLO"     -->  "HELLO"
    
  Notes:
    don't worry about uppercase vowels
    y is not considered a vowel for this kata
    
*/
    
    
// Other Solution
/*
function shortcut (string) {
  let strArr = string.split('')
  let strFilterArr = strArr.filter((i) => {
    return i !=='a' && i !=='e' && i !=='i' && i !=='o' && i !=='u'
  }).join('')
  return strFilterArr
}
*/

// Now Solution
function shortcut (string) {
    return string.replace(/[aeiou]/g,'')
}
