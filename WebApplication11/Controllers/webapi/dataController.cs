using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApplication11.App_Start;
using WebApplication11.EF.mySysClass;


namespace swnl_web_pi.Controllers.webApi
{
    public class dataController : ApiController
    {
        /// <summary>
        /// 获取用户类别 鼠标点击事件
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public DataTable get_ruanjianFenbu(string userIdList,string groupByModel)
        {

            sqlHelper sh = new sqlHelper();

            string sql = "select * from vw_当日_软件类别时间分布图 where mins>10 ";
            if (!string.IsNullOrEmpty(userIdList))
            {
                sql += " and userId in (" + userIdList + ")";
            }
           
            DataTable dt = new DataTable();
            try
            {
                dt = sh.dbClient().SqlQueryable<object>(sql).OrderBy("mins desc").ToDataTable();
            }
            catch {

            }

            return dt;
        }
        /// <summary>
        /// 当日_人员时刻输入字符串个数对比
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public DataTable get_user_hours_keyword(string userIdList,string groupByModel)
        {

            sqlHelper sh = new sqlHelper();

            string sql = "";
            string sqlUserList = "";
            if (!string.IsNullOrEmpty(userIdList))
            {
                sqlUserList += " where userId in (" + userIdList + ") ";
            }
            if (groupByModel == "person")
            {
                sql = "select * from vw_当日_人员时刻繁忙度对比 ";
                sql += sqlUserList;
            }
            else if(groupByModel == "team")
            {
                sql = "select teamName as userName,sum(Count)as Count,hour from vw_当日_人员时刻繁忙度对比  " + sqlUserList;
                sql+= " group by teamName,hour";
            }
            else if (groupByModel == "department")
            {
                sql = "select departmentName as userName,sum(Count)as Count,hour from vw_当日_人员时刻繁忙度对比  " + sqlUserList;
                sql += " group by departmentName,hour";
            }
            else if (groupByModel == "fgs")
            {
                sql = "select fgsName as userName,sum(Count)as Count,hour from vw_当日_人员时刻繁忙度对比  " + sqlUserList;
                sql += " group by fgsName,hour";
            }
            else if (groupByModel == "zgs")
            {
                sql = "select zgsName as userName,sum(Count)as Count,hour from vw_当日_人员时刻繁忙度对比  " + sqlUserList;
                sql += " group by zgsName,hour";
            }

            DataTable dt = new DataTable();
            try
            {
                dt = sh.dbClient().SqlQueryable<object>(sql).OrderBy("hour asc,userName asc").ToDataTable();
            }
            catch(Exception ex)
            {

            }

            return dt;
        }

        /// <summary>
        /// vw_当日_人员时鼠标点击个数对比
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public DataTable get_user_hours_mouseClick(string userIdList,string groupByModel)
        {

            sqlHelper sh = new sqlHelper();

            string sql = "";
            string sqlUserList = "";
            if (!string.IsNullOrEmpty(userIdList))
            {
                sqlUserList += " where userId in (" + userIdList + ") ";
            }
            if (groupByModel == "person")
            {
                sql = "select * from vw_当日_人员时刻繁忙度对比 ";
                sql += sqlUserList;
            }
            else if (groupByModel == "team")
            {
                sql = "select teamName as userName,sum(Count)as Count,hour from vw_当日_人员时刻繁忙度对比  " + sqlUserList;
                sql += " group by teamName,hour";
            }
            else if (groupByModel == "department")
            {
                sql = "select departmentName as userName,sum(Count)as Count,hour from vw_当日_人员时刻繁忙度对比  " + sqlUserList;
                sql += " group by departmentName,hour";
            }
            else if (groupByModel == "fgs")
            {
                sql = "select fgsName as userName,sum(Count)as Count,hour from vw_当日_人员时刻繁忙度对比  " + sqlUserList;
                sql += " group by fgsName,hour";
            }
            else if (groupByModel == "zgs")
            {
                sql = "select zgsName as userName,sum(Count)as Count,hour from vw_当日_人员时刻繁忙度对比  " + sqlUserList;
                sql += " group by zgsName,hour";
            }
            DataTable dt = new DataTable();
            try
            {
                dt = sh.dbClient().SqlQueryable<object>(sql).OrderBy("hour asc,userName asc").ToDataTable();
            }
            catch
            {

            }

            return dt;
        }

        /// <summary>
        /// 用户当前使用软件展示
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public DataTable get_user_soft_list(string tableName, string userIdList, string groupByModel)
        {

            sqlHelper sh = new sqlHelper();

            string sql = "";
            string sqlUserList = "";
            if (!string.IsNullOrEmpty(userIdList))
            {
                sqlUserList = " where userId in (" + userIdList + ") ";
            }
            if (groupByModel == "person")
            {
                sql = "select top 10 * from " + tableName;
                sql += sqlUserList;
            }
            else if (groupByModel == "team")
            {
                sql = " select top 10 teamName as userName,partDate,appName,left(windowTitle,50)as windowTitle from " + tableName;
                sql += sqlUserList;
            }
            else if (groupByModel == "department")
            {
                sql = " select top 10 departmentName as userName,partDate,appName,left(windowTitle,50)as windowTitle from " + tableName;
                sql += sqlUserList;
            }
            else if (groupByModel == "fgs")
            {
                sql = " select top 10 fgsName as userName,partDate,appName,left(windowTitle,50)as windowTitle from " + tableName;
                sql += sqlUserList;
            }
            else if (groupByModel == "zgs")
            {
                sql = " select top 10 zgsName as userName,partDate,appName,left(windowTitle,50)as windowTitle from " + tableName;
                sql += sqlUserList;
            }

            DataTable dt = new DataTable();
            try
            {
                dt = sh.dbClient().SqlQueryable<object>(sql).ToDataTable();
            }
            catch
            {

            }

            return dt;
        }

        /// <summary>
        /// 获取用户类别 鼠标点击事件
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public DataTable get_common(string tableName,string userIdList,string groupByModel)
        {
            
            sqlHelper sh = new sqlHelper();

            string sql = "";
            string sqlUserList = "";
            if (!string.IsNullOrEmpty(userIdList))
            {
                sqlUserList = " where userId in (" + userIdList + ") ";
            }
            if (groupByModel == "person")
            {
                sql = "select top 5 * from " + tableName;
                sql += sqlUserList;
            }
            else if (groupByModel == "team")
            {
                sql = " select teamName as userName, sum(Count) as Count from " + tableName;
                sql += sqlUserList;
                sql += "group by teamName";
            }
            else if (groupByModel == "department")
            {
                sql = " select departmentName as userName, sum(Count) as Count from " + tableName;
                sql +=  sqlUserList;
                sql += "group by departmentName";
            }
            else if (groupByModel == "fgs")
            {
                sql = " select fgsName as userName, sum(Count) as Count from " + tableName;
                sql += sqlUserList;
                sql += "group by fgsName";
            }
            else if (groupByModel == "zgs")
            {
                sql = " select zgsName as userName, sum(Count) as Count from " + tableName;
                sql += sqlUserList;
                sql += "group by zgsName";
            }

            DataTable dt = new DataTable();
            try
            {
                dt = sh.dbClient().SqlQueryable<object>(sql).ToDataTable();
            }
            catch
            {

            }

            return dt;
        }

        //这里进行历史数据查询
        [HttpGet]
        public DataTable commonMethod(string tableName)
        {

            sqlHelper sh = new sqlHelper();

            string sql = "select * from " + tableName;
            DataTable dt = new DataTable();
            try
            {
                dt = sh.dbClient().SqlQueryable<object>(sql).ToDataTable();
            }
            catch
            {

            }

            return dt;
        }

        #region
        [HttpGet]
        public DataTable getUserTree()
        {

            sqlHelper sh = new sqlHelper();
            sysLoginInCls si = public_method.getLoginInObject();
            string sql = "select * from vw_tree_all "
                +" where userId in (select userId from sys_dataRole_user where roleId = " +si.dataRoleId +")"

                + " union all select* from vw_tree_all"
                + " where id in (select distinct parentId from vw_tree_all"
                + " where userId in (select userId from sys_dataRole_user where roleId = " + si.dataRoleId + "))"

                + " union all select* from vw_tree_all"
                + " where id in (select distinct parentId from vw_tree_all"
                + " where id in (select distinct parentId from vw_tree_all"
                + " where userId in (select userId from sys_dataRole_user where roleId = " + si.dataRoleId + ")))"

                + " union all select* from vw_tree_all"
                + " where id in (select distinct parentId from vw_tree_all"
                + " where id in (select distinct parentId from vw_tree_all"
                + " where id in (select distinct parentId from vw_tree_all"
                + " where userId in (select userId from sys_dataRole_user where roleId = " + si.dataRoleId + "))))";
            

            DataTable dt = new DataTable();
            try
            {
                dt = sh.dbClient().SqlQueryable<object>(sql).ToDataTable();
            }
            catch
            {

            }
            return dt;
        }
        #endregion

        #region 获取数据权限中的用户ID
        [HttpGet]
        public DataTable getDataRoleUserIdList()
        {

            sqlHelper sh = new sqlHelper();
            sysLoginInCls si = public_method.getLoginInObject();
            string sql = "select userId from sys_dataRole_user where roleId = " +  si.dataRoleId;

            DataTable dt = new DataTable();
            try
            {
                dt = sh.dbClient().SqlQueryable<object>(sql).ToDataTable();
            }
            catch
            {

            }
            return dt;
        }
        #endregion

        #region 这里是 历史页面用到的方法

        //这里进行历史数据查询
        /// <summary>
        /// string timeQujian,string userIdList
        /// </summary>
        /// <param name="passJson"></param>
        /// <returns></returns>
        [HttpPost]
        public DataTable get_times_user_mouse(JObject passJson)
        {

            sqlHelper sh = new sqlHelper();
            string timeQujian = passJson["timeQujian"].ToString();
            string[] TimerArray = new string[2];
            if (timeQujian != "") {
                TimerArray = timeQujian.Split('~');
            }
            string userIdList = passJson["userIdList"].ToString();
            string sql = "select userId,userName,postName,convert(varchar(10),createDate,120) day,count(*) count from vw_tb_mouse_user";
            sql += " where createDate between  '"+ TimerArray[0] + "'  and dateadd(day,1,'"+TimerArray[1]+"')";
            if (!string.IsNullOrEmpty(userIdList))
            {
                sql += "and userId in(" + userIdList + ")";
            }
            sql += " group by userId,userName,postName,convert(varchar(10),createDate,120)";
            
            DataTable dt = new DataTable();
            try
            {
                dt = sh.dbClient().SqlQueryable<object>(sql).OrderBy("day,userId asc").ToDataTable();
            }
            catch(Exception ex)
            {

            }

            return dt;
        }

        //这里进行历史数据查询
        /// <summary>
        /// string timeQujian,string userIdList
        /// </summary>
        /// <param name="passJson"></param>
        /// <returns></returns>
        [HttpPost]
        public DataTable get_times_user_keyboard(JObject passJson)
        {

            sqlHelper sh = new sqlHelper();
            string timeQujian = passJson["timeQujian"].ToString();
            string[] TimerArray = new string[2];
            if (timeQujian != "")
            {
                TimerArray = timeQujian.Split('~');
            }
            string userIdList = passJson["userIdList"].ToString();
            string sql = "select userId,userName,postName,convert(varchar(10),createDate,120) day,sum(len(inputText)) count from vw_tb_keyboard_user";
            sql += " where createDate between  '" + TimerArray[0] + "'  and dateadd(day,1,'" + TimerArray[1] + "')";
            if (!string.IsNullOrEmpty(userIdList)) {
                sql += "and userId in(" + userIdList + ")";
            }
            sql += " group by userId,userName,postName,convert(varchar(10),createDate,120)";

            DataTable dt = new DataTable();
            try
            {
                dt = sh.dbClient().SqlQueryable<object>(sql).OrderBy("day,userId asc").ToDataTable();
            }
            catch (Exception ex)
            {

            }

            return dt;
        }

        //这里进行历史数据查询
        /// <summary>
        /// string timeQujian,string userIdList
        /// </summary>
        /// <param name="passJson"></param>
        /// <returns></returns>
        [HttpPost]
        public DataTable get_times_user_softTop5(JObject passJson)
        {

            sqlHelper sh = new sqlHelper();
            string timeQujian = passJson["timeQujian"].ToString();
            string[] TimerArray = new string[2];
            if (timeQujian != "")
            {
                TimerArray = timeQujian.Split('~');
            }
            string userIdList = passJson["userIdList"].ToString();
            string sql = "select * from (select *,ROW_NUMBER() over(partition by userId,day order by usedSeconds desc ) num from (";
            sql += " select userId,userName,(userName+'-'+appName) appName,postName,convert(varchar(10),createDate,120) day,sum(usedSeconds)  usedSeconds";
            sql += " from vw_tb_mouse_user where createDate between  '"+ TimerArray[0] + " '  and dateadd(day,1,'" + TimerArray[1] + "')  ";
            if (!string.IsNullOrEmpty(userIdList))
            {
                sql += "and userId in(" + userIdList + ")";
            }
            sql += " group by userId,userName,appName,postName,convert(varchar(10),createDate,120) ) t1 ) t0 where num<="+System.Configuration.ConfigurationManager.AppSettings["softComparmCount"];

            DataTable dt = new DataTable();
            try
            {
                dt = sh.dbClient().SqlQueryable<object>(sql).OrderBy("userId desc").ToDataTable();
            }
            catch (Exception ex)
            {

            }

            return dt;
        }

        //这里进行历史数据查询
        /// <summary>
        /// string timeQujian,string userIdList
        /// </summary>
        /// <param name="passJson"></param>
        /// <returns></returns>
        [HttpPost]
        public DataTable get_mouse_keyboard_union(JObject passJson)
        {

            sqlHelper sh = new sqlHelper();
            string timeQujian = passJson["timeQujian"].ToString();
            string[] TimerArray = new string[2];
            if (timeQujian != "")
            {
                TimerArray = timeQujian.Split('~');
            }
            string userIdList = passJson["userIdList"].ToString();
            string sql = "select userId,userName,convert(varchar(10),createDate,120) day,sum(Count) count  from vw_mouse_keyboard_union_user";
            sql += " where createDate between  '"+TimerArray[0]+"'  and dateadd(day,1,'"+ TimerArray[1] + "')" ;
            
            if (!string.IsNullOrEmpty(userIdList))
            {
                sql += "and userId in(" + userIdList + ")";
            }
            sql += " group by userId,userName,convert(varchar(10),createDate,120) ";

            DataTable dt = new DataTable();
            try
            {
                dt = sh.dbClient().SqlQueryable<object>(sql).OrderBy("day,userId asc").ToDataTable();
            }
            catch (Exception ex)
            {

            }

            return dt;
        }



        #endregion
    }
}
