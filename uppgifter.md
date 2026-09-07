# Uppgifter: arbetslista

Arbetsfil för uppgiftsteamet (Anton, Victoria, Theo). Här lägger vi till,
ändrar och stryker uppgifter tills listan är spikad. Målet är klart senast
avstämningen måndag 7 september, då byggs listan in i `uppgiftssida.html`.

Så redigerar du: öppna filen på GitHub, pennan uppe till höger, ändra,
committa. En rad är en uppgift: bocka i rutan när den är spikad, radera
raden om den stryks. Mall för nya rader ligger längst ner.

Läge just nu: 21 uppgifter, 250p totalt.

Uppgiftsfilerna som deltagarna jobbar i ligger i `uppgifter/`, en mapp per
kategori och en fil per uppgift. Ändras en rad här ska motsvarande fil ändras
också.

## Frontend (3 uppgifter, 25p)

- [ ] **Rätta buggen** (10p, Lätt): I skelettet ligger en bugg: knappen syns inte. Hitta orsaken och fixa den. Bevis: commit-länk i lagets repo där buggen är fixad.
- [ ] **Knappen och rubriken** (5p, Lätt): Byt knappens text till lagets namn och ändra teckenstorleken på rubriken. Bevis: commit plus en skärmdump i repot som visar ändringen.
- [ ] **Egen favicon** (10p, Lätt): Skapa en favicon för laget och koppla den till sidan. Bevis: filen i repot och en förklaring i README vad en favicon är.

## Git (3 uppgifter, 25p)

- [ ] **Publikt repo** (10p, Lätt): Forka ChasHack-startrepot och lägg till lagkamraterna som collaborators. Bevis: repo-URL som öppnas utan inloggning.
- [ ] **Committa ihop** (10p, Lätt): Alla i laget gör minst en commit och push var. Bevis: historiken i repot visar commits från flera namn.
- [ ] **Förklara git add** (5p, Lätt): Skriv i README, i egna ord, vad git add gör. Bevis: README-filen i lagets repo.

## UX (3 uppgifter, 35p)

- [ ] **Grupplogga** (15p, Medel): Designa en logga för laget och lägg den på webbplatsen. Bevis: loggfilen i repot och loggan syns på sidan (skärmdump).
- [ ] **Alt-text överallt** (10p, Lätt): Lägg till alt-text på alla bilder och förklara i README varför alt-text behövs. Bevis: kodraderna i repot plus förklaringen i README.
- [ ] **Wireframe** (10p, Lätt): Rita en wireframe för lagets sida. Papper räcker, fota den. Bevis: bilden i repot.

## JavaScript (3 uppgifter, 45p)

- [ ] **Klickräknare** (15p, Medel): Bygg en knapp som räknar antal klick och visar siffran på sidan. Bevis: koden i repot plus skärmdump eller GIF som visar att den fungerar.
- [ ] **Programmeringsskämt** (5p, Lätt): Lägg in ett programmeringsskämt i sidfoten. Bevis: skämtet syns på sidan (skärmdump i repot).
- [x] **Poängtavlan** (25p, Svår): Bygg klart poängtavlan i `uppgifter/javascript/uppgift-3-poangtavlan.html`: räkna ihop poängen för ikryssade uppgifter, uppdatera summan vid klick och spara i localStorage så den överlever en omladdning. Bevis: koden i repot plus skärmdump där några uppgifter är ikryssade och summan stämmer.

## DevOps (2 uppgifter, 30p)

- [ ] **Deploya sidan** (20p, Medel): Publicera lagets sida med GitHub Pages. Bevis: fungerande URL som öppnas utan inloggning.
- [ ] **Grupptillgång** (10p, Lätt): Bjud in alla i laget som collaborators på repot. Bevis: skärmdump på inställningen i repot.

## .NET (3 uppgifter, 50p)

- [x] **Hej från .NET** (10p, Enkel): Kör `uppgifter/dotnet/uppgift-1-hej-fran-dotnet.cs` och ändra den så att den skriver ut lagnamn och allas namn. Bevis: den ändrade filen i repot plus skärmdump på terminalutskriften.
- [x] **Gissa talet** (15p, Medel): Gör spelet i `uppgifter/dotnet/uppgift-2-gissa-talet.cs` spelbart - datorn ska avslöja om gissningen var för hög eller för låg, och räkna gissningarna. Bevis: den ändrade filen i repot plus skärmdump på en vunnen omgång.
- [x] **Topplistan** (25p, Svår): Bygg om `uppgifter/dotnet/uppgift-3-topplistan.cs` till en riktig topplista: sortera lagen, ge topp tre medaljer, räkna ut total och snitt, och läs lagen från `lag.txt`. Bevis: den ändrade filen i repot plus skärmdump på den färdiga topplistan.

## Socialt (4 uppgifter, 40p)

- [ ] **Lagbild** (10p, Lätt): Ta en riktig lagbild på plats och lägg den på sidan. Bevis: bilden i lagets repo.
- [ ] **Intervjua en kompis** (10p, Lätt): Intervjua en lagkamrat och skriv en kort profiltext om personen. Bevis: profiltexten syns på sidan.
- [ ] **LinkedIn ihop** (15p, Medel): Lägg till varandra på LinkedIn och skriv in Chas Academy som utbildning. Bevis: publika profil-URL:er, här i inlämningen.
- [ ] **Lagchatt** (5p, Lätt): Skapa en gruppchatt med hela laget (Discord, Slack eller WhatsApp). Bevis: skärmdump på inbjudan med alla medlemmar.

## Öppna punkter

- .NET-spåret: klart. Alla tre uppgifterna ligger i `uppgifter/dotnet/` och är testade med .NET 10 (file-based apps, ingen csproj). Kvar: kontrollera att skoldatorerna har `dotnet` 10 eller senare före den 11:e.
- Discord-listorna: ca 24 rader uppgifter väntar hos Anton, ska in här och sen in i rutnätet.
- Nya uppgifter läggs fritt: en rad per uppgift, gärna med bevis så rättarlaget vet vad de ska titta efter.

## Mall för ny uppgift

- [ ] **Titel** (10p, Lätt): Vad laget ska göra. Bevis: vad rättarlaget tittar efter.
