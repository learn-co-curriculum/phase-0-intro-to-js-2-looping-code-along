function writeCards(array, occasion) {
  const thankYouArray = [...array];
  for (let i = 0; i < thankYouArray.length; i++) {
  thankYouArray[i] = `Thank you, ${array[i]}, for the wonderful ${occasion} gift!`  
  }
  return thankYouArray
}

function countDown(i){
  while (i >= 0){
    console.log(i--)
  }
}
 
console.log(countDown(10));
