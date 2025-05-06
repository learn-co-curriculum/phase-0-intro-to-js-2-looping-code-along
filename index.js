function writeCards(names, event) {
    const cards = [];
    for (let i = 0; i < names.length; i++) {
        cards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return cards;
}

function countDown(n) {
    while (n >= 0) {
        console.log(n);
        n--;
    }
}