using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApplication11.Controllers
{
    public class loginController : Controller
    {
        // GET: login
        public ActionResult Index()
        {
            ViewData["title"] = "登录界面";

           

            return View();
        }
    }
}