using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApplication11.Controllers
{
    public class basicController : Controller
    {
        // GET: basic
        public ActionResult public_zgs()
        {
            return View();
        
}        public ActionResult public_jt()
        {
            return View();
        }
        public ActionResult public_fgs()
        {
            return View();
        }
        public ActionResult public_team()
        {
            return View();
        }
        public ActionResult public_department()
        {
            return View();
        }
        public ActionResult tb_Machine_user()
        {
            return View();
        }
        /// <summary>
        /// 个人信息填写界面
        /// </summary>
        /// <returns></returns>
        public ActionResult myInfo()
        {
            return View();
        }

    }
}