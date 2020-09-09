using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApplication11.Controllers
{
    public class systemController : Controller
    {
        // GET: system
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult logSearch()
        {
            return View();
        }

        #region 数据权限
        public ActionResult dataRole()
        {
            return View();
        }
        public ActionResult dataRole_manger()
        {
            return View();
        }
        public ActionResult dataRole_feipei()
        {
            return View();
        }
        #endregion
        #region 页面权限
        public ActionResult pageRole()
        {
            return View();
        }
        public ActionResult pageRole_manger()
        {
            return View();
        }
        public ActionResult pageRole_feipei()
        {
            return View();
        }
        #endregion

        public ActionResult baojingMsg() {
            return View();
        }

        public ActionResult zhiwuRole()
        {
            return View();
        }
        public ActionResult excelImport() {
            return View();
        }
    }
}