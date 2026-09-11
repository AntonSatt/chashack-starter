using Microsoft.AspNetCore.Mvc;
using WebApplication1.Click_Game.Data_Containers;
using WebApplication1.Click_Game.Factories;
using WebApplication1.Data_Containers;

namespace WebApplication1.Click_Game.Controllers
{
    [ApiController]
    [Route("/api/clickgame")]
    public class ClickCompetitionController : ControllerBase
    {

        private readonly Competitors competitors;

        public ClickCompetitionController(Competitors competitors)
        {
            this.competitors = competitors;
        }


        [HttpPost("registerclicks")]
        public ActionResult RegisterNewClickData([FromBody] ClickData clickData)
        {
            //if(competitors.TryGetCompetitor(clickData.name, out ClickCompetitor comp))
            //{
            //    if(comp.Clicks < clickData.clicks)
            //    {
            //        comp.UpdateClicks(clickData.clicks);
            //        comp.UpdateTimestamp(clickData.timeStamp);
            //        Console.WriteLine($"Updating competitor {comp.Name}");
            //    }
            //}
            //else
            //{
            //    var competitor = ClickCompetitorFactory.CreateCompetitor(clickData.name, clickData.clicks, clickData.timeStamp);
            //    competitors.AddNewCompetitor(competitor);
            //    Console.WriteLine($"Adding new competitor {competitor.Name}");
            //}

            var competitor = ClickCompetitorFactory.CreateCompetitor(clickData.name, clickData.clicks, clickData.timeStamp);
            competitors.AddNewCompetitor(competitor);

            return Ok();
        }

        [HttpGet("{val}")]
        public ActionResult<List<ClickCompetitor>> GetCurrentHighScore(int val)
        {
            var highscore = competitors.GetOrderedHighscore(val);
            if (highscore == null || highscore.Count == 0) return NotFound();
            else return highscore;
        }
    }
}
