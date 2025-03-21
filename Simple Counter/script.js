const decreaseValueBtn = document.querySelector('#decreaseValue');
const pElem = document.querySelector('p');
const increaseValueBtn = document.querySelector('#increaseValue');
let showValue = 0;
decreaseValueBtn.style.cursor = 'not-allowed';
pElem.textContent = showValue
decreaseValueBtn.addEventListener('click', () => {
    if (showValue > 0) {
        showValue--
        pElem.textContent = `${showValue}`

    }
    if (showValue === 0) {
        decreaseValueBtn.style.cursor = 'not-allowed';
    }
})
increaseValueBtn.addEventListener('click', () => {
    decreaseValueBtn.style.cursor = 'pointer';
    showValue++;
    pElem.textContent = `${showValue}`;
})