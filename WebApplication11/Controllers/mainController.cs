using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebApplication11.App_Start;
using WebApplication11.EF.mySysClass;

namespace WebApplication11.Controllers
{
    public class mainController : checkAuthController
    {

        /// <summary>
        /// 日本监控web
        /// </summary>
        /// <returns></returns>
        public ActionResult Index()
        {
            string userId = "0";
            string userName = "";
            string userRoleName = "管理员";
            sysLoginInCls sl = public_method.getLoginInObject();
            if (sl != null) {
                userId = sl.loginUserId.ToString();
                userName = sl.userName;
            }
            ViewData["userId"] = userId;
            ViewData["userName"] = userName;
            ViewData["userRoleName"] = userRoleName;
            ViewData["roleId"] = sl.roleId;
            ViewData["dataRoleId"] = sl.dataRoleId;
            return View();
        }

        public ActionResult showIndex1()
        {

            return View();
        }

        public ActionResult welcome()
        {
            return View();
        }
        //echartsPage1
        public ActionResult echartsPage1()
        {
            return View();
        }
    }
}