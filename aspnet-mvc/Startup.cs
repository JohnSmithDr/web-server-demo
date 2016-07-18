using System;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;

namespace WebServerDemo
{
  public class Startup
  {
  
    public void ConfigureService(IServiceCollection services) 
    {

    }

    public void Configure(IApplicationBuilder app)
    {
      app.Run(context =>
      {
          return context.Response.WriteAsync("Hello World");
      });
    }
  }
}