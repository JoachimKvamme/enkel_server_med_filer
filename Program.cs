internal class Program
{
    private static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);
        var app = builder.Build();

        app.UseDefaultFiles();

        app.UseStaticFiles();


        app.MapGet("/", () => "Hello World!");

        app.MapGet("/health", () => "server ok");

        app.Run();
    }
}