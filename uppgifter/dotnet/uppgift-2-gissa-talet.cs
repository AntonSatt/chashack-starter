// ===================================================================
//  Uppgift 2: Gissa talet   (15p, Medel)
// ===================================================================
//
//  Kör spelet från den HÄR mappen (uppgifter/dotnet):
//
//      dotnet run uppgift-2-gissa-talet.cs
//
//  Gör uppgift 1 först om ni inte redan har gjort den.
//
//  Datorn tänker på ett tal mellan 1 och 100. Ni ska gissa vilket.
//  Spelet FUNGERAR redan - men det är urtråkigt, för datorn säger bara
//  "fel" utan att avslöja något. Er uppgift är att göra det spelbart.
//
//  Kör det som det är först. Ni kommer att märka problemet direkt.
// ===================================================================


// Random är datorns tärning. slump.Next(1, 101) ger ett tal från 1 till 100.
Random slump = new Random();
int hemligtTal = slump.Next(1, 101);

// Här räknar vi hur många gissningar det tog.
int antalGissningar = 0;

Console.WriteLine("Jag tänker på ett tal mellan 1 och 100.");
Console.WriteLine("Skriv en gissning och tryck Enter.");
Console.WriteLine();


// while (true) betyder "gör det här om och om igen".
// Loopen körs tills vi säger break.
while (true)
{
    Console.Write("Din gissning: ");
    string? svar = Console.ReadLine();

    // Om det inte finns något mer att läsa avslutar vi.
    if (svar == null)
    {
        break;
    }

    // int.TryParse försöker göra om texten till ett tal.
    // Lyckas den hamnar talet i "gissning". Annars går vi ett varv till.
    if (!int.TryParse(svar, out int gissning))
    {
        Console.WriteLine("Det där var inget tal. Försök igen.");
        continue;
    }

    antalGissningar = antalGissningar + 1;

    if (gissning == hemligtTal)
    {
        Console.WriteLine($"Rätt! Talet var {hemligtTal}.");
        break;
    }
    else
    {
        Console.WriteLine("Fel. Gissa igen.");
    }
}


// ===================================================================
//  ATT GÖRA
// ===================================================================
//
//  TODO 1: Gör spelet spelbart.
//
//          Just nu står det bara "Fel. Gissa igen." Byt ut den raden
//          så att datorn avslöjar om gissningen var för hög eller för låg.
//
//          Ni behöver ett till if inne i else-blocket. Så här ser mallen ut:
//
//              if (gissning > hemligtTal)
//              {
//                  Console.WriteLine("För högt!");
//              }
//              else
//              {
//                  Console.WriteLine("För lågt!");
//              }
//
//          Kör spelet igen. Nu går det att vinna.
//
//
//  TODO 2: Skriv ut hur många gissningar det tog.
//
//          Lådan antalGissningar räknar redan varje gissning - ingen
//          använder den bara. Skriv ut den när spelaren gissat rätt,
//          alltså inne i det översta if-blocket:
//
//              Console.WriteLine($"Det tog dig {antalGissningar} gissningar.");
//
//
//  TODO 3 (extra, om ni hinner): ge spelaren max 7 försök.
//
//          Tips: kolla antalGissningar i slutet av loopen. Har spelaren
//          gissat 7 gånger utan att träffa rätt: skriv ut vilket talet var
//          och avsluta med break.
//
//
//  BEVIS: den ändrade filen i ert repo + skärmdump på en spelomgång där
//         någon i laget gissar rätt.
// ===================================================================
