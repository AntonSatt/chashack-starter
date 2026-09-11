// ========================================
// VISA VÅR STYRKA
// ========================================

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



// ========================================
// SIDE QUEST: KLICKRÄKNARE
// ========================================

const counterButton =
    document.getElementById(
        "counterButton"
    );

const clickCount =
    document.getElementById(
        "clickCount"
    );


let count = 0;


counterButton.addEventListener(
    "click",
    function () {

        count++;

        clickCount.textContent =
            count;

    }
);



// ========================================
// SIDE QUEST: SLUMPAT LAGCITAT
// ========================================

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

            &&

            quotes.length > 1

        );


        quoteText.textContent =
            newQuote;

    }
);



// ========================================
// SIDE QUEST:
// MÖRKT OCH LJUST LÄGE
// ========================================

const themeButton =
    document.getElementById(
        "themeButton"
    );


themeButton.addEventListener(
    "click",
    function () {

        document.body.classList.toggle(
            "dark-mode"
        );


        if (
            document.body.classList.contains(
                "dark-mode"
            )
        ) {

            themeButton.textContent =
                "☀️ Ljust läge";

        } else {

            themeButton.textContent =
                "🌙 Mörkt läge";

        }

    }
);