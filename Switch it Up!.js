/*
  Title:
    Switch it Up!
    
  Description:
    When provided with a number between 0-9, return it in words.
    
  Examples:
    Input :: 1

    Output :: "One".

    If your language supports it, try using a switch statement.
    
*/

// Other Solution
/*
let  switchItUp = (number) => {
   const switchEnum = {
     0: 'Zero',
     1: 'One',
     2: "Two",
     3: 'Three',
     4: 'Four',
     5: 'Five',
     6: 'Six',
     7: 'Seven',
     8: 'Eight',
     9: 'Nine'
   }
   return switchEnum[number]
}
*/

// Now Solution
const words = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
let  switchItUp = (number) => words[number]