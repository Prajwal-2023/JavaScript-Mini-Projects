const pElem = document.querySelector('#timerP');
const buttonElem = document.querySelector('button');
const resetBtnElem = document.querySelector('#reset');
const titleElem = document.querySelector('#title');

buttonElem.addEventListener('click', () => {
    let countTimer = 10;
    buttonElem.disabled = true;
    buttonElem.style.cursor = 'not-allowed';
    buttonElem.style.background = '#dadada';
    buttonElem.textContent = 'Started';
    resetBtnElem.style.display = `none`;
    titleElem.textContent = `Your 10s Timer is Started`;

    const countDown = setInterval(() => {
        countTimer--;
        pElem.textContent = countTimer;

        if (countTimer === 0) {
            clearInterval(countDown);
            buttonElem.disabled = false;
            buttonElem.style.cursor = 'pointer';
            buttonElem.style.background = '#2b8692';
            buttonElem.textContent = 'Start';
            resetBtnElem.style.display = `flex`;
            titleElem.textContent = `Time Up !!!`;
            resetBtnElem.addEventListener('click', () => {
                titleElem.textContent = `Start Your 10s Timer`;
                pElem.textContent = '10';
            })
        }
    }, 1000);
})