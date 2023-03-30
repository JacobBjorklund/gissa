

let button = document.querySelector('button').addEventListener('click', () => {
    let randomNumber = Math.floor(Math.random() * 10)
    let input = document.querySelector('input').value
    if (input == randomNumber) {
        let div = document.querySelector('div').innerHTML = `Correct`
    }
    else {
        let div = document.querySelector('div').innerHTML = `Wrong`
    }
})
