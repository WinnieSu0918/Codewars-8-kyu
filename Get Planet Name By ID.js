/*
  Title:
    Get Planet Name By ID
    
  Description:
    The function is not returning the correct values. Can you figure out why?
    
  Examples:
    3 --> "Earth"
    
*/

// Other Solution
/*
function getPlanetName(id) {
  let name = "";
  switch (id) {
    case 1:
      name = "Mercury";
      break;
    case 2:
      name = "Venus";
      break;
    case 3:
      name = "Earth";
      break;
    case 4:
      name = "Mars";
      break;
    case 5:
      name = "Jupiter";
      break;
    case 6:
      name = "Saturn";
      break;
    case 7:
      name = "Uranus";
      break;
    case 8:
      name = "Neptune";
      break;
  }
  return name;
}
*/

// Now Solution
function getPlanetName(id){
  let name = {
    1: 'Mercury',
    2: 'Venus',
    3: 'Earth',
    4: 'Mars',
    5: 'Jupiter',
    6: 'Saturn',
    7: 'Uranus',
    8: 'Neptune'
  }
  return name[id]
}