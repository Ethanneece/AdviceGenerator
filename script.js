const advice_url = "https://api.adviceslip.com/advice";

async function onLoad() {

    generateQuote()
}

async function buttonClick() {

    generateQuote()
}

async function generateQuote() {

    const res = await fetch(advice_url);
    const data = await res.json();

    console.log(data);

    const advice = data.slip.advice;
    const id = data.slip.id; 

    const adviceHeader = document.getElementById("adviceHeader");
    adviceHeader.innerHTML = "Advice #" + id;

    const quote = document.getElementById("adviceQuote");
    quote.innerHTML = "\"" + advice + "\"";
}

const button = document.getElementById("reroll");
button.addEventListener("click", buttonClick);

onLoad()