using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Mvc;
using WebApplication1.Data_Containers;
using WebApplication1.Factories;
using WebApplication1.Members;

namespace WebApplication1.Controllers
{
    [ApiController]
    [Microsoft.AspNetCore.Mvc.Route("api/members")]
    public class MemberController : ControllerBase
    {
        public MemberController() {AddAllMembers();}

        [HttpGet("{name}")]
        public ActionResult<Member> GetMember(string name)
        {
            var member = MemberData.GetMemberByName(name);
            if (member == null) return NotFound();
            else return member;
        }

        [HttpGet("all")]
        public ActionResult<List<Member>> GetAllMembers()
        {
            var members = MemberData.GetAllMembers();
            if (members == null || members.Count == 0) return NotFound();
            else return members;
        }

        private void AddAllMembers()
        {
            var member_1 = MemberFactory.CreateMember("TestName_1", "DevOps");
            var member_2 = MemberFactory.CreateMember("TestName_2", "UX");
            var member_3 = MemberFactory.CreateMember("TestName_3", "FrontEnd");

            MemberData.AddMember(member_1);
            MemberData.AddMember(member_2);
            MemberData.AddMember(member_3);
        }
    }


}
