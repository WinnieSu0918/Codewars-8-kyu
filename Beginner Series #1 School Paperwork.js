/*
  Title:
    Beginner Series #1 School Paperwork
    
  Description:
    Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
    Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.
    
  Examples:
    n= 5, m=5: 25
    n=-5, m=5:  0
    
  Notes:
    Waiting for translations and Feedback! Thanks!
    
*/

// Now Solution
function paperwork(n, m) {
    return (m > 0 && n > 0)  ? n*m : 0
}