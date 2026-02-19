function writeCards(names, ) {
    const messages = [];
    for (let i = 0; i < names.length; i++) {
        console.log(`Thank you, ${names[i]}, for the wonderful gift!`);
        messages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);    
    }
    return messages;
}

function countDown(n) {
    while (n >= 0) {
        console.log(n);
        n--;
    }   
}