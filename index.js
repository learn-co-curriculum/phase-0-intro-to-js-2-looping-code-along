function writeCards(names, event) {
  let messages = [];
for (let i = 0; i < names.length; i++) {
messages[i] = (`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  
  }
  return messages;
}
console.logwriteCards(["Guadalupe", "Ollie", "Aki"], "surprise");

function countDown(number) {
  while (number >= 0) {
    console.log(number);
    number--;
  }
}
