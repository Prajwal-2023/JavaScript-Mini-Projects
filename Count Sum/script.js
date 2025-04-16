const h1Elem = document.querySelector('h1');
const inputElem = document.querySelector('input');
const btnElem = document.querySelector('button');

btnElem.addEventListener('click',()=>{
   h1Elem.textContent =  countSum(inputElem.value);
})

function countSum(inp) {
    return inp.toString().split('').reduce((sum,digit)=> sum + parseInt(digit),0);
}