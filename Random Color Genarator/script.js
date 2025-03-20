const button = document.querySelector('button');
const colorSpan = document.querySelector('span');
const pTag = document.querySelector('p');
const copyButton = document.querySelector('img');

function randomColor() {
    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);

    const colorIs = ` rgb(${red}, ${green}, ${blue})`;

    return colorIs;
}
let bgColor;
button.addEventListener('click', () => {
    bgColor = randomColor();
    pTag.style.display = `flex`;
    colorSpan.textContent = bgColor;
    const mainBg = document.querySelector('html');
    mainBg.style.background = bgColor;
})
copyButton.addEventListener('click', () => {
    if (bgColor) {
        navigator.clipboard.writeText(bgColor)
            .then(() => alert(`Color ${bgColor} is Copied To Clipboard!`))
            .catch((err) => console.log("Failed to Copy:", err));
    } else {
        alert("No color generated yet!");
    }
});