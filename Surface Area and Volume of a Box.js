/*
  Title:
    Surface Area and Volume of a Box
    
  Description:
    Write a function that returns the total surface area and volume of a box as an array: [area, volume]
    
*/

// Now Solution
function getSize(width, height, depth){
  let area = (width*height + width*depth + height*depth) * 2
  return [area, width*height*depth]
}