const inputElem = document.querySelector('input');
const buttonElem = document.querySelector('button');
const h1Elem = document.querySelector('h1');

buttonElem.addEventListener('click',()=>{
    primeNumberChecker(inputElem.value);
})

function primeNumberChecker(num){
    if(num < 2){
        h1Elem.textContent = `${num} is not a Prime Number`;
        return
    }
    for(let i = 2; i <= Math.sqrt(num); i ++){
        if(num % 2 === 0){
            h1Elem.textContent = `${num} is not a Prime Number`;
            return
        }
    }
    h1Elem.textContent = `${num} is a Prime Number`;
}
