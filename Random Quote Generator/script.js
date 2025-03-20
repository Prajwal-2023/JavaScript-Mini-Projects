const pElem = document.querySelector('p');
const buttonElem = document.querySelector('button');
async function fetchData() {
    try {
        const response = await fetch('https://dummyjson.com/quotes');
        const data = await response.json();
        const randomNumber = Math.round(Math.random() * 30);
        pElem.innerHTML = `<p style="font-size:1rem">${data.quotes[randomNumber].quote}.</p><span style="font-weight:700;">author : ${data.quotes[randomNumber].author}</span>`;
    } catch (err) {
        pElem.innerHTML = `<p style="font-size:1rem">Something Went Wrong :${err}</p>`;
        console.log(err)
    }

}
buttonElem.addEventListener('click', () => {
    pElem.innerHTML = `<p style="font-size:1rem">Wait Loading...</p>`;
    fetchData();
})
