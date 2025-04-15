const h1Elem = document.querySelector('h1');
const getFileInput = document.querySelector('input');
const buttonElem = document.querySelector('button');


buttonElem.addEventListener('click', () => {
    let getExtenstion = getFileInput.value
    console.log(getExtenstion.slice(getExtenstion.lastIndexOf('.')));
    h1Elem.textContent = getExtenstion.slice(getExtenstion.lastIndexOf('.'));
})

