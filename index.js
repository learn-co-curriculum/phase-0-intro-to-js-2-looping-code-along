// Code your solutions in this file
const gifts = ['teddy bear', 'drone', 'doll'];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}

wrapGifts(gifts);

const thankYouCards = [];

function writeCards(array, event) {
  for(let i =0; i < array.length; i++){
    thankYouCards.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
  }; return thankYouCards;
};

function countDown(number){
  while (number >= 0) {
    console.log(number--);
  };
};
