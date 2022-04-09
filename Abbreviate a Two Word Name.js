
/*
  Title:
    Abbreviate a Two Word Name
    
  Description:
    Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
    The output should be two capital letters with a dot separating them.
    
  Examples:
    Sam Harris => S.H
    patrick feeney => P.F
    
*/
    
// Now Solution
function abbrevName(name){
    let names = name.split(/\s+/).map(item => {
      return item.charAt(0).toUpperCase()
    })
    return names.toString().replace(',','.')
}