/*
  Title:
    Third Angle of a Triangle
    
  Description:
    You are given two interior angles (in degrees) of a triangle.
    Write a function to return the 3rd.

  Notes:
    only positive integers will be tested.
    
*/

// Now Solution
function otherAngle(a, b) {
    return 180 - a - b
}