// Code your solutions in this file
const writeCards = (nameArray, typeOfGift) => {
    const thankYouMessages = []
    for (let name of nameArray) {
        thankYouMessages.push(`Thank you, ${name}, for the wonderful ${typeOfGift} gift!`)
    }
    return thankYouMessages
}

const countDown = (startingNumber) => {
    for (let i = startingNumber; i >= 0; i--) {
        console.log(i);
    }
}