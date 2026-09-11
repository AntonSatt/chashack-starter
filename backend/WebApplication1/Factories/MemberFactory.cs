using WebApplication1.Members;

namespace WebApplication1.Factories
{
    public class MemberFactory
    {
        public static Member CreateMember(string name, string role)
        {
            var member = new Member(name, role);

            return member;
        }
    }
}
