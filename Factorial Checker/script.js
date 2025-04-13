const inputElem = document.querySelector('input');
const buttonElem = document.querySelector('button');
const showOutPut = document.querySelector('.main h2');


function reverseString(userInput) {
        if(userInput.length === 0 || userInput.trim() === ''){
            showOutPut.innerHTML = '';
        }
        else{
            let store = '';
            for (let i = userInput.length - 1; i >= 0; i--) {
                store = store + userInput[i];
            }
            return store;
        }
    } 
        buttonElem.addEventListener("click", () => {
            const userInput = inputElem.value;
            const factorialNum = reverseString(userInput);
            showOutPut.innerHTML = '';
            showOutPut.innerHTML += `<span>Factorial is:</span><br><h6 style="text-align:center;color:orangered;">${factorialNum}</h6>`;
        })
    