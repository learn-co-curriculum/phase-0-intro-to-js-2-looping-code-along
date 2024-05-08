function writeCards (namesArray, event) {
  let thankYou = []
  for (let i = 0; i < namesArray.length; i++ ) {
    thankYou.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`);
  } 
  return thankYou;
}

function countDown(initialNumber) {
  while (initialNumber >= 0) {
    console.log (initialNumber);
    initialNumber -= 1;
  }
}
