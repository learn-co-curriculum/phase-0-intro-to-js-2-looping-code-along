//Looping Lab

function writeCards(names, event) {//returns an array of thank you messages for each name provided to the function
  let message = [];
  for (let i = 0; i < names.length; i++) {
    message.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  return message;
}

function countDown(number) {//invokes console.log once for each number, counting down from the number provided to zero
    while (number >= 0) {
        console.log(number);
        number--;
    }
}