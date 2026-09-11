using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Mvc;
using WebApplication1.Data_Containers;

namespace WebApplication1.Controllers
{
    [Microsoft.AspNetCore.Mvc.Route("api/readme")]
    public class ReadMeController : ControllerBase
    {
        [HttpGet]
        public ActionResult<string> GetReadmeFile()
        {
            if (string.IsNullOrEmpty(ReadMe.ReadMeText)) return NotFound();
            else return ReadMe.ReadMeText;
        }
    }
}
