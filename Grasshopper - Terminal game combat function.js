/*
  Title:
    Grasshopper - Terminal game combat function
    
  Description:
    Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.
    
*/

// Now Solution
function combat(health, damage) {
    if(health - damage < 0) return 0
    return health - damage || 0
}