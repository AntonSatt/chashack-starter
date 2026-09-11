# MAHW – Lag 13 | ChasHack 2026

En hemsida skapad av Lag 13 under ChasHack 2026.

Vi är ett team med olika tekniska och kreativa kompetenser som tillsammans har byggt en responsiv och interaktiv hemsida med HTML, CSS och JavaScript.

## 🌐 Live version

👉 [Öppna hemsidan](https://majakarlsson68gmailcom.github.io/chashack-starter/)

## 👥 Teamet

- Maja
- Avan
- Hlib
- William

## 💡 Om projektet

Vårt mål var att skapa en modern och tydlig hemsida som representerar vårt lag och våra olika kompetenser.

Hemsidan innehåller bland annat:

- Lagets namn och presentation
- Lista över alla lagmedlemmar
- Egen MAHW-logotyp
- Responsiv design
- CSS-styling
- JavaScript-interaktivitet
- Tillgänglig bild med beskrivande alt-text
- Klickräknare med knappljud
- Mörk och ljust läge (sidan minns)

## Externt API

Vi använder Open-Meteo API för att hämta aktuell temperatur i Stockholm.
Om API-anropet misslyckas visas ett felmeddelande på sidan.

## 🛠 Teknik

- HTML
- CSS
- JavaScript
- Git
- GitHub
- GitHub Pages

## 🚀 Så kör du projektet lokalt

Klona repot:

```bash
git clone https://github.com/majakarlsson68gmailcom/chashack-starter.git

## 🥚 Easter egg

Sidan innehåller ett hemligt Easter egg.

För att aktivera det:

1. Öppna sidan.
2. Skriv `MAHW` på tangentbordet.
3. Ett hemligt meddelande visas tillsammans med konfetti.

## 🌐 Externt API

Sidan använder JokeAPI för att hämta slumpmässiga programmeringsskämt:

`https://v2.jokeapi.dev/joke/Programming`

Ett nytt skämt hämtas när sidan öppnas eller när användaren klickar på knappen **Hämta nytt**.

Om API-anropet misslyckas visas ett felmeddelande på sidan istället.

## 💾 LocalStorage

Sidan sparar följande information i webbläsarens `localStorage`:

- valt ljust eller mörkt tema
- antal klick i klickräknaren

Det betyder att informationen finns kvar även efter att sidan laddas om med F5.