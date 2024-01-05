// Code your solutions in this file
function writeCards(names, event) {
    let messages = [];
    for (let name of names) {
      messages.push(`Thank you, ${name}, for the wonderful ${event} gift!`);
    }
    return messages;
  }