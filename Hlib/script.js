// ==================================================
// INGEN location.reload()
// Sidan laddas INTE om av JavaScript.
// ==================================================



// ==================================================
// MEDLEMSKORT UR EN ARRAY
// + FILTRERA MEDLEMMARNA
// ==================================================

const teamMembers = [
    {
        name: "Maja",
        role: "Idé & design"
    },
    {
        name: "Avan",
        role: "Utveckling"
    },
    {
        name: "Hlib",
        role: "DevOps & struktur"
    },
    {
        name: "William",
        role: "Teknik & analys"
    }
];


const teamList =
    document.getElementById("teamList");

const teamCards =
    document.getElementById("teamCards");

const memberSearch =
    document.getElementById("memberSearch");

const noMembers =
    document.getElementById("noMembers");


function renderMembers(searchText = "") {

    const search =
        searchText
            .trim()
            .toLowerCase();


    const filteredMembers =
        teamMembers.filter(function (member) {

            return (
                member.name
                    .toLowerCase()
                    .includes(search)
                ||
                member.role
                    .toLowerCase()
                    .includes(search)
            );

        });


    teamList.innerHTML = "";
    teamCards.innerHTML = "";


    filteredMembers.forEach(function (member) {

        const listItem =
            document.createElement("li");

        listItem.textContent =
            member.name;

        teamList.appendChild(
            listItem
        );


        const card =
            document.createElement("article");

        card.className =
            "member-card";


        const avatar =
            document.createElement("div");

        avatar.className =
            "avatar";

        avatar.textContent =
            member.name.charAt(0);


        const heading =
            document.createElement("h4");

        heading.textContent =
            member.name;


        const role =
            document.createElement("p");

        role.textContent =
            member.role;


        card.appendChild(avatar);
        card.appendChild(heading);
        card.appendChild(role);

        teamCards.appendChild(card);

    });


    if (filteredMembers.length === 0) {

        noMembers.classList.remove(
            "hidden"
        );

    } else {

        noMembers.classList.add(
            "hidden"
        );

    }

}


renderMembers();


memberSearch.addEventListener(
    "input",
    function () {

        renderMembers(
            memberSearch.value
        );

    }
);



// ==================================================
// SKRIVMASKINSEFFEKT
// ==================================================

const typewriter =
    document.getElementById("typewriter");


const typewriterText =
    "Same goal. Different skills. Greater results.";


let typewriterIndex =
    0;


function typeNextCharacter() {

    if (
        typewriterIndex
        <
        typewriterText.length
    ) {

        typewriter.textContent +=
            typewriterText.charAt(
                typewriterIndex
            );

        typewriterIndex++;


        setTimeout(
            typeNextCharacter,
            55
        );

    }

}


typeNextCharacter();



// ==================================================
// VISA VÅR STYRKA
// ==================================================

const mainButton =
    document.getElementById("mainButton");

const message =
    document.getElementById("message");

const hero =
    document.querySelector(".hero");


mainButton.addEventListener(
    "click",
    function () {

        message.classList.toggle(
            "hidden"
        );

        hero.classList.toggle(
            "active"
        );


        if (
            message.classList.contains(
                "hidden"
            )
        ) {

            mainButton.textContent =
                "Visa vår styrka";

        } else {

            mainButton.textContent =
                "Dölj meddelande";

        }

    }
);



// ==================================================
// CLICK COUNTER + LOCALSTORAGE
// ==================================================

const counterButton =
    document.getElementById(
        "counterButton"
    );

const clickCount =
    document.getElementById(
        "clickCount"
    );


let count =
    Number(
        localStorage.getItem(
            "mahwClickCount"
        )
    ) || 0;


clickCount.textContent =
    count;


counterButton.addEventListener(
    "click",
    function () {

        count++;

        clickCount.textContent =
            count;


        localStorage.setItem(
            "mahwClickCount",
            count
        );

    }
);



// ==================================================
// RANDOM QUOTE
// ==================================================

const quotes = [

    "Same goal. Different skills. Greater results.",

    "Vi bygger bättre tillsammans.",

    "Ett lag. Fyra perspektiv.",

    "Olika kunskaper skapar bättre idéer.",

    "Kod, kreativitet och samarbete.",

    "Från idé till fungerande lösning.",

    "Vi lär oss genom att bygga.",

    "Teamwork makes the dream work."

];


const quoteButton =
    document.getElementById(
        "quoteButton"
    );

const quoteText =
    document.getElementById(
        "quoteText"
    );


quoteButton.addEventListener(
    "click",
    function () {

        let newQuote;


        do {

            const randomIndex =
                Math.floor(
                    Math.random()
                    *
                    quotes.length
                );


            newQuote =
                quotes[randomIndex];


        } while (
            newQuote
            ===
            quoteText.textContent.trim()
        );


        quoteText.textContent =
            newQuote;

    }
);



// ==================================================
// DARK / LIGHT + LOCALSTORAGE
// ==================================================

const themeButton =
    document.getElementById(
        "themeButton"
    );


const savedTheme =
    localStorage.getItem(
        "mahwTheme"
    );


if (savedTheme === "dark") {

    document.body.classList.add(
        "dark-mode"
    );

    themeButton.textContent =
        "☀️ Ljust läge";

}


themeButton.addEventListener(
    "click",
    function () {

        document.body.classList.toggle(
            "dark-mode"
        );


        const dark =
            document.body.classList.contains(
                "dark-mode"
            );


        if (dark) {

            themeButton.textContent =
                "☀️ Ljust läge";

            localStorage.setItem(
                "mahwTheme",
                "dark"
            );

        } else {

            themeButton.textContent =
                "🌙 Mörkt läge";

            localStorage.setItem(
                "mahwTheme",
                "light"
            );

        }

    }
);



// ==================================================
// LJUD VID KLICK
// Spelas när man klickar på "Fira Lag 13"
// ==================================================

function playClickSound() {

    const AudioContext =
        window.AudioContext
        ||
        window.webkitAudioContext;


    if (!AudioContext) {
        return;
    }


    const audioContext =
        new AudioContext();


    const oscillator =
        audioContext.createOscillator();


    const gain =
        audioContext.createGain();


    oscillator.type =
        "sine";


    oscillator.frequency.value =
        620;


    gain.gain.setValueAtTime(
        0.04,
        audioContext.currentTime
    );


    gain.gain.exponentialRampToValueAtTime(
        0.001,
        audioContext.currentTime + 0.09
    );


    oscillator.connect(gain);

    gain.connect(
        audioContext.destination
    );


    oscillator.start();

    oscillator.stop(
        audioContext.currentTime
        +
        0.09
    );

}



// ==================================================
// CONFETTI
// ==================================================

const confettiButton =
    document.getElementById(
        "confettiButton"
    );


const confettiColors = [
    "#0878ff",
    "#50a4ff",
    "#ffd84d",
    "#ffffff",
    "#72d6ff",
    "#ff6fae"
];


function createConfetti() {

    for (
        let i = 0;
        i < 80;
        i++
    ) {

        const piece =
            document.createElement(
                "span"
            );


        piece.className =
            "confetti-piece";


        piece.style.left =
            Math.random() * 100
            +
            "vw";


        piece.style.backgroundColor =
            confettiColors[
                Math.floor(
                    Math.random()
                    *
                    confettiColors.length
                )
            ];


        piece.style.animationDuration =
            2
            +
            Math.random() * 2
            +
            "s";


        piece.style.animationDelay =
            Math.random() * 0.4
            +
            "s";


        piece.style.setProperty(
            "--rotation",
            (
                360
                +
                Math.random() * 720
            )
            +
            "deg"
        );


        document.body.appendChild(
            piece
        );


        piece.addEventListener(
            "animationend",
            function () {

                piece.remove();

            }
        );

    }

}


confettiButton.addEventListener(
    "click",
    function () {

        playClickSound();

        createConfetti();

    }
);



// ==================================================
// EASTER EGG
// Skriv MAHW
// ==================================================

const easterEgg =
    document.getElementById(
        "easterEgg"
    );


const secretCode =
    "mahw";


let typedKeys =
    "";


document.addEventListener(
    "keydown",
    function (event) {

        const key =
            event.key.toLowerCase();


        if (key.length !== 1) {
            return;
        }


        typedKeys +=
            key;


        typedKeys =
            typedKeys.slice(
                -secretCode.length
            );


        if (
            typedKeys
            ===
            secretCode
        ) {

            easterEgg.classList.remove(
                "hidden"
            );


            easterEgg.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });


            createConfetti();


            typedKeys =
                "";

        }

    }
);



// ==================================================
// COUNTDOWN
// ==================================================

const presentationTime =
    new Date(
        "2026-09-11T15:30:00+02:00"
    );


const countdown =
    document.getElementById(
        "countdown"
    );


function updateCountdown() {

    const difference =
        presentationTime
        -
        new Date();


    if (difference <= 0) {

        countdown.textContent =
            "Redovisningen har börjat! 🚀";

        return;

    }


    const hours =
        Math.floor(
            difference
            /
            3600000
        );


    const minutes =
        Math.floor(
            (
                difference
                %
                3600000
            )
            /
            60000
        );


    const seconds =
        Math.floor(
            (
                difference
                %
                60000
            )
            /
            1000
        );


    countdown.textContent =
        String(hours)
            .padStart(2, "0")
        +
        ":"
        +
        String(minutes)
            .padStart(2, "0")
        +
        ":"
        +
        String(seconds)
            .padStart(2, "0");

}


updateCountdown();


setInterval(
    updateCountdown,
    1000
);



// ==================================================
// API
// ==================================================

const apiText =
    document.getElementById(
        "apiText"
    );

const apiButton =
    document.getElementById(
        "apiButton"
    );


async function loadProgrammingJoke() {

    apiText.textContent =
        "Hämtar data...";


    try {

        const response =
            await fetch(
                "https://v2.jokeapi.dev/joke/Programming?type=single&safe-mode"
            );


        if (!response.ok) {

            throw new Error(
                "API request failed"
            );

        }


        const data =
            await response.json();


        if (data.joke) {

            apiText.textContent =
                data.joke;

        } else {

            apiText.textContent =
                "Inget skämt hittades.";

        }

    } catch (error) {

        apiText.textContent =
            "Kunde inte hämta data. Försök igen senare.";

        console.error(
            error
        );

    }

}


apiButton.addEventListener(
    "click",
    loadProgrammingJoke
);


loadProgrammingJoke();



// ==================================================
// BILDKARUSELL
// ==================================================

const carouselSlides = [
    {
        src: "../img/logo.png",
        alt: "Lag 13:s runda MAHW-logotyp i blå och vit färg",
        caption: "MAHW — Lag 13"
    },
    {
        src: "../img/lagbild.jpg",
        alt: "Lag 13 tillsammans under ChasHack",
        caption: "Teamet på ChasHack"
    }
];


const carouselImage =
    document.getElementById(
        "carouselImage"
    );

const carouselCaption =
    document.getElementById(
        "carouselCaption"
    );

const previousImage =
    document.getElementById(
        "previousImage"
    );

const nextImage =
    document.getElementById(
        "nextImage"
    );


let currentSlide =
    0;


function showCarouselImage() {

    const slide =
        carouselSlides[
            currentSlide
        ];


    carouselImage.src =
        slide.src;

    carouselImage.alt =
        slide.alt;

    carouselCaption.textContent =
        slide.caption;

}


nextImage.addEventListener(
    "click",
    function () {

        currentSlide =
            (
                currentSlide
                +
                1
            )
            %
            carouselSlides.length;


        showCarouselImage();

    }
);


previousImage.addEventListener(
    "click",
    function () {

        currentSlide =
            (
                currentSlide
                -
                1
                +
                carouselSlides.length
            )
            %
            carouselSlides.length;


        showCarouselImage();

    }
);


showCarouselImage();



// ==================================================
// FORMULÄR MED VALIDERING
// Ingen omladdning av sidan.
// ==================================================

const contactForm =
    document.getElementById(
        "contactForm"
    );


const nameInput =
    document.getElementById(
        "name"
    );

const emailInput =
    document.getElementById(
        "email"
    );

const messageInput =
    document.getElementById(
        "formMessage"
    );


const nameError =
    document.getElementById(
        "nameError"
    );

const emailError =
    document.getElementById(
        "emailError"
    );

const messageError =
    document.getElementById(
        "messageError"
    );

const formSuccess =
    document.getElementById(
        "formSuccess"
    );


function showError(
    input,
    errorElement,
    text
) {

    input.classList.add(
        "input-error"
    );

    errorElement.textContent =
        text;

}


function clearError(
    input,
    errorElement
) {

    input.classList.remove(
        "input-error"
    );

    errorElement.textContent =
        "";

}


contactForm.addEventListener(
    "submit",
    function (event) {

        // VIKTIGT:
        // formuläret laddar INTE om sidan

        event.preventDefault();


        formSuccess.classList.add(
            "hidden"
        );


        let valid =
            true;


        const name =
            nameInput.value.trim();

        const email =
            emailInput.value.trim();

        const formMessage =
            messageInput.value.trim();


        if (name.length < 2) {

            showError(
                nameInput,
                nameError,
                "Skriv ditt namn."
            );

            valid =
                false;

        } else {

            clearError(
                nameInput,
                nameError
            );

        }


        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (
            !emailPattern.test(
                email
            )
        ) {

            showError(
                emailInput,
                emailError,
                "Skriv en giltig e-postadress."
            );

            valid =
                false;

        } else {

            clearError(
                emailInput,
                emailError
            );

        }


        if (
            formMessage.length
            <
            10
        ) {

            showError(
                messageInput,
                messageError,
                "Meddelandet måste innehålla minst 10 tecken."
            );

            valid =
                false;

        } else {

            clearError(
                messageInput,
                messageError
            );

        }


        if (valid) {

            formSuccess.classList.remove(
                "hidden"
            );


            contactForm.reset();

        }

    }
);