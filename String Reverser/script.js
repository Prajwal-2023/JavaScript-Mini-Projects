const inputElem = document.querySelector('input');
const buttonElem = document.querySelector('button');
const showOutPut = document.querySelector('.main h2');


function reverseString(userInput) {
    let store = '';
    for (let i = userInput.length - 1; i >= 0; i--) {
        store = store + userInput[i];
    }
    return store;
}

buttonElem.addEventListener("click", () => {
    const userInput = inputElem.value;
    const reversed = reverseString(userInput);
    showOutPut.innerHTML = `Reversed String is :${reversed}`;
})