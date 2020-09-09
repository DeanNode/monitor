using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;
using WebApplication11.App_Start;
using WebApplication11.EF.mySysClass;

namespace WebApplication11.Controllers
{
    public class checkAuthController : Controller
    {
        protected override void Initialize(RequestContext requestContext)
        {
            base.Initialize(requestContext);

            sysLoginInCls si = public_method.getLoginInObject();
            if (si == null)
            {
                requestContext.HttpContext.Response.Redirect("/login/index");
            }
            else
            {
                //正常用户
            }
        }
        /// <summary>
        /// 统一错误日志编写
        /// </summary>
        /// <param name="filterContext"></param>
        protected override void OnException(ExceptionContext filterContext)
        {
            // 错误日志编写    
            base.OnException(filterContext);
        }
    }
}