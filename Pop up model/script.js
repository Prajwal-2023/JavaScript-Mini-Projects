const modelElem = document.querySelector('.model')
const closeModelBtn = document.querySelector('#closeBtn');
const saveAndOpenModelBtn = document.querySelector('#saveBtn');
const overLayDiv = document.querySelector('.overlay');

saveAndOpenModelBtn.addEventListener('click', () => {
    modelElem.style.display = `block`;
    overLayDiv.classList.add('showOverlay');
})
closeModelBtn.addEventListener('click', () => {
    modelElem.style.display = `none`;
    overLayDiv.classList.remove('showOverlay');
})