
const gifts = ['teddy bear', 'drone', 'doll']
// //For loop example
// function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     }
//     return gifts;
// }
//
// wrapGifts(gifts);


// //While loop example
// function wrapGifts(gifts){
//     let i = 0; 
//     while (i < gifts.length){
//         console.log(`Wrapped ${gifts[i]} and added a bow!`)
//         i++;
//     }
//     return gifts;
// }
//
// wrapGifts(gifts);


//For loop 
function writeCards(names, event){
    let messages = []
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return messages;
}

writeCards(['Adam', 'Brooke', 'Nick', 'JJ'], "birthday");

function countDown(num){
    while ( num >= 0){
    console.log(num);
    num --;
    }
}

countDown(10);
