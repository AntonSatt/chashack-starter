namespace WebApplication1.Data_Containers
{
    public class ReadMe
    {
        public async Task<string> GetReadMe(string readmepath)
        {
            string readmetxt;

            if (System.IO.File.Exists(readmepath))
                readmetxt = await System.IO.File.ReadAllTextAsync(readmepath);
            else
                readmetxt = "";

            return readmetxt;
        }
    }
}
