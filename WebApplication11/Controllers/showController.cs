using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApplication11.Controllers
{
    public class showController : Controller
    {
        // GET: show
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult bg()
        {
            return View();
        }

        public ActionResult historyTongji() {
            return View();
        }
        public ActionResult downloadkeyboardFile()
        {
            return View();
        }
        public ActionResult downloadMouseDataFile()
        {
            return View();
        }
        public ActionResult downLoadUserData() {
            return View();
        }

        /// <summary>
        /// 综合统计1
        /// </summary>
        /// <returns></returns>
        public ActionResult zonghetongji1()
        {
            return View();

        }
        /// <summary>
        /// 综合统计2
        /// </summary>
        /// <returns></returns>
        public ActionResult zonghetongji2()
        {
            return View();

        }

        public ActionResult detailDataAnalysis()
        {
            return View();

        }
        public ActionResult changeDataAnalysis()
        {
            return View();

        }
        public ActionResult paihangbang()
        {
            return View();

        }

    }
}