using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApplication11.Controllers
{
    public class organizationController : Controller
    {
        public ActionResult Index()
        {
            ViewData["title"] = "组织架构";

            return View();
        }
    }
}