/*
  Title:
    Total amount of points
    
  Description:
    Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

    Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

    if x > y: 3 points
    if x < y: 0 point
    if x = y: 1 point
    
  Examples:
     ["3:1", "2:2", "0:1", ...]
    
  Notes:
    there are 10 matches in the championship
    0 <= x <= 4
    0 <= y <= 4
    
*/


// Other Solution
/*
function points(games) {
  let point = 0;
  games.map((i) => {
    if (i.charAt(0) > i.charAt(i.length - 1)) {
      point += 3;
    } else if (i.charAt(0) < i.charAt(i.length - 1)) {
      point += 0;
    } else point += 1;
  });
  return point;
}
*/

// Now Solution
function points(games) {
    let gameSum = games.reduce((current, element) => {
      let arraySplit = element.split(':');
      return (arraySplit[0] > arraySplit[1]) ? current += 3 : (arraySplit[0] < arraySplit[1]) ? current : current += 1;
    }, 0);
    return gameSum
}