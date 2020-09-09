using SqlSugar;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApplication11.App_Start;

namespace WebApplication11.Controllers
{
    public class webapi_menuController : ApiController
    {

        /// <summary>
        /// 通过roleid获取 菜单信息
        /// </summary>
        /// <param name="roleId"></param>
        /// <returns></returns>
        [HttpGet]
        public List<mainPage_menuInfo> getFunctionInfoFromRoleId(string roleId)
        {
            List<mainPage_menuInfo> l_menuInfo = new List<mainPage_menuInfo>();
            string strSql = "select top 1000 moduleId,moduleName,moduleIcoAddr,functionId,functionName,url,functionIcoAddr,moduleOrderNo ";
            strSql += " from vw_sys_module_function where functionId in(select Function_id from sys_role_function where role_Id='" + roleId + "')";
            strSql += " ";

            sqlHelper sh = new sqlHelper();
            ISqlSugarClient db = sh.dbClient();


            DataTable dt = db.SqlQueryable<object>(strSql).OrderBy("moduleOrderNo asc").ToDataTable();
            if (dt != null && dt.Rows.Count > 0)
            {
                DataView dv = dt.DefaultView;
                DataTable dt_distinct = dv.ToTable(true, "moduleId", "moduleName", "moduleIcoAddr");
                for (int i = 0; i < dt_distinct.Rows.Count; i++)
                {
                    string menuId = dt_distinct.Rows[i]["moduleId"].ToString();
                    string moduleName = dt_distinct.Rows[i]["moduleName"].ToString();
                    string moduleIcoAddr = dt_distinct.Rows[i]["moduleIcoAddr"].ToString();
                    mainPage_menuInfo menuInfo = new mainPage_menuInfo();
                    menuInfo.menuId = menuId;
                    menuInfo.menuName = moduleName;
                    menuInfo.menuIcon = moduleIcoAddr;
                    menuInfo.Children = new List<mainPage_functionInfo>();
                    for (int j = 0; j < dt.Rows.Count; j++)
                    {
                        if (dt.Rows[j]["moduleId"].ToString() == menuId)
                        {
                            string functionId = dt.Rows[j]["functionId"].ToString();
                            string functionName = dt.Rows[j]["functionName"].ToString();
                            string url = dt.Rows[j]["url"].ToString();
                            string functionIcoAddr = dt.Rows[j]["functionIcoAddr"].ToString();
                            mainPage_functionInfo mf = new mainPage_functionInfo();
                            mf.functionId = functionId; mf.functionName = functionName;
                            mf.url = url; mf.functionIcon = functionIcoAddr;
                            menuInfo.Children.Add(mf);
                        }
                    }
                    l_menuInfo.Add(menuInfo);
                }

            }
            return l_menuInfo;
        }

        /// <summary>
        /// 通过roleid获取 菜单信息
        /// </summary>
        /// <param name="roleId"></param>
        /// <returns></returns>
        [HttpGet]
        public List<mainPage_menuInfo> getFunctionInfoFromZhiwuId(string ZhiwuId)
        {
            List<mainPage_menuInfo> l_menuInfo = new List<mainPage_menuInfo>();
            string strSql = "select top 1000 moduleId,moduleName,moduleIcoAddr,functionId,functionName,url,functionIcoAddr ";
            strSql += " from vw_sys_module_function where functionId in(select functionId from sys_zhiwu_function where flag=1 and  zhiwuId='" + ZhiwuId + "')";
            strSql += " ";

            sqlHelper sh = new sqlHelper();
            ISqlSugarClient db = sh.dbClient();


            DataTable dt = db.SqlQueryable<object>(strSql).ToDataTable();
            if (dt != null && dt.Rows.Count > 0)
            {
                DataView dv = dt.DefaultView;
                DataTable dt_distinct = dv.ToTable(true, "moduleId", "moduleName", "moduleIcoAddr");
                for (int i = 0; i < dt_distinct.Rows.Count; i++)
                {
                    string menuId = dt_distinct.Rows[i]["moduleId"].ToString();
                    string moduleName = dt_distinct.Rows[i]["moduleName"].ToString();
                    string moduleIcoAddr = dt_distinct.Rows[i]["moduleIcoAddr"].ToString();
                    mainPage_menuInfo menuInfo = new mainPage_menuInfo();
                    menuInfo.menuId = menuId;
                    menuInfo.menuName = moduleName;
                    menuInfo.menuIcon = moduleIcoAddr;
                    menuInfo.Children = new List<mainPage_functionInfo>();
                    for (int j = 0; j < dt.Rows.Count; j++)
                    {
                        if (dt.Rows[j]["moduleId"].ToString() == menuId)
                        {
                            string functionId = dt.Rows[j]["functionId"].ToString();
                            string functionName = dt.Rows[j]["functionName"].ToString();
                            string url = dt.Rows[j]["url"].ToString();
                            string functionIcoAddr = dt.Rows[j]["functionIcoAddr"].ToString();
                            mainPage_functionInfo mf = new mainPage_functionInfo();
                            mf.functionId = functionId; mf.functionName = functionName;
                            mf.url = url; mf.functionIcon = functionIcoAddr;
                            menuInfo.Children.Add(mf);
                        }
                    }
                    l_menuInfo.Add(menuInfo);
                }

            }
            return l_menuInfo;
        }

    }

    public class mainPage_menuInfo
    {
        public string menuId { get; set; }
        public string menuName { get; set; }
        //&#xe697;
        public string menuIcon { get; set; }

        public List<mainPage_functionInfo> Children
        {
            get; set;
        }

    }
    public class mainPage_functionInfo
    {
        public string functionId { get; set; }
        public string functionName { get; set; }
        public string url { get; set; }

        public string functionIcon { get; set; }
    }
}
