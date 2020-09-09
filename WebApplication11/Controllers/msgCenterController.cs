using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApplication11.Controllers
{
    public class msgCenterController : Controller
    {
        public ActionResult tb_message()
        {
            ViewData["title"] = "消息管理";
            return View();
        }

        public ActionResult tb_equipReport()
        {
            ViewData["title"] = "设备信息上传";
            return View();
        }
        

    }
}