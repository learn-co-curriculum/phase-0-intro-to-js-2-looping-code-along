// index.js
function writeCards(names, event) {
  return names.map(
    (name) => `Thank you, ${name}, for the wonderful ${event} gift!`
  );
}

function countDown(number) {
  while (number >= 0) {
    console.log(number);
    number--;
  }
}

// Export the functions to make them available for import in test files
module.exports = { writeCards, countDown };
