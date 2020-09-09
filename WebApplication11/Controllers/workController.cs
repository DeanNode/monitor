using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApplication11.Controllers
{
    public class workController : Controller
    {
        // GET: work
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult changeHouse()
        {
            ViewData["title"] = "改房态";
            return View();
        }

        public ActionResult closeHouse()
        {
            ViewData["title"] = "退房办理页面";
            return View();
        }

        public ActionResult controlHouse()
        {
            ViewData["title"] = "客房状态页面";
            return View();
        }

        public ActionResult openHouse()
        {
            ViewData["title"] = "开房办理页面";
            return View();
        }

        public ActionResult addEquip()
        {
            ViewData["title"] = "房间添加设备信息";
            string houseId = "0";
            if (Request.QueryString["houseId"] != null)
            {
                houseId = Request.QueryString["houseId"].ToString();
            }
            ViewData["houseId"] = houseId;
            return View();
        }
    }
}