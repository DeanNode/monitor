using Newtonsoft.Json.Linq;
using SqlSugar;
using System;
using System.Collections.Generic;
using System.Web.Http;
using WebApplication11.App_Start;
using WebApplication11.EF.mySysClass;

namespace WebApplication11.Controllers
{
    public class webapi_downloadController: ApiController
    {
        /// <summary>
        /// 用户数据[{name: op: value }]
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        public List<object> getUserHistoryDataList(JObject passJson)
        {
            ISqlSugarClient db = null;
            try
            {
                sqlHelper sh = new sqlHelper();
                db = sh.dbClient();
                string timeQujian = passJson["timeQujian"].ToString();
                string[] TimerArray = new string[2];
                if (timeQujian != "")
                {
                    TimerArray = timeQujian.Split('~');
                }
                string userIdList = passJson["userIdList"].ToString();

                string type = passJson["type"].ToString();
                string sql = "";
                if (type == "keyboard")
                {
                    sql += " select id, MachineName, appName, inputText, " +
                    " windowTitle, usedSeconds, createDate, " +
                    " uuid, userId, userName, postName,type " +
                    " from [dbo].[vw_tb_keyboard_user] with(nolock) " +
                    " where createDate between  '" + TimerArray[0] + " '  and dateadd(day,1,'" + TimerArray[1] + "') ";
                    if (!string.IsNullOrEmpty(userIdList))
                    {
                        sql += " and userId in(" + userIdList + ")";
                    }
                }
                else if (type == "mouse")
                {
                    sql += " select id, MachineName, appName, inputText, " +
                    " windowTitle, usedSeconds, createDate, " +
                    " uuid, userId, userName, postName,type " +
                    " from [dbo].[vw_tb_mouse_user] with(nolock)" +
                    " where createDate between  '" + TimerArray[0] + " '  and dateadd(day,1,'" + TimerArray[1] + "') ";
                    if (!string.IsNullOrEmpty(userIdList))
                    {
                        sql += " and userId in(" + userIdList + ")";
                    }
                }
                else if (type == "special")
                {
                    sql += " select id, MachineName, appName, inputText, " +
                   " windowTitle, usedSeconds, createDate, " +
                   " uuid, userId, userName, postName,type " +
                   " from [dbo].[vw_tb_special_user] with(nolock) " +
                   " where createDate between  '" + TimerArray[0] + " '  and dateadd(day,1,'" + TimerArray[1] + "') ";
                    if (!string.IsNullOrEmpty(userIdList))
                    {
                        sql += " and userId in(" + userIdList + ")";
                    }
                }
                else if (type == "pages")
                {
                    sql += " select id, MachineName, appName, inputText, " +
                  " windowTitle, usedSeconds, createDate, " +
                  " uuid, userId, userName, postName,type " +
                  " from [dbo].vw_tb_pages_user with(nolock) " +
                  " where createDate between  '" + TimerArray[0] + " '  and dateadd(day,1,'" + TimerArray[1] + "') ";
                    if (!string.IsNullOrEmpty(userIdList))
                    {
                        sql += " and userId in(" + userIdList + ")";
                    }
                }
                else if (type == "all") {
                    sql += " select id, MachineName, appName, inputText, " +
                  " windowTitle, usedSeconds, createDate, " +
                  " uuid, userId, userName, postName,type,text " +
                  " from [dbo].vw_all_history_user_info with(nolock) " +
                  " where createDate between  '" + TimerArray[0] + " '  and dateadd(day,1,'" + TimerArray[1] + "') ";
                    if (!string.IsNullOrEmpty(userIdList))
                    {
                        sql += " and userId in(" + userIdList + ")";
                    }
                }

               



                //这里把查询的语句记录到内存中
                sysSearchSql sss = new sysSearchSql();
                sss.loginInIp = public_method.GetIPAddress();
                sss.gridkey = "getUserHistoryDataList";//这里记录一下
                sss.sql = sql;
                MvcApplication.setsysSearchSql(sss);
                var list = db.SqlQueryable<object>(sql).OrderBy("createDate asc").ToList();
                return list;
            }
            catch (Exception ex)
            {
                return new List<object>();
            }
            finally
            {
                db.Close();
            }
        }

        /// <summary>
        /// 键盘数据[{name: op: value }]
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        public List<object> getKeyboardDataList(JObject passJson)
        {
            ISqlSugarClient db = null;
            try
            {
                sqlHelper sh = new sqlHelper();
                db = sh.dbClient();
                string timeQujian = passJson["timeQujian"].ToString();
                string[] TimerArray = new string[2];
                if (timeQujian != "")
                {
                    TimerArray = timeQujian.Split('~');
                }
                string userIdList = passJson["userIdList"].ToString();

                string sql = "";
                sql += " select id, MachineName, appName, inputText, " +
                    " windowTitle, usedSeconds, createDate, " +
                    " uuid, userId, userName, postName " +
                    " from [dbo].[vw_tb_keyboard_user] " +
                    " where createDate between  '" + TimerArray[0] + " '  and dateadd(day,1,'" + TimerArray[1] + "') ";
                if (!string.IsNullOrEmpty(userIdList))
                {
                    sql += " and userId in(" + userIdList + ")";
                }
                //这里把查询的语句记录到内存中
                sysSearchSql sss = new sysSearchSql();
                sss.loginInIp = public_method.GetIPAddress();
                sss.gridkey = "getKeyboardDataList";//这里记录一下
                sss.sql = sql;
                MvcApplication.setsysSearchSql(sss);
                var list = db.SqlQueryable<object>(sql).ToList();
                return list;
            }
            catch (Exception ex)
            {
                return new List<object>();
            }
            finally
            {
                db.Close();
            }
        }
        /// <summary>
        /// 键盘数据[{name: op: value }]
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        public List<object> getMouseDataList(JObject passJson)
        {
            ISqlSugarClient db = null;
            try
            {
                sqlHelper sh = new sqlHelper();
                db = sh.dbClient();
                string timeQujian = passJson["timeQujian"].ToString();
                string[] TimerArray = new string[2];
                if (timeQujian != "")
                {
                    TimerArray = timeQujian.Split('~');
                }
                string userIdList = passJson["userIdList"].ToString();

                string sql = "";
                sql += " select id, MachineName, cpuId, appName, x, y, windowTitle," +
                    " usedSeconds, createDate, uuid, userId, userName, postName " +
                    " from [dbo].[vw_tb_mouse_user] " +
                    " where createDate between  '" + TimerArray[0] + " '  and dateadd(day,1,'" + TimerArray[1] + "') ";
                if (!string.IsNullOrEmpty(userIdList))
                {
                    sql += " and userId in(" + userIdList + ")";
                }
                //这里把查询的语句记录到内存中
                sysSearchSql sss = new sysSearchSql();
                sss.loginInIp = public_method.GetIPAddress();
                sss.gridkey = "getMouseDataList";//这里记录一下
                sss.sql = sql;
                MvcApplication.setsysSearchSql(sss);
                var list = db.SqlQueryable<object>(sql).ToList();
                return list;
            }
            catch (Exception ex)
            {
                return new List<object>();
            }
            finally
            {
                db.Close();
            }
        }
    }
}