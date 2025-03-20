const onBulb = document.querySelector('.onBulb');
const offBulb = document.querySelector('.offBulb');
const bodyElem = document.querySelector('body');
const pElem = document.querySelector('p');
onBulb.addEventListener('click', () => {
    offBulb.style.display = 'block';
    onBulb.style.display = 'none';
    bodyElem.style.backgroundColor = '#222';
    pElem.textContent = 'Ok Bye! Good Night 🌃';
    pElem.style.color = '#fff';
    callTransition();
});
offBulb.addEventListener('click', () => {
    onBulb.style.display = 'block';
    offBulb.style.display = 'none';
    bodyElem.style.backgroundColor = '#f2f5d3';
    pElem.textContent = 'Hey Hi! Good Morning 🌄';
    pElem.style.color = '#222';
    callTransition();
});

function callTransition() {
    const transitionValue = `all 0.5s ease`
    onBulb.style.transition = transitionValue;
    offBulb.style.transition = transitionValue;
    bodyElem.style.transition = transitionValue;
    pElem.style.transition = `all 0.2s ease`;
}
