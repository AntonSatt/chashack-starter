// ===================================================================
//  Uppgift 3: Topplistan   (25p, Svår)
// ===================================================================
//
//  Kör från den HÄR mappen (uppgifter/dotnet):
//
//      dotnet run uppgift-3-topplistan.cs
//
//  Den här är svårare än de andra två. Gör dem först.
//
//  Programmet skriver ut en topplista över lagen på ChasHack - fast
//  den är inte sorterad, så vinnaren hamnar var som helst. Er uppgift
//  är att bygga en topplista värd namnet.
//
//  Ta en TODO i taget och kör programmet mellan varje. Fastnar ni på
//  en: hoppa till nästa, de går att göra i vilken ordning som helst.
// ===================================================================


// Lag är en egen sorts låda som vi hittat på själva. Den håller två saker:
// ett namn och en poäng. Titta längst ner i filen så ser ni var den skapas.
List<Lag> lag = new List<Lag>
{
    new Lag("Nullpekarna", 120),
    new Lag("Team Semikolon", 85),
    new Lag("Kaffe och Kod", 140),
    new Lag("Rekursiva Rävar", 95),
    new Lag("Merge Conflict", 60),
};


Console.WriteLine("===== TOPPLISTAN =====");
Console.WriteLine();

foreach (Lag l in lag)
{
    // Siffrorna efter kommat styr bredden på kolumnen.
    // -20 betyder "tjugo tecken brett, vänsterställt".
    Console.WriteLine($"{l.Namn,-20}{l.Poang,5} p");
}

Console.WriteLine();
Console.WriteLine($"{lag.Count} lag med på listan.");


// ===================================================================
//  ATT GÖRA
// ===================================================================
//
//  TODO 1: Sortera listan så att laget med flest poäng hamnar överst.
//
//          OrderByDescending sorterar fallande. Raden nedan betyder
//          "sortera lagen efter poäng, störst först":
//
//              List<Lag> sorterad = lag.OrderByDescending(l => l.Poang).ToList();
//
//          Lägg in raden ovanför utskriften och loopa över "sorterad"
//          i stället för "lag".
//
//
//  TODO 2: Ge de tre översta en medalj.
//
//          Det går inte med foreach - den vet inte vilken placering man
//          är på. Byt till en for-loop, som räknar upp i:
//
//              for (int i = 0; i < sorterad.Count; i++)
//              {
//                  Lag l = sorterad[i];
//                  Console.WriteLine($"{l.Namn,-20}{l.Poang,5} p");
//              }
//
//          Första varvet är i = 0, andra varvet i = 1, och så vidare.
//          Använd i för att skriva ut "1:a", "2:a" och "3:e" framför de
//          tre översta - och ingenting framför resten.
//
//
//  TODO 3: Skriv ut lagens totalpoäng och snittpoäng längst ner.
//
//              int total = lag.Sum(l => l.Poang);
//              double snitt = lag.Average(l => l.Poang);
//
//          Snittet blir ett långt decimaltal. Så här visar ni bara en
//          decimal:
//
//              Console.WriteLine($"Snitt: {snitt:F1} p");
//
//
//  TODO 4 (den svåraste): läs lagen från filen i stället.
//
//          Bredvid den här filen ligger "lag.txt". Varje rad ser ut så här:
//
//              Nullpekarna;120
//
//          Ersätt listan högst upp med lagen från filen:
//
//              List<Lag> lag = new List<Lag>();
//
//              foreach (string rad in File.ReadAllLines("lag.txt"))
//              {
//                  string[] delar = rad.Split(';');
//                  lag.Add(new Lag(delar[0], int.Parse(delar[1])));
//              }
//
//          Split(';') klyver raden vid semikolonet, så delar[0] blir namnet
//          och delar[1] blir poängen som text. int.Parse gör om texten
//          till ett tal.
//
//          Testa sen att lägga till ert eget lag i lag.txt och kör igen.
//          Programmet ska plocka upp det utan att ni rör koden.
//
//
//  BEVIS: den ändrade filen i ert repo + skärmdump på den färdiga
//         topplistan, med medaljer och totalsumma.
// ===================================================================


// -------------------------------------------------------------------
//  Här skapas lådan Lag. Ett "record" är ett eget litet fack med
//  namngivna delar - här Namn och Poang.
//
//  Den står längst ner för att C# kräver det: först all kod som ska
//  köras, sen de egna typerna. Flyttar ni upp den får ni ett felmeddelande.
// -------------------------------------------------------------------
record Lag(string Namn, int Poang);
