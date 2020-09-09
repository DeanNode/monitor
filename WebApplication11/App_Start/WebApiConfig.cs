using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Formatting;
using System.Web.Http;
using System.Web.Http.Cors;

namespace WebApplication11
{
    public static class WebApiConfig
    {
        
        public static void Register(HttpConfiguration config)
        {
            config.EnableCors(new EnableCorsAttribute("*", "*", "*"));
            // Web API 配置和服务
            //config.Formatters.Clear();
            //config.Formatters.Add(new JsonMediaTypeFormatter());
            // Web API 路由
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{action}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );

            returnDatetimeFormart();
        }

        private static void returnDatetimeFormart() {
            var jsonSerlise = GlobalConfiguration.Configuration.Formatters.JsonFormatter.SerializerSettings;
            jsonSerlise.DateTimeZoneHandling = Newtonsoft.Json.DateTimeZoneHandling.Local;
            jsonSerlise.DateFormatString = "yyyy-MM-dd HH:mm:ss";
        }
    }
}
