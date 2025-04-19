const h1Elem = document.querySelector('h1')
const inputElem = document.querySelector('input')
const btnElem = document.querySelector('button')

function oddEvenChecker(val){
    if(val === 0 || val % 2 === 0){
        h1Elem.textContent = `${val} It is a Even Number`;
    }else{
        h1Elem.textContent = `${val} It is a Odd Number`;
    }
}

btnElem.addEventListener('click',()=>{
    oddEvenChecker(inputElem.value)
})
