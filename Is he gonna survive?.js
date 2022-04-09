/*
  Title:
    Is he gonna survive?
    
  Description:
    A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

    Return True if yes, False otherwise :)
    
*/
    
    
// Other Solution
/*
function hero(bullets, dragons){
  if(dragons > bullets || dragons + bullets === 2) return false
  return bullets > dragons*2 || bullets%dragons === 0 ? true : false
}
*/

// Now Solution
function hero(bullets, dragons){
    return bullets >= dragons * 2
}