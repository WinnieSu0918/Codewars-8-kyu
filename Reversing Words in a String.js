/*
  Title:
    Reversing Words in a String
    
  Description:
    You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some
    
  Examples:
    As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

    "Hello World" --> "World Hello"
    "Hi There." --> "There. Hi"
    
*/

// Now Solution
function reverse(str){
    return str.split(" ").reverse().join(' ')
}