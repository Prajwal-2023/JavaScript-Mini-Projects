const inputElem = document.querySelector('input');
const buttonElem = document.querySelector('button');
const showOutPut = document.querySelector('.main h2');


function factorialOfNum(userNum) {
    let result = 1;
    for(let i = userNum ; i >= 1 ; i--){
       result *= i;
    }
   return result ;
}
        buttonElem.addEventListener("click", () => {
            const userNum = parseInt(inputElem.value);
            // const factorialNum = factorialOfNum(userNum).toLocaleString('en-IN',{style:"currency" , currency: "INR"});
            const factorialNum = factorialOfNum(userNum).toLocaleString('en-IN');
            if (userNum <= 1 || isNaN(userNum)) {
                showOutPut.innerHTML = '';
                showOutPut.innerHTML += `<h6 style="text-align:center;color:orangered;">Enter a Number</h6>`;
            }else{
                showOutPut.innerHTML = '';
                showOutPut.innerHTML += `<span>Factorial is:</span><br><h6 style="text-align:center;color:orangered;">${factorialNum}</h6>`;
            }
        })
    