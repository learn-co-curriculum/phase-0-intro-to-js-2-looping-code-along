function writeCards (name, event){
  let returnMessage = [];
  for (let i = 0; i < name.length; i++){
    returnMessage.push (`Thank you, ${name[i]}, for the wonderful ${event} gift!`)
  };
  return returnMessage;
}

function countDown() {
  let count = 10;
  while (count >= 0) {
    console.log(count--);
  }
}
