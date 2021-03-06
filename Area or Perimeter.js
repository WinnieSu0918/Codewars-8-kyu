/*
  Title:
    Area or Perimeter
    
  Description:
    You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
    If it is a square, return its area. If it is a rectangle, return its perimeter.
    
  Examples:
    area_or_perimeter(6, 10) --> 32
    area_or_perimeter(3, 3) --> 9
    
  Notes:
    for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.
    
*/

// Now Solution
const areaOrPerimeter = function(l , w) {
    return l === w ? l*w : l*2 + w*2
};