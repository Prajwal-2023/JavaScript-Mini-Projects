const toastBtn = document.querySelector('button');
const toastContainer = document.querySelector('.toast');

toastBtn.addEventListener('click', () => {
    const dataToShow = prompt('Enter Message for toast');
    const toastContainerPara = document.querySelector('.toast p');

   
    if (!dataToShow) {
        toastContainerPara.textContent = 'You can Have Custom Message Here';
        toastContainer.style.transform = `translateX(0%)`;
        toastContainer.style.transition = `transform 0.5s ease-in`;
        setTimeout(() => {
            toastContainer.style.transform = `translateX(1000%)`;
        }, 1200);
    } else {
        toastContainerPara.textContent = dataToShow;
        toastContainer.style.transform = `translateX(0%)`;
        toastContainer.style.transition = `transform 0.5s ease-in`;
        setTimeout(() => {
            toastContainer.style.transform = `translateX(1000%)`;
        }, 1200);
    }
})

