const mainElement = document.querySelector('main')
const outputElement = document.querySelector("#output")


const xInput = document.createElement('input')
    xInput.type = "number"
const yInput = document.createElement('input')
    yInput.type = "number"
    yInput.placeholder = "Y"
const addButton = document.createElement('button')
    addButton.append('Add')
const multiplyButton = document.createElement('button')
    multiplyButton.append('Multiply')
const divideButton = document.createElement('button')
    divideButton.append('Divide')
const subtractButton = document.createElement('button')
    subtractButton.append('Subtract')

mainElement.append(
    "Numbers to Crunch:",
    xInput,
    yInput, 
    addButton,
    multiplyButton,
    divideButton,
    subtractButton
)
// Separation of Concerns- This is calculator page!
addButton.addEventListener('click', function() {
    const x = Number(xInput.value)
    const y = Number(yInput.value)

    const result = calculator(x, y, add)   
    console.log({ result })
    outputElement.innerHTML = result
})
multiplyButton.addEventListener('click', function() {
    const x = Number(xInput.value)
    const y = Number(yInput.value)

    const result = calculator(x, y, multiply)   
    console.log({ result })
    outputElement.innerHTML = result
})
divideButton.addEventListener('click', function() {
    const x = Number(xInput.value)
    const y = Number(yInput.value)

    const result = calculator(x, y, divide)   
    console.log({ result })
    outputElement.innerHTML = result
})
subtractButton.addEventListener('click', function() {
    const x = Number(xInput.value)
    const y = Number(yInput.value)

    const result = calculator(x, y, subtract)   
    console.log({ result })
    outputElement.innerHTML = result
})