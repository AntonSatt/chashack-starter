using Microsoft.AspNetCore.Mvc;
using WebApplication1.Data_Containers;

namespace WebApplication1.Controllers
{
    [Route("api/readme")]
    public class ReadMeController : ControllerBase
    {
        private IWebHostEnvironment env;
        private readonly ReadMe readMe;

        public ReadMeController(ReadMe readme, IWebHostEnvironment environment) { readMe = readme; env = environment; }


        [HttpGet]
        public ActionResult<string> GetReadmeFile()
        {
            string p = Path.GetFullPath(
                Path.Combine(
                    env.ContentRootPath,
                    "..",
                    "..",
                    "README.md"
                    )
                );

            string rm = readMe.GetReadMe(p).Result;

            return rm;
        }
    }
}
