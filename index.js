// Code your solutions in this file
function writeCards(names) {
  let messages = [];
  for (name of names) {
    messages.push(`Thank you, ${name}, for the wonderful surprise gift!`);
  }
  return messages;
}

function countDown(n) {
  while (n >= 0) {
    console.log(n);
    n -= 1;
  }
}
