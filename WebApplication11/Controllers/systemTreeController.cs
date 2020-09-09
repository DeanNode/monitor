using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApplication11.Controllers
{
    /// <summary>
    /// 系统用到的树结构
    /// </summary>
    public class systemTreeController : Controller
    {
        // GET: systemTree
        public ActionResult kong()
        {
            return View();
        }

        public ActionResult jiagou_lhTree()
        {
            return View();
        }
        public ActionResult sysPageTree()
        {
            return View();
        }

        public ActionResult userDataRoleTree()
        {
            return View();
        }
        public ActionResult userPageRoleTree()
        {
            return View();
        }

        /// <summary>
        /// 这里是 数据权限中 项目树
        /// </summary>
        /// <returns></returns>
        public ActionResult systemUserTree()
        {
            return View();
        }

        //sysZhiWeiPeople
        /// <summary>
        /// 这里是 职位树结构
        /// </summary>
        /// <returns></returns>
        public ActionResult sysZhiWeiPeople()
        {
            return View();
        }

        public ActionResult userZhiwuTree()
        {
            return View();
        }

        public ActionResult mobilePageTree()
        {
            return View();
        }

        public ActionResult systemWarnTree()
        {
            return View();
        }
        
    }
}