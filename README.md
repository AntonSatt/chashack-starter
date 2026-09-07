# ChasHack

Välkomna! Det här är startpunkten för ert lag.

I den här mappen finns **21 uppgifter, 250 poäng totalt**. Ni tar så många ni
hinner, i vilken ordning ni vill. Ingen förväntas hinna allt.

Har ni aldrig använt GitHub förut? Det är helt okej. Följ stegen nedan i
ordning, så är ni igång på tio minuter.

---

## Steg 1: Alla skaffar ett GitHub-konto

Alla i laget behöver ett eget konto. Gå till
[github.com/signup](https://github.com/signup) och registrera er.

Skriv upp era användarnamn på en lapp - ni behöver dem i steg 3.

## Steg 2: En person i laget forkar repot

**Fork** betyder "gör en egen kopia". Ni ska jobba i er egen kopia, inte i
den här.

1. Se till att du är inloggad på GitHub.
2. Tryck på knappen **Fork** uppe till höger på den här sidan.
3. Tryck **Create fork**.

Nu ligger en kopia under ditt eget konto. Det är den ni jobbar i resten av
dagen. Adressen ser ut ungefär så här:
`https://github.com/ditt-anvandarnamn/chashack-starter`

Kontrollera att det står **Public** och inte **Private** bredvid namnet.
Står det Private: gå till **Settings**, skrolla längst ner och byt.

## Steg 3: Bjud in resten av laget

I er nya kopia:

1. Tryck på **Settings** högst upp.
2. Välj **Collaborators** i menyn till vänster.
3. Tryck **Add people** och skriv in lagkamraternas användarnamn, en i taget.

De får ett mejl med en inbjudan som de måste acceptera. **Gör det direkt** -
annars kan de inte spara några ändringar.

> Det här är faktiskt två uppgifter redan: Git → uppgift 1 och
> DevOps → uppgift 2. Ni har alltså 20 poäng efter tio minuter.

## Steg 4: Välj hur ni vill jobba

Det finns två sätt (plus ett tredje längst ner för er som vill).
**Ni kan blanda fritt** - välj det som passar uppgiften.

### Sätt A: Direkt i webbläsaren (enklast, inget att installera)

Bra för alla `.md`-filer, och för att fixa småsaker i kod.

1. Öppna filen ni vill ändra på github.com.
2. Tryck på **pennan** uppe till höger.
3. Skriv era ändringar.
4. Skrolla ner, skriv en kort rad om vad ni gjorde, tryck **Commit changes**.

Klart. Ändringen är sparad i repot direkt.

### Sätt B: På datorn med GitHub Desktop (bäst för HTML-uppgifterna)

Behövs när ni vill **öppna** filerna i en webbläsare och se resultatet.

1. Ladda ner [GitHub Desktop](https://desktop.github.com/) och logga in.
2. **File → Clone repository**, välj ert repo, tryck **Clone**.
   ("Clone" = hämta ner mappen till datorn.)
3. Ändra filerna på datorn. Dubbelklicka på en `.html`-fil för att öppna den
   i webbläsaren och se hur den ser ut.
4. Tillbaka i GitHub Desktop: skriv en rad om vad ni gjorde längst ner till
   vänster, tryck **Commit to main**, och sen **Push origin** uppe till höger.

**Push är viktigt.** Innan ni pushat finns ändringen bara på er dator, och
rättarlaget kan inte se den.

<details>
<summary>Sätt C: I terminalen, för er som hellre vill det</summary>

```bash
git clone https://github.com/ert-anvandarnamn/chashack-starter.git
cd chashack-starter
```

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

</details>

## Steg 5: Kör igång med uppgifterna

Öppna mappen **[`uppgifter/`](uppgifter/)**. Där finns en mapp per kategori
och en fil per uppgift.

| Mapp | Kategori | Uppgifter | Poäng |
| --- | --- | --- | --- |
| [`frontend/`](uppgifter/frontend/) | Frontend | 3 | 25p |
| [`git/`](uppgifter/git/) | Git | 3 | 25p |
| [`ux/`](uppgifter/ux/) | UX | 3 | 35p |
| [`javascript/`](uppgifter/javascript/) | JavaScript | 3 | 45p |
| [`dotnet/`](uppgifter/dotnet/) | .NET | 3 | 50p |
| [`devops/`](uppgifter/devops/) | DevOps | 2 | 30p |
| [`socialt/`](uppgifter/socialt/) | Socialt | 4 | 40p |

**Instruktionerna står högst upp i varje uppgiftsfil.** Ni ändrar i samma fil
som ni läser i.

Filerna är fristående - ingen uppgift går sönder för att någon annan jobbar i
en annan fil. **Dela upp er och kör flera samtidigt**, det är så ni hinner
mest.

Läs [`uppgifter/README.md`](uppgifter/README.md) för fler detaljer.

---

## Lagets egen sida

Filerna i den här mappen är lagets webbplats:

| Fil | Vad den gör |
| --- | --- |
| `index.html` | Innehållet: rubriker, text, knappar |
| `style.css` | Utseendet: färger, typsnitt, placering |
| `script.js` | Det som händer när man klickar |

De är avsiktligt nästan tomma. Kommentarerna i filerna är tips på vad ni kan
lägga till. Bygg vidare fritt - flera uppgifter (loggan, lagbilden,
profiltexterna, deployen) handlar om den här sidan.

Öppna `index.html` genom att dubbelklicka på den för att se hur den ser ut.

## Inlämning

**En inlämning per lag:** länken till ert repo, på ChasHack-sidan.

Se till att repot är **Public** innan ni lämnar in. Testa genom att klistra in
länken i ett privat/inkognito-fönster - syns sidan utan inloggning är ni bra.

Varje uppgift säger vad rättarlaget tittar efter. Det är oftast **koden i ert
repo** plus **en skärmdump** som visar att det fungerar. I `.md`-filerna finns
en ruta som heter **Fyll i här** - skriv era länkar och namn där.

## Om ni kör fast

**Fråga.** Det finns handledare på plats hela dagen, och det räknas inte emot
er att fråga. Fastnar ni mer än en kvart på samma sak: hoppa till nästa
uppgift och kom tillbaka senare.

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
| **Terminal** | Det svarta fönstret där man skriver kommandon |

---

*`uppgifter.md` i den här mappen är arrangörernas arbetslista. Den behöver ni
inte bry er om.*
