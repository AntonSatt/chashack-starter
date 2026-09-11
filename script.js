addEventListener("DOMContentLoaded", (event) =>
{
    const mainButton = document.getElementById("mainButton");
    const logo = document.getElementById("logo");
    const mainContent = document.getElementById("mainContent");

    const clickSound = new Audio("sounds/click.mp3");

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
function getRandomTeamQuote()
{
    return randomQuote = teamQuotes[Math.floor(Math.random() * teamQuotes.length)];
}
const teamQuoteParagraph = document.getElementById("teamQuoteParagraph");
teamQuoteParagraph.innerText = getRandomTeamQuote();

    mainButton.addEventListener("click", (e) =>
    {
        mainButton.style.backgroundColor = "green"
        logo.classList.add("logoFall");
        teamQuoteParagraph.innerText = getRandomTeamQuote();
    });

    const clickCounterButton = document.getElementById("clickCounterButton");
    const clickCounterNumberText = document.getElementById("clickCounterNumberText");
    let currentClickCounterNumber = 0;

    clickCounterButton.addEventListener("click", (e) =>
    {
        currentClickCounterNumber++;
        clickCounterNumberText.innerText = currentClickCounterNumber;
        clickSound.currentTime = 0;
        clickSound.play();
    });

    function toggleDarkMode()
    {
        document.body.classList.toggle("dark");
        mainContent.classList.toggle("dark");
        if (document.body.classList.contains("dark"))
        {
            localStorage.setItem("theme", "dark");
        }
        else
        {
            localStorage.setItem("theme", "light");
        }
    }

    const themeButton = document.querySelector("#themeButton");

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme == "dark")
    {
        document.body.classList.add("dark");
        mainContent.classList.add("dark");
    }
    themeButton.addEventListener("click", () =>
    {
        toggleDarkMode();
    });

    fetch("https://api.open-meteo.com/v1/forecast?latitude=59.33&longitude=18.07&current=temperature_2m")
    .then(response => response.json())
    .then(data => {
        const temperature = data.current.temperature_2m;
        document.querySelector("#temperature").textContent = `${temperature} °C`;
    })
    .catch(() => {
        document.querySelector("#temperature").textContent = "Kunde inte hämta temperaturen.";
    });


});

