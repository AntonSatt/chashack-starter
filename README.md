# ChasHack starter

Det här är start-repot. Här ligger tre tomma filer som blir lagets hemsida
under dagen:

| Fil | Vad den gör |
| --- | --- |
| `index.html` | Innehållet: rubriker, text, bilder, knappar |
| `style.css` | Utseendet: färger, typsnitt, placering |
| `script.js` | Det som händer när man klickar |

**Alla uppgifter finns på uppgiftssidan:**
[antonsatt.github.io/chashack-uppgiftssida](https://antonsatt.github.io/chashack-uppgiftssida/#start)

Det här repot innehåller inga uppgifter - bara filerna ni bygger i.

---

## Kom igång

### 1. Alla i laget skaffar ett GitHub-konto

Gå till [github.com/signup](https://github.com/signup). Skriv upp era
användarnamn, ni behöver dem i steg 3.

### 2. En person i laget forkar det här repot

**Fork** = er egen kopia. Ni jobbar i kopian, inte i det här repot.

1. Tryck på **Fork** uppe till höger på den här sidan.
2. Tryck **Create fork**.
3. Kontrollera att det står **Public** bredvid namnet. Står det Private:
   gå till **Settings**, skrolla längst ner och byt.

Er kopia hamnar på `https://github.com/ert-anvandarnamn/chashack-starter`.

### 3. Bjud in resten av laget

I er nya kopia: **Settings → Collaborators → Add people**. Skriv in
lagkamraternas användarnamn, en i taget.

De får ett mejl med en inbjudan som de måste **acceptera direkt** - annars
kan de inte spara några ändringar.

### 4. Hämta ner repot till datorn

Tryck på gröna **Code**-knappen i ert repo och kopiera URL:en. Sen i
terminalen:

```bash
git clone https://github.com/ert-anvandarnamn/chashack-starter.git
cd chashack-starter
```

Öppna mappen i VS Code (**File → Open Folder**).

Föredrar ni att slippa terminalen: ladda ner
[GitHub Desktop](https://desktop.github.com/), logga in och välj
**File → Clone repository**.

### 5. Spara och skicka upp era ändringar

Efter varje ändring:

```bash
git add .
git commit -m "beskriv vad du gjorde"
git push
```

Hämta lagkamraternas senaste ändringar innan ni börjar jobba:

```bash
git pull
```

I GitHub Desktop heter samma sak **Commit to main** och **Push origin**.

**Push är viktigt.** Innan ni pushat finns ändringen bara på er dator, och
inget annat lag kan granska den.

### 6. Kör igång

Gå till [uppgiftssidan](https://antonsatt.github.io/chashack-uppgiftssida/#start),
skriv in lagnamnet och börja på steg 1 i huvudspåret.

---

## Bra att veta

- **Dubbelklicka på `index.html`** för att öppna sidan i webbläsaren och se
  hur den ser ut.
- **Byt ut den här README-filen.** I steg 11 skriver ni en egen README med
  lagets namn, medlemmarna och länken till er publicerade sida.
- **Fastnar ni?** Fråga en handledare. Det räknas inte emot er. Fastnar ni
  mer än en kvart: hoppa till nästa steg och kom tillbaka senare.

## Ordlista

| Ord | Betyder |
| --- | --- |
| **Repo** | Mappen med er kod, på GitHub |
| **Fork** | Er egen kopia av någon annans repo |
| **Clone** | Hämta ner repot till datorn |
| **Commit** | En sparad ändring i historiken |
| **Push** | Skicka upp era commits till GitHub |
| **Pull** | Hämta ner lagkamraternas senaste ändringar |
| **Collaborator** | Någon som får spara ändringar i repot |
| **Deploya** | Lägga upp sidan så att andra kan öppna den |
