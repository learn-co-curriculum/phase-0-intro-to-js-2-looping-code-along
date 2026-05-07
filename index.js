function writeCards() {
  const names = ["Guadalupe", "Ollie", "Aki"];
   return names.map(name => `Thank you, ${name}, for the wonderful surprise gift!`);
} // yay arrow functions. Played around with writing this in a couple different ways, originally I did a for loop and today I discovered map() 
 // learned how it creates a new array by applying a function to every element of an existing array. 

function countDown(loopsForDays) {
  while (loopsForDays >= 0) {
    console.log(loopsForDays);
    loopsForDays--;
  }
}