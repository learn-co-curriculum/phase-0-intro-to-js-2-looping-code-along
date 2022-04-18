// Code your solutions in this file
const names = ["Guadalupe", "Ollie", "Aki"];
const event = 'surprise';

function writeCards(names, event) {
    let newArr = [];
    for (let i =0; i < names.length; i++) {
        newArr.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return newArr;
}

function countDown(positiveNumber){
    while(positiveNumber >= 0) {
        console.log(positiveNumber);
        positiveNumber--;
    }

}
