addEventListener("DOMContentLoaded", (event) =>
{
    const mainButton = document.getElementById("mainButton");
    const logo = document.getElementById("logo");

    mainButton.addEventListener("click", (e) =>
    {
        mainButton.style.backgroundColor = "green"
        logo.classList.add("logoFall");
    });

    const clickCounterButton = document.getElementById("clickCounterButton");
    const clickCounterNumberText = document.getElementById("clickCounterNumberText");
    let currentClickCounterNumber = 0;

    clickCounterButton.addEventListener("click", (e) =>
    {
        currentClickCounterNumber++;
        clickCounterNumberText.innerText = currentClickCounterNumber;
    });

    const teamQuotes = [
    "En för alla, alla för Lag 13!",
    "Vi kanske inte vet hur, men vi löser det.",
    "Commit först, tänk sen.",
    "Det fungerar på min dator.",
    "Fyra hjärnor, en deadline.",
    "Buggar är bara oplanerade features.",
    "Vi ger aldrig upp – vi bara googlar hårdare.",
    "När allt annat går fel: Ctrl + Z.",
    "Lag 13 – tretton otursnummer, noll ursäkter.",
    "Vi kom för att koda, vi stannar för att vinna.",
    "Planen är enkel: bygg, testa, fixa, repeat.",
    "Kod tillsammans, kaos tillsammans.",
    "Det behöver inte vara perfekt. Det behöver fungera.",
    "En bra idé är början. En fungerande sida är målet.",
    "Lag 13: Powered by kaffe och stack overflow."
];
function getTeamQuote()
{
    return randomQuote = teamQuotes[Math.floor(Math.random() * teamQuotes.length)];
}

});
