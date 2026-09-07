# .NET (3 uppgifter, 50p)

Ni har inte läst .NET än. Det är meningen. Uppgifterna är gjorda för att köras
utan att man kan något sedan innan.

| Uppgift | Poäng | Nivå | Fil |
| --- | --- | --- | --- |
| 1. Hej från .NET | 10p | Enkel | `uppgift-1-hej-fran-dotnet.cs` |
| 2. Gissa talet | 15p | Medel | `uppgift-2-gissa-talet.cs` |
| 3. Topplistan | 25p | Svår | `uppgift-3-topplistan.cs` |

Ta dem i ordning. Uppgift 3 är en av bankens två Svåra uppgifter - den andra
ligger i `javascript/`. Räkna med att den tar tid, och fråga hellre en
handledare än att fastna en timme.

`lag.txt` hör till uppgift 3. Rör den inte förrän uppgiften säger till.

## Så kör ni koden

Ni behöver **inget Visual Studio** och **inget projekt**. En enda fil räcker.

1. Öppna en terminal.
2. Ställ er i den här mappen:
   ```bash
   cd uppgifter/dotnet
   ```
3. Kör filen:
   ```bash
   dotnet run uppgift-1-hej-fran-dotnet.cs
   ```

Första gången tar det en stund. Sen går det snabbt.

Uppgift 2 är ett spel som väntar på att ni skriver något. Skriv i terminalen
och tryck Enter. Vill ni avbryta ett program som kör: tryck **Ctrl + C**.

## Om `dotnet` inte funkar

Kolla först vilken version datorn har:

```bash
dotnet --version
```

- **Får ni ett svar som börjar på 10** – allt är som det ska.
- **Får ni "command not found"** eller en siffra lägre än 10 – hoppa till
  reservvägen nedan i stället för att installera något mitt under dagen.

## Reservväg: kör i webbläsaren

Gå till **dotnetfiddle.net**, klistra in koden från filen och tryck Run.
Inget behöver installeras. Spara fiddlen och lämna länken som bevis
tillsammans med filen i ert repo.

Uppgift 3 läser från `lag.txt` i sista steget, och det går inte i webbläsaren.
Hoppa över den TODO:n om ni kör på fiddle - de andra tre räknas ändå.

## Fastnat?

- Kolla att ni står i rätt mapp. `ls` (eller `dir`) ska visa `.cs`-filerna.
- Stavfel i filnamnet är det vanligaste felet. Kopiera namnet rakt av.
- Ett rött felmeddelande betyder oftast att ett `"` eller `;` saknas på raden
  som nämns i felet. Läs radnumret i felet och titta där.
- `Console.WriteLine` någonstans mitt i koden är det snabbaste sättet att se
  vad som faktiskt ligger i en variabel.
