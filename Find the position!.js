/*
  Title:
    Find the position!
    
  Description:
    When provided with a letter, return its position in the alphabet.

  Examples:
    Input :: "a"
    Ouput :: "Position of alphabet: 1"
    
  Notes:
    This kata is meant for beginners. Rank and upvote to bring it out of beta
    
*/

// Now Solution
function position(letter){
    return "Position of alphabet: " + ((letter.charCodeAt(0)-97) + 1);
}
