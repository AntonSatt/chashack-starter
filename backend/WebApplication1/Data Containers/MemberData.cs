using WebApplication1.Members;

namespace WebApplication1.Data_Containers
{
    public static class MemberData
    {
        private static List<Member> members = new();

        public static void AddMember(Member member) => members.Add(member);
        public static List<Member> GetAllMembers() => members;
        public static Member GetMemberByName(string name) => members.FirstOrDefault(x=>x.name == name);
        public static Member GetMemberByRole(string role)
        {
            var roleToLwr = role.ToLower();
            return members.FirstOrDefault(x => x.role == roleToLwr);
        }
    }
}
