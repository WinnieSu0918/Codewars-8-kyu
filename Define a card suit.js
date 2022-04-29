/*
  Title:
    Define a card suit
    
  Description:
    You get any card as an argument. Your task is to return the suit of this card (in lowercase).

    Our deck (is preloaded):

    deck = ['2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣','A♣',
        '2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦','A♦',
        '2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥','A♥',
        '2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠','A♠'];
    
  Examples:
    ('3♣') -> return 'clubs'
    ('3♦') -> return 'diamonds'
    ('3♥') -> return 'hearts'
    ('3♠') -> return 'spades'
    
*/


// Other Solution
/*
function defineSuit(card) {
    return card.includes('♣') ? 'clubs' 
         : card.includes('♦') ? 'diamonds'
         : card.includes('♥') ? 'hearts'
         : 'spades'
}
*/

// Now Solution
function defineSuit(card) {
  const s = {
    "♣": "clubs",
    "♠": "spades",
    "♦": "diamonds",
    "♥": "hearts",
  };
  return s[card.charAt(card.length - 1)];
}
