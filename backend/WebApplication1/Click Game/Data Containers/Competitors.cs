using System.Reflection.Metadata.Ecma335;
using WebApplication1.Data_Containers;

namespace WebApplication1.Click_Game.Data_Containers
{
    public class Competitors
    {
        private List<ClickCompetitor> competitors = [];

        public void AddNewCompetitor(ClickCompetitor competitor)
        {
            competitors.Add(competitor);
            Console.WriteLine($"size {competitors.Count}");
        }
        public bool TryGetCompetitor(string name, out ClickCompetitor comp)
        {
            comp = competitors.FirstOrDefault(x => x.Name == name);
            bool success = comp == null ? false : true;
            return success;
        }

        public List<ClickCompetitor> GetOrderedHighscore(int len) => competitors.OrderByDescending(x => x.Clicks).Take(len).ToList();
    }
}
