using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApplication11.Controllers
{
    public class jiagouController : Controller
    {
        // GET: jiagou
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult phonetest()
        {
            return View();
        }
        public ActionResult public_jt()
        {
            ViewData["title"] = "我是集团页面";
            return View();
        }
        public ActionResult public_jiudian()
        {
            ViewData["title"] = "我是酒店页面";
            return View();
        }

        public ActionResult public_lh()
        {
            ViewData["title"] = "我是楼页面";
            return View();
        }
        public ActionResult public_house()
        {
            ViewData["title"] = "我是房间";
            return View();
        }

        public ActionResult addEquip()
        {
            ViewData["title"] = "房间添加设备信息";
            string houseId = "0";
            if (Request.QueryString["houseId"] != null) {
                houseId = Request.QueryString["houseId"].ToString();
            }
            ViewData["houseId"] = houseId;
            return View();
        }
    }
}