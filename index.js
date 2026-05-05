// Code your solutions in this file
function countDown(start) {
    while(start >= 0) {
        console.log(start);
        start--;
    }
}

function writeCards(arr, giftType) {
    const cards = [];
    for(let card of arr) {
        console.log(`Thank you, ${card}, for the wonderful ${giftType} gift!`);
        cards.push(`Thank you, ${card}, for the wonderful ${giftType} gift!`);
    }

    return cards;
}