using WebApplication1.Data_Containers;

namespace WebApplication1.Click_Game.Factories
{
    public class ClickCompetitorFactory
    {
        public static ClickCompetitor CreateCompetitor(string name, int clicks, string timeStamp)
        {
            var competitor = new ClickCompetitor(name, clicks, timeStamp);
            return competitor;
        }
    }
}
