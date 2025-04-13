const inputElem = document.querySelector('input');
const buttonElem = document.querySelector('button');
const showOutPut = document.querySelector('.main h2');


function factorialOfNum(userNum) {

   


}
        buttonElem.addEventListener("click", () => {
            const userNum = inputElem.value;
            const factorialNum = factorialOfNum(userNum);
            showOutPut.innerHTML = '';
            if(isNaN(userNum)){
            showOutPut.innerHTML += `<h6 style="text-align:center;color:orangered;">Enter A Number</h6>`;
            }else{
                showOutPut.innerHTML += `<span>Factorial is:</span><br><h6 style="text-align:center;color:orangered;">${factorialNum}</h6>`;
            }
        })
    