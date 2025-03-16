const eyeOpenLogo =
    ` <svg fill="currentColor" class="___12fm75w f1w7gpdv fez10in fg4l7m0" aria-hidden="true" width="35" height="35" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3.26 11.6A6.97 6.97 0 0 1 10 6c3.2 0 6.06 2.33 6.74 5.6a.5.5 0 0 0 .98-.2A7.97 7.97 0 0 0 10 5a7.97 7.97 0 0 0-7.72 6.4.5.5 0 0 0 .98.2ZM10 8a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-2.5 3.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Z" fill="currentColor"></path></svg>
    `;

const eyeCloseLogo =
    `<svg fill="currentColor" class="___12fm75w f1w7gpdv fez10in fg4l7m0" aria-hidden="true" width="35" height="35" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.85 2.15a.5.5 0 1 0-.7.7l3.5 3.5a8.1 8.1 0 0 0-3.37 5.05.5.5 0 1 0 .98.2 7.09 7.09 0 0 1 3.1-4.53l1.6 1.59a3.5 3.5 0 1 0 4.88 4.89l4.3 4.3a.5.5 0 0 0 .71-.7l-15-15Zm9.27 10.68a2.5 2.5 0 1 1-3.45-3.45l3.45 3.45Zm-2-4.83 3.38 3.38A3.5 3.5 0 0 0 10.12 8ZM10 6c-.57 0-1.13.07-1.67.21l-.8-.8A7.65 7.65 0 0 1 10 5c3.7 0 6.94 2.67 7.72 6.4a.5.5 0 0 1-.98.2A6.97 6.97 0 0 0 10 6Z" fill="currentColor"></path></svg>
    `;

const containerElem = document.querySelector('.container');
const passwordInputElem = document.querySelector('#passwordInput');
const spanElem = document.querySelector('span');
spanElem.innerHTML = eyeOpenLogo;
spanElem.style.cursor = `pointer`;

spanElem.addEventListener('click', () => {
    if (passwordInputElem.type === 'password') {
        passwordInputElem.type = 'text';
        spanElem.innerHTML = eyeCloseLogo;
    } else {
        passwordInputElem.type = 'password';
        spanElem.innerHTML = eyeOpenLogo;

    }
})

const labelElem = document.querySelector('label');
const pErrorElem = document.querySelector('p');
pErrorElem.textContent = '';
const btnElem = document.createElement('button');
btnElem.innerText = `Now Save`;
btnElem.classList.add('savePass');
passwordInputElem.addEventListener('input', () => {
    labelElem.classList.add(`labelUp`);
    labelElem.style.transition = `0.2s ease-in`;
    let inputValue = passwordInputElem.value;
    let inputStrength = inputValue.length;
    if (inputStrength > 0 && inputStrength <= 4) {
        pErrorElem.innerHTML = '<p style="color:red">Password Is Week</p>';
        btnElem.remove();
    } else if (inputStrength > 4 && inputStrength <= 8) {
        pErrorElem.innerHTML = '<p style="color:orange">Password Is Medium</p>';
        btnElem.remove();
    } else if (inputStrength > 8) {
        pErrorElem.innerHTML = '<p style="color:green">Password Is Strong</p>';
        pErrorElem.insertAdjacentElement('afterend', btnElem);
    } else {
        pErrorElem.textContent = ``;
        btnElem.remove();
    }

    btnElem.addEventListener('click', () => {
        pErrorElem.innerHTML = '<p style="color:#368bec">Password Saved</p>';
        passwordInputElem.value = '';
        setTimeout(() => {
            pErrorElem.innerHTML = '';
            btnElem.remove();
            labelElem.classList.remove(`labelUp`);
            labelElem.style.transition = `0.2s ease-in`;
            passwordInputElem.type = 'password';
            spanElem.innerHTML = eyeOpenLogo;
        }, 600)
    })
})

passwordInputElem.addEventListener('blur', () => {
    if (passwordInputElem.value === '') {
        labelElem.classList.remove(`labelUp`);
        labelElem.style.transition = `0.2s ease-in`;
    }
})
