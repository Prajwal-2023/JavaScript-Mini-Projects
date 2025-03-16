const imgDarkIconMoon = "./STATIC/theme_dark.png";
const imgLightIconMoon = "./STATIC/theme_light.png";
const imgEleme = document.querySelector('img');
imgEleme.style.border = `1px solid black`;
const containerEleme = document.querySelector('.container');
let FLAG = 0; //Light Theme - 1 for Dark Theme
imgEleme.addEventListener('click', () => {
    containerEleme.classList.toggle('dark');
    if (FLAG === 0) {
        imgEleme.src = imgLightIconMoon;
        imgEleme.style.border = `1px solid white`;
        imgEleme.style.transition = `0.5s all ease-in-out`;
        FLAG = 1;
    } else {
        imgEleme.src = imgDarkIconMoon;
        imgEleme.style.border = `1px solid black`;
        imgEleme.style.transition = `0.5s all ease-in-out`;
        FLAG = 0;
    }
})