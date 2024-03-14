const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const inputNumber = document.querySelector('#inputNumber')
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

inputNumber.focus()

console.log(randomNumber)
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keypress', enterReset)

function handleTryClick(event) {
    event.preventDefault()
    if (Number(inputNumber.value) && Number(inputNumber.value) <= 10 && Number(inputNumber.value) >= 0) {
            if (Number(inputNumber.value) == randomNumber) {
                toggleScreen()
                screen2.querySelector('h2').innerText = `Acertou em ${xAttempts} tentativa(s)`
                inputNumber.value = ''
            }
            xAttempts++
            inputNumber.value = ''
        } else {
        alert('Valor Inválido - Informe um valor de 0 a 10')
        inputNumber.value = ''
    }
    inputNumber.focus()
}

function handleResetClick() {
    toggleScreen()
    xAttempts = 1
    randomNumber = Math.round(Math.random() * 10)
    console.log(randomNumber)
    inputNumber.focus()
}

function enterReset(e) {
    if (e.key === 'Enter' && screen1.classList.contains('hide')) {
        handleResetClick()
    }
}

function toggleScreen() {
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
}