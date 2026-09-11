namespace WebApplication1.Data_Containers
{
    public class ClickCompetitor
    {
        private string name;
        private int clicks;
        private string timestamp;

        public string Name => name;
        public int Clicks => clicks;
        public string TimeStampe => timestamp;

        public ClickCompetitor(string name, int clicks, string timestamp)
        {
            this.name = name;
            this.clicks = clicks;
            this.timestamp = timestamp;
        }

        public void UpdateClicks(int newClickAmount) => clicks = newClickAmount;
        public void UpdateTimestamp(string timestamp) => this.timestamp = timestamp;
    }
}
