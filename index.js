const writeCards = (array,event) => {
  const birthdayMessages = [];
    for(let name of array){
    birthdayMessages.push(`Thank you, ${name}, for the wonderful ${event} gift!`);
  }
  return birthdayMessages;
}

const countDown = (num) => {
  while(num >= 0){
    console.log(num);
    num--;
  }
}
