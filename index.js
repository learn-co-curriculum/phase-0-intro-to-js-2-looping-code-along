// Code your solutions in this file
function writeCards(names, giftType) {
    let cards = []
    for(let i = 0; i < names.length; i++) {
        console.log(`Thank you, ${names[i]}, for the wonderful ${giftType} gift!`)
        cards.push(`Thank you, ${names[i]}, for the wonderful ${giftType} gift!`)
    }
    return cards
}

function countDown(x) {
    for(let i = x; i >= 0; i--) {
        console.log(i)
    }
}