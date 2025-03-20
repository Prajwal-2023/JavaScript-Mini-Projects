const buttonElem = document.querySelector('button');
const divElem = document.querySelector('div');
const spanElem = document.querySelector('span');
let diceNumberIS = 0;
buttonElem.addEventListener('click', () => {
    divElem.style.animation = `rollDice 2s infinite ease-in-out`;
    buttonElem.disabled = true;
    buttonElem.style.background = '#646464fa';
    buttonElem.style.cursor = 'not-allowed';

    diceNumberIS = Math.ceil(Math.random() * 6);
    console.log('ok')
    switch (diceNumberIS) {
        case 1:
            divElem.innerHTML = ``;
            setTimeout(()=>{
                divElem.innerHTML =
                `<p></p>
                <p></p>
                <p></p>
                <p></p>
                <span></span>
                <p></p>
                <p></p>
                <p></p>
                <p></p>`;
                divElem.style.gridTemplateColumns = `auto auto auto`;
                divElem.style.gridTemplateRows = `auto auto auto`;
            },2000);
            callTimeOut();
            break;

        // pattern = 2
        case 2:
            divElem.innerHTML = ``;
            setTimeout(()=>{
            divElem.innerHTML =
                `<span></span>
                    <span></span>`;
            divElem.style.gridTemplateColumns = `auto`;
            divElem.style.gridTemplateRows = `auto auto`;
        },2000)
            callTimeOut();
            break;

        // Pattern = 3
        case 3:
            divElem.innerHTML = ``;
            setTimeout(()=>{
            divElem.innerHTML =
                `<p></p>
                <p></p>
                <span></span>
                <p></p>
                <span></span>
                <p></p>
                <span></span>`;
            divElem.style.gridTemplateColumns = `auto auto auto`;
            divElem.style.gridTemplateRows = `auto auto auto`;
        },2000)
            callTimeOut();
            break;

        // Pattern = 4
        case 4:
            divElem.innerHTML = ``;
            setTimeout(()=>{
            divElem.innerHTML =
                `<span></span>
                    <p></p>
                    <span></span>
                    <p></p>
                    <p></p>
                    <p></p>
                    <span></span>
                    <p></p>
                    <span></span>`;
            divElem.style.gridTemplateColumns = `auto auto auto`;
            divElem.style.gridTemplateRows = `auto auto auto`;
        },2000)
            callTimeOut();
            break;


        // Pattern = 5
        case 5:
            divElem.innerHTML = ``;
            setTimeout(()=>{
            divElem.innerHTML =
                `<span></span>
                    <p></p>
                    <span></span>
                    <p></p>
                    <span></span>
                    <p></p>
                    <span></span>
                    <p></p>
                    <span></span>`;
            divElem.style.gridTemplateColumns = `auto auto auto`;
            divElem.style.gridTemplateRows = `auto auto auto`;
        },2000)
            callTimeOut();
            break;


        // Pattern = 6
        case 6:
            divElem.innerHTML = ``;
            setTimeout(()=>{
            divElem.innerHTML =
                `<span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>`;
            divElem.style.gridTemplateColumns = `auto auto auto`;
            divElem.style.gridTemplateRows = `auto auto`;
            },2000);
            callTimeOut();
            break;

        default:
            divElem.innerHTML = `😂`;
    }
})


function callTimeOut() {
    setTimeout(() => {
        buttonElem.disabled = false;
        buttonElem.style.background = '#e78d27fa';
        buttonElem.style.cursor = 'pointer';
        divElem.style.animation = '';
        divElem.style.filter = `blur(0px)`;
    }, 2000)
}