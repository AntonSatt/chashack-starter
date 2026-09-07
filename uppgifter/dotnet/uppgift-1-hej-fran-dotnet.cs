// ===================================================================
//  Uppgift 1: Hej från .NET   (10p, Enkel)
// ===================================================================
//
//  Så här kör du filen. Öppna en terminal, ställ dig i den HÄR mappen
//  (uppgifter/dotnet) och skriv:
//
//      dotnet run uppgift-1-hej-fran-dotnet.cs
//
//  Filen fungerar redan som den är. Kör den FÖRST och se att det dyker
//  upp text i terminalen. Ändra sen.
//
//  Allt som står efter // är en kommentar. Datorn hoppar över de raderna,
//  de är bara till för dig som läser.
// ===================================================================


// En "variabel" är en låda med ett namn. Här ligger texten "Lagnamnet"
// i en låda som heter lagnamn.
string lagnamn = "Lagnamnet";

// Här ligger flera texter i samma låda, en lista med namn.
string[] medlemmar = { "Förnamn Efternamn", "Förnamn Efternamn", "Förnamn Efternamn" };


// Console.WriteLine skriver ut en rad i terminalen.
Console.WriteLine("Hej från .NET!");
Console.WriteLine("Vi är lag " + lagnamn);
Console.WriteLine();

// En foreach-loop går igenom listan, ett namn i taget.
foreach (string medlem in medlemmar)
{
    Console.WriteLine("- " + medlem);
}


// ===================================================================
//  ATT GÖRA
// ===================================================================
//
//  TODO 1: Byt ut "Lagnamnet" mot ert riktiga lagnamn.
//
//  TODO 2: Byt ut namnen i listan mot allas riktiga namn. Lägg till
//          eller ta bort rader så att det blir exakt lika många namn
//          som ni är i laget. Varje namn står inom "citattecken" och
//          skiljs åt med kommatecken.
//
//  TODO 3: Kör filen igen 
//
//  BEVIS: den ändrade filen i ert repo 
// ===================================================================
