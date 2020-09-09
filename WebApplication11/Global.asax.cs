using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using WebApplication11.EF.mySysClass;

namespace WebApplication11
{
    public class MvcApplication : System.Web.HttpApplication
    {
        //这里创建一个自己的
        public static List<sysLoginInCls> l_sysLoginInCls = new List<sysLoginInCls>();
        public static List<sysSearchSql> l_sysSearchSql = new List<sysSearchSql>();//记录查询时候的
        public static void setLoginInCls(sysLoginInCls slc) {

            int iIndex = -1;
            for (var i = 0; i < l_sysLoginInCls.Count; i++)
            {
                if (l_sysLoginInCls[i].loginInIp == slc.loginInIp)
                {
                    iIndex = i;
                    break;
                }
            }
            if (iIndex >= 0)
            {
                l_sysLoginInCls.RemoveAt(iIndex);
            }
            l_sysLoginInCls.Add(slc);
        }

        public static void setsysSearchSql(sysSearchSql slc)
        {

            int iIndex = -1;
            for (var i = 0; i < l_sysSearchSql.Count; i++)
            {
                if (l_sysSearchSql[i]!=null&&l_sysSearchSql[i].loginInIp == slc.loginInIp 
                    && l_sysSearchSql[i].gridkey==slc.gridkey)
                {
                    iIndex = i;
                    break;
                }
            }
            if (iIndex >= 0)
            {
                l_sysSearchSql.RemoveAt(iIndex);
            }
            l_sysSearchSql.Add(slc);
        }


        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            GlobalConfiguration.Configure(WebApiConfig.Register);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
            //这里

        }
    }
}
