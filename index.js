// Code your solutions in this file
const writeCards = (nameArray, typeOfGift) => {
    const thankYouMessages = []
    for (let name of nameArray) {
        thankYouMessages.push(`Thank you, ${name}, for the wonderful ${typeOfGift} gift!`)
    }
    return thankYouMessages
}