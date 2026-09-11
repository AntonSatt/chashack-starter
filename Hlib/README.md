# MAHW – Lag 13 | ChasHack 2026

Det här är vår version av Lag 13:s hemsida för ChasHack 2026.

Projektet är byggt med HTML, CSS och JavaScript och innehåller både huvuduppgifterna och flera side quests med fokus på design, funktionalitet, tillgänglighet och interaktivitet.

---

## 👥 Teamet

Lag 13 består av:

- Maja
- Avan
- Hlib
- William

Vi har olika tekniska och kreativa bakgrunder inom bland annat DevOps, .NET, JavaScript och UX.

Vårt motto är:

> Same goal. Different skills. Greater results.

---

## 🌐 Live version

Den publicerade versionen av sidan finns här:

**GitHub Pages:**  
`LÄGG-IN-LÄNKEN-HÄR`

---

## 🛠 Teknik

Projektet använder:

- HTML5
- CSS3
- JavaScript
- Git
- GitHub
- GitHub Pages
- Google Fonts
- Web Storage API / localStorage
- Fetch API
- Web Audio API

---

# Funktioner och side quests

## 🎨 Egen design och färgpalett

Sidan använder en egen blå och ljus färgpalett som passar MAHW-logotypen.

Färgerna är definierade som CSS-variabler i `:root` i `style.css`.

Exempel:

```css
:root {
    --background: #f5faff;
    --primary: #0878ff;
    --dark-blue: #082a61;
    --text: #102c52;
}
```

Det gör att färgerna kan ändras centralt och återanvändas på hela sidan.

---

## 🌙 Mörkt och ljust läge

Sidan har en knapp som växlar mellan ljust och mörkt tema.

Temat ändras med CSS-variabler och JavaScript.

Valet sparas i `localStorage`, vilket betyder att samma tema finns kvar även efter att sidan laddas om med F5.

Det som sparas heter:

```text
mahwTheme
```

---

## 💾 Sidan minns användaren

Sidan använder `localStorage` för att spara:

- valt ljust eller mörkt tema
- värdet i klickräknaren

Det innebär att informationen finns kvar även när användaren uppdaterar sidan.

Klickräknaren sparas som:

```text
mahwClickCount
```

---

## 🖱 Hover-effekter

Knappar, länkar och flera kort reagerar när muspekaren hålls över dem.

Exempel på effekter:

- kort lyfts upp
- skuggor blir tydligare
- färger ändras
- bilder zoomas lätt

Detta gör sidan mer levande och tydlig för användaren.

---

## 🔤 Egen typsnittskombination

Sidan använder två Google Fonts:

### Space Grotesk

Används främst för:

- rubriker
- logotyptext
- större visuella element

### Manrope

Används för:

- brödtext
- knappar
- formulär
- navigation

Typsnitten laddas in i `<head>` från Google Fonts.

---

## 🧊 Kort med djup

Flera delar av sidan visas som kort med:

- rundade hörn
- kantlinje
- mjuk skugga
- ljus bakgrund
- hover-effekt

Det gör att innehållet visuellt ser ut att ligga ovanpå bakgrunden istället för att vara helt platt.

---

## 🖼 Lagets logotyp

Lagets MAHW-logotyp visas tydligt på sidan.

Bildfilen ligger i:

```text
img/logo.png
```

Bilden har också en beskrivande `alt`-text för tillgänglighet.

---

## 🌐 Egen favicon

MAHW-logotypen används också som favicon i webbläsarfliken.

Den kopplas in i `<head>` med:

```html
<link rel="icon" type="image/png" href="../img/logo.png">
```

---

## 📸 Lagbild

Sidan kan visa en riktig bild på hela Lag 13.

Bildfilen ligger i:

```text
img/lagbild.jpg
```

Bilden har en beskrivande `alt`-text.

Alla lagmedlemmar ska ha godkänt att bilden publiceras.

---

## ♿ Alt-text på alla bilder

Alla `<img>`-element på sidan har ett `alt`-attribut som beskriver vad bilden föreställer.

Det gör sidan mer tillgänglig för exempelvis användare med skärmläsare.

---

## 📱 Responsiv design

Sidan är anpassad för både dator och mobil.

Vi använder media queries i CSS för att ändra layouten när skärmen blir smalare.

Exempel:

- teamkort går från fyra kolumner till två och sedan en
- funktionskort går till en kolumn
- navigationen radbryts
- knappar blir bredare på mobil
- karusellen anpassar sig
- bilder skalas automatiskt

---

## ♿ Tangentbordet räcker

Sidan går att använda med tangentbordet.

Användaren kan trycka på `Tab` för att gå mellan:

- länkar
- knappar
- formulärfält

Det finns tydliga fokusmarkeringar med `:focus-visible` så att det syns vilket element som är aktivt.

---

## 🎯 Kontrast

Textfärgerna har valts för att vara tydliga mot både ljusa och mörka bakgrunder.

Brödtexten använder en mörkare färg i det ljusa temat och en ljusare färg i det mörka temat.

Det gör texten lättare att läsa.

---

# JavaScript-funktioner

## 👥 Medlemskort från en array

Lagmedlemmarna är inte hårdkodade som färdiga kort i HTML.

De ligger i en array i `script.js`:

```javascript
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
```

JavaScript går igenom arrayen och skapar både namnlistan och medlemskorten automatiskt.

---

## 🔎 Filtrera medlemmarna

Det finns ett sökfält där användaren kan skriva ett namn eller en roll.

Listan och korten filtreras direkt medan användaren skriver.

Exempel:

```text
Hlib
DevOps
Maja
design
```

Om ingen medlem matchar visas ett meddelande.

Sidan behöver inte laddas om.

---

## 🔢 Klickräknare

Det finns en knapp som räknar hur många gånger användaren klickar.

Antalet visas direkt på sidan.

Värdet sparas även i `localStorage`, vilket innebär att räknaren kommer ihåg värdet efter F5.

---

## 💬 Slumpat lagcitat

En knapp väljer slumpmässigt ett citat från en JavaScript-array.

Exempel på citat:

> Same goal. Different skills. Greater results.

> Ett lag. Fyra perspektiv.

> Kod, kreativitet och samarbete.

Varje klick kan visa ett nytt citat utan att sidan laddas om.

---

## 🎉 Konfetti vid klick

Knappen:

```text
Fira Lag 13
```

startar en konfettieffekt.

Konfettibitarna ligger inte färdiga i HTML.

De skapas dynamiskt med JavaScript med:

```javascript
document.createElement()
```

När animationen är färdig tas elementen bort från sidan igen.

---

## 🔊 Ljud vid klick

När användaren klickar på:

```text
Fira Lag 13
```

spelas också ett kort ljud.

Ljudet skapas med JavaScript och Web Audio API.

Vi behöver därför ingen separat ljudfil.

---

## 🥚 Easter egg

Sidan innehåller ett hemligt Easter egg.

För att aktivera det:

1. Öppna hemsidan.
2. Skriv `MAHW` på tangentbordet.
3. Ett hemligt meddelande visas.
4. Konfetti startar.

Easter egget lyssnar efter tangenttryckningar med JavaScript.

---

## ⏳ Nedräkning

Sidan har en nedräkningsklocka till redovisningen.

Klockan uppdateras varje sekund och visar:

```text
HH:MM:SS
```

När tiden är slut visas istället:

```text
Redovisningen har börjat! 🚀
```

Tiden konfigureras i `script.js`.

---

## 🌐 Hämta data utifrån

Sidan hämtar information från ett öppet API på internet.

Vi använder:

```text
JokeAPI
```

API:

```text
https://v2.jokeapi.dev/joke/Programming
```

Sidan hämtar ett slumpmässigt programmeringsskämt med JavaScript `fetch()`.

Användaren kan också trycka på:

```text
Hämta nytt
```

för att göra ett nytt API-anrop.

Om API-anropet misslyckas visas ett felmeddelande istället för att sidan kraschar.

---

## 🖼 Grid-galleri

Sidan innehåller ett galleri byggt med CSS Grid.

Vi använder bland annat:

```css
grid-template-columns:
    repeat(auto-fit, minmax(220px, 1fr));
```

Det gör att antalet kolumner automatiskt ändras beroende på hur bred skärmen är.

---

## 🎞 Bildkarusell

Sidan har en bildkarusell.

Användaren kan bläddra mellan bilder med:

```text
←
→
```

Bilderna ligger i en JavaScript-array.

När användaren går framåt från sista bilden kommer karusellen tillbaka till den första.

När användaren går bakåt från första bilden kommer den till den sista.

Både bild, `alt`-text och bildtext uppdateras med JavaScript.

---

## ⌨️ Skrivmaskinseffekt

Texten:

```text
Same goal. Different skills. Greater results.
```

skrivs ut automatiskt tecken för tecken när sidan laddas.

Effekten skapas med JavaScript och `setTimeout()`.

---

## ✨ Animerad entré

När sidan öppnas animeras flera delar av hero-sektionen.

Bland annat:

- rubriken
- underrubriken
- brödtexten
- knapparna

Animationerna är gjorda med CSS `@keyframes`.

Sidan respekterar också:

```css
prefers-reduced-motion
```

för användare som har valt att minska animationer i sitt operativsystem.

---

# 📬 Formulär med validering

Sidan innehåller ett kontaktformulär med:

- namn
- e-post
- meddelande

JavaScript kontrollerar formuläret innan det godkänns.

Exempel:

- namn måste innehålla minst två tecken
- e-post måste ha ett giltigt format
- meddelandet måste innehålla minst tio tecken

Om något är fel visas ett tydligt felmeddelande bredvid fältet.

När formuläret är korrekt visas ett bekräftelsemeddelande.

Formuläret använder:

```javascript
event.preventDefault();
```

vilket betyder att sidan inte laddas om när formuläret skickas.

Formuläret är en demonstration och skickar inte information till någon server.

---

# 🔄 Ingen automatisk omladdning från JavaScript

Vår JavaScript-kod använder inte:

```javascript
location.reload();
```

och innehåller ingen funktion som avsiktligt laddar om hela sidan.

Interaktiviteten sker direkt i DOM utan omladdning.

Om sidan ändå laddas om automatiskt under utveckling kan det bero på Live Server, Five Server eller Live Share som upptäcker filändringar.

---

# 🗂 Projektstruktur

```text
chashack-starter/
│
├── img/
│   ├── logo.png
│   └── lagbild.jpg
│
├── Hlib/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── README.md
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

# 🚀 Köra sidan lokalt

Klona repot:

```bash
git clone https://github.com/majakarlsson68gmailcom/chashack-starter.git
```

Gå till projektet:

```bash
cd chashack-starter
```

Öppna projektet i VS Code.

Starta sedan Live Server eller Five Server.

Hlib-versionen finns på:

```text
/Hlib/index.html
```

---

# 🔀 Git och GitHub

Vi använder Git och GitHub för versionshantering och samarbete.

Vanliga kommandon:

```bash
git status
git add .
git commit -m "Beskriv ändringen"
git push
git pull
```

---

## Pull request med review

För side questen **Pull request med review** ska ändringen göras på en separat branch.

Exempel:

```text
feature/hlib
        ↓
Pull Request
        ↓
Review av en annan lagmedlem
        ↓
Approve
        ↓
Merge till main
```

Side questen ska endast markeras som klar när det finns en mergad Pull Request på GitHub med en review från en annan person i laget.

---

# ✅ Sammanfattning

Hlib-versionen innehåller bland annat:

- responsiv layout
- MAHW-logotyp och favicon
- egen färgpalett
- Google Fonts
- hover-effekter
- ljust och mörkt tema
- localStorage
- medlemskort skapade från JavaScript-array
- sök/filter för lagmedlemmar
- lagbild
- grid-galleri
- bildkarusell
- klickräknare
- slumpade citat
- konfetti
- ljud vid klick
- Easter egg
- nedräkning
- externt API
- formulärvalidering
- skrivmaskinseffekt
- entréanimationer
- alt-texter
- tangentbordsnavigation
- tydlig fokusmarkering
- förbättrad kontrast

Projektet är byggt för ChasHack 2026 av **Lag 13 – MAHW**.

**Same goal. Different skills. Greater results.**