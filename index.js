// Code your solutions in this f
let name = ['Hunter', 'sinon', 'Percey']

function writeCards(name , event) {
    let messages = []
    for (let i = 0; i < name.length; i++) {
        messages.push (`Thank you, ${name[i]}, for the wonderful ${event} gift!`)
    }
    return messages
}

function countDown(number) {
    let i = 0
    while (i <= number) {
        console.log(number--)
    }
}