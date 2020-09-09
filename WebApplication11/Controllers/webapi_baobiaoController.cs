using Newtonsoft.Json.Linq;
using SqlSugar;
using Sugar.Enties;
using System;
using System.Collections.Generic;
using System.Data;
using System.Globalization;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApplication11.App_Start;
using WebApplication11.EF.mySysClass;

namespace WebApplication11.Controllers
{
    public class webapi_baobiaoController : ApiController
    {

        #region  //时间段查询 相关接口
       
        /// <summary>
        /// 时间段内复制次数、长度报表 
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        public List<object> getCopyTotalByTime(JObject passJson)
        {
            try
            {
                sqlHelper sh = new sqlHelper();
                ISqlSugarClient db = sh.dbClient();

                string sql = "";

                if (passJson != null)
                {
                    string userIdList = passJson["userIdList"].ToString();
                    string groupByModel = passJson["groupByModel"].ToString();
                    string timeRange = passJson["timeRange"].ToString();

                    string sqlSelect = "";
                    string sqlWhere = "";
                    string sqlGroupBy = "";

                    if (!string.IsNullOrEmpty(timeRange))
                    {
                        string[] arrTime = timeRange.Split('~');
                        string beginTime = arrTime[0];
                        string endTime = arrTime[1] + " 23:59:59";
                        sqlWhere = " and k.createDate between '" + beginTime + "' and '" + endTime + "' and userId in (" + userIdList + ")";
                    }


                    if (groupByModel == "person")
                    {
                        sqlSelect = " select userId,userName as name,count(inputText)  AS copyCountTotal,sum(len(inputText)) AS copyLenTotal ";
                        sqlGroupBy = " group by userId,userName ";
                    }
                    else if (groupByModel == "team")
                    {
                        sqlSelect = " select teamId,teamName as name,count(inputText)  AS copyCountTotal,sum(len(inputText)) AS copyLenTotal ";
                        sqlGroupBy = " group by teamId,teamName ";
                    }
                    else if (groupByModel == "department")
                    {
                        sqlSelect = " select departmentId,departmentName as name,count(inputText)  AS copyCountTotal,sum(len(inputText)) AS copyLenTotal ";
                        sqlGroupBy = " group by departmentId,departmentName ";
                    }
                    else if (groupByModel == "fgs")
                    {
                        sqlSelect = " select fgsId,fgsName as name,count(inputText)  AS copyCountTotal,sum(len(inputText)) AS copyLenTotal ";
                        sqlGroupBy = " group by fgsId,fgsName ";
                    }
                    else if (groupByModel == "zgs")
                    {
                        sqlSelect = " select zgsId,zgsName as name,count(inputText)  AS copyCountTotal,sum(len(inputText)) AS copyLenTotal ";
                        sqlGroupBy = " group by zgsId,zgsName ";
                    }

                    sql = sqlSelect;

                    sql += " from " +
                           " ( " +
                           "    select " +
                           "        z.zgsId,z.zgsName,f.fgsId,f.fgsName,d.departmentId,d.departmentName,t.teamId,t.teamName,u.userId,u.userName,u.sex,k.* " +
                           "    from " +
                           "        tb_special k " +
                           "        inner join tb_Machine_user u on k.cpuId = u.cpuId and u.flag = 1 " +
                           "        inner join public_team t on u.belongsId = t.teamId and t.flag = 1 " +
                           "        inner join public_department d on t.belongsId = d.departmentId and d.flag = 1 " +
                           "        inner join public_fgs f on d.belongsId = f.fgsId and f.flag = 1 " +
                           "        inner join public_zgs z on f.belongsId = z.zgsId and z.flag = 1 " +
                           "    where 1 = 1 " + sqlWhere +
                       " ) vw " + sqlGroupBy;
                }


                //这里把查询的语句记录到内存中
                sysSearchSql sss = new sysSearchSql();
                sss.loginInIp = public_method.GetIPAddress();
                sss.gridkey = "getCopyTotalByTime";//这里记录一下
                sss.sql = sql;

                MvcApplication.setsysSearchSql(sss);

                var list = db.SqlQueryable<object>(sql).ToList();

                return list;
            }
            catch (Exception ex)
            {
                return new List<object>();
            }

        }


        /// <summary>
        /// 时间段作业浓度报表  鼠标+键盘  除以  时间
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        public List<object> getBusyStateByTime(JObject passJson)
        {
            try
            {
                sqlHelper sh = new sqlHelper();
                ISqlSugarClient db = sh.dbClient();

                string sql = "";

                if (passJson != null)
                {
                    string userIdList = passJson["userIdList"].ToString();
                    string groupByModel = passJson["groupByModel"].ToString();
                    string timeRange = passJson["timeRange"].ToString();

                    string sqlSelectALl = "";
                    string sqlSelectModel = "";
                    string sqlOnK = "";
                    string sqlOnM = "";
                    string sqlGroupBy = "";
                    string sqlWhere = "";
                    

                    if (!string.IsNullOrEmpty(timeRange))
                    {
                        string[] arrTime = timeRange.Split('~');
                        string beginTime = arrTime[0];
                        string endTime = arrTime[1] + " 23:59:59";
                        sqlWhere = " and k.createDate between '" + beginTime + "' and '" + endTime + "' and userId in (" + userIdList + ")";
                    }


                    if (groupByModel == "person")
                    {
                        sqlSelectALl = "select pdata.userId,pdata.userName as name,";
                        sqlSelectModel = " select userId,userName, ";
                        sqlGroupBy = " group by userId,userName ";
                        sqlOnK = " on pdata.userId = kdata.userId ";
                        sqlOnM = " on pdata.userId = mdata.userId ";
                    }
                    else if (groupByModel == "team")
                    {
                        sqlSelectALl = "select pdata.teamId,pdata.teamName as name,";
                        sqlSelectModel = " select teamId,teamName, ";
                        sqlGroupBy = " group by teamId,teamName ";
                        sqlOnK = " on pdata.teamId = kdata.teamId ";
                        sqlOnM = " on pdata.teamId = mdata.teamId ";
                    }
                    else if (groupByModel == "department")
                    {
                        sqlSelectALl = "select pdata.departmentId,pdata.departmentName as name,";
                        sqlSelectModel = " select departmentId,departmentName, ";
                        sqlGroupBy = " group by departmentId,departmentName ";
                        sqlOnK = " on pdata.departmentId = kdata.departmentId ";
                        sqlOnM = " on pdata.departmentId = mdata.departmentId ";
                    }
                    else if (groupByModel == "fgs")
                    {
                        sqlSelectALl = "select pdata.fgsId,pdata.fgsName as name,";
                        sqlSelectModel = " select fgsId,fgsName, ";
                        sqlGroupBy = " group by fgsId,fgsName ";
                        sqlOnK = " on pdata.fgsId = kdata.fgsId ";
                        sqlOnM = " on pdata.fgsId = mdata.fgsId ";
                    }
                    else if (groupByModel == "zgs")
                    {
                        sqlSelectALl = "select pdata.zgsId,pdata.zgsName as name,";
                        sqlSelectModel = " select zgsId,zgsName, ";
                        sqlGroupBy = " group by zgsId,zgsName ";
                        sqlOnK = " on pdata.zgsId = kdata.zgsId ";
                        sqlOnM = " on pdata.zgsId = mdata.zgsId ";
                    }

                    sql = sqlSelectALl + " (mdata.mouseCount + kdata.keyboardCount) * 60.0 / pdata.totalSeconds as busyState ";

                    sql += " from " +
                           " ( " +
                           sqlSelectModel + " sum(usedSeconds) as totalSeconds " +
                           "    from (" +
                           "        SELECT  z.zgsId,z.zgsName,f.fgsId,f.fgsName,d.departmentId,d.departmentName,t.teamId,t.teamName,u.userId,u.userName,u.sex,k.* " +
                           "        FROM tb_pages k " +
                           "        inner join tb_Machine_user u on k.cpuId = u.cpuId and u.flag = 1 " +
                           "        inner join public_team t on u.belongsId = t.teamId and t.flag = 1 " +
                           "        inner join public_department d on t.belongsId = d.departmentId and d.flag = 1 " +
                           "        inner join public_fgs f on d.belongsId = f.fgsId and f.flag = 1 " +
                           "        inner join public_zgs z on f.belongsId = z.zgsId and z.flag = 1 " +
                           "    where 1 = 1 " + sqlWhere +
                           " ) vw " + sqlGroupBy +
                        " ) pdata " +
                        " inner join " +
                        " ( " +
                        sqlSelectModel + "sum(len(inputText)) as keyboardCount " +
                        " FROM (" +
                        " SELECT z.zgsId,z.zgsName,f.fgsId,f.fgsName,d.departmentId,d.departmentName,t.teamId,t.teamName,u.userId,u.userName,u.sex,k.* " +
                        " FROM tb_keyboard k " +
                        " INNER JOIN tb_Machine_user u " +
                        " ON k.cpuId = u.cpuId AND u.flag = 1 " +
                        "        inner join public_team t on u.belongsId = t.teamId and t.flag = 1 " +
                           "        inner join public_department d on t.belongsId = d.departmentId and d.flag = 1 " +
                           "        inner join public_fgs f on d.belongsId = f.fgsId and f.flag = 1 " +
                           "        inner join public_zgs z on f.belongsId = z.zgsId and z.flag = 1 " +
                        " WHERE (1 = 1 " + sqlWhere +
                        " )) vw " + sqlGroupBy +
                        " ) kdata " +
                          sqlOnK +
                         " inner join " +
                        " ( " +
                        sqlSelectModel + "sum(leftclickCount + rightClickCount) as mouseCount " +
                        " FROM (" +
                        " SELECT z.zgsId,z.zgsName,f.fgsId,f.fgsName,d.departmentId,d.departmentName,t.teamId,t.teamName,u.userId,u.userName,u.sex,k.* " +
                        " FROM tb_mouse k " +
                        " INNER JOIN tb_Machine_user u " +
                        " ON k.cpuId = u.cpuId AND u.flag = 1 " +
                        "        inner join public_team t on u.belongsId = t.teamId and t.flag = 1 " +
                           "        inner join public_department d on t.belongsId = d.departmentId and d.flag = 1 " +
                           "        inner join public_fgs f on d.belongsId = f.fgsId and f.flag = 1 " +
                           "        inner join public_zgs z on f.belongsId = z.zgsId and z.flag = 1 " +
                        " WHERE (1 = 1 " + sqlWhere +
                        " )) vw " + sqlGroupBy +
                        " ) mdata " +
                        sqlOnM;

                }


                //这里把查询的语句记录到内存中的
                sysSearchSql sss = new sysSearchSql();
                sss.loginInIp = public_method.GetIPAddress();
                sss.gridkey = "getBusyStateByTime";//这里记录一下
                sss.sql = sql;

                MvcApplication.setsysSearchSql(sss);

                var list = db.SqlQueryable<object>(sql).ToList();

                return list;
            }
            catch (Exception ex)
            {
                return new List<object>();
            }

        }



        /// <summary>
        /// 时间段内各种软件的使用时长、切换频率的报表
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        public List<object> getUseAppByTime(JObject passJson)
        {
            try
            {
                sqlHelper sh = new sqlHelper();
                ISqlSugarClient db = sh.dbClient();

                string sql = "";

                if (passJson != null)
                {
                    string userIdList = passJson["userIdList"].ToString();
                    string groupByModel = passJson["groupByModel"].ToString();
                    string timeRange = passJson["timeRange"].ToString();

                    string sqlSelect = "";
                    string sqlWhere = "";
                    string sqlGroupBy = "";
                    string sqlOrderBy = "";
                    string sqlId = "";

                    if (!string.IsNullOrEmpty(timeRange))
                    {
                        string[] arrTime = timeRange.Split('~');
                        string beginTime = arrTime[0];
                        string endTime = arrTime[1] + " 23:59:59";
                        sqlWhere = " and k.createDate between '" + beginTime + "' and '" + endTime + "' and userId in (" + userIdList + ")";
                    }


                    if (groupByModel == "person")
                    {
                        sqlSelect = " select  userId, userName as name,appName, COUNT(usedSeconds) AS usedCount,SUM(usedSeconds) AS usedSeconds ";
                        sqlGroupBy = " group by userId,userName,appName ";
                        sqlOrderBy = "userId,name,appName,usedCount";
                        sqlId = "userId";
                    }
                    else if (groupByModel == "team")
                    {
                        sqlSelect = " select teamId, teamName as name,appName, COUNT(usedSeconds) AS usedCount,SUM(usedSeconds) AS usedSeconds ";
                        sqlGroupBy = " group by teamId,teamName,appName ";
                        sqlOrderBy = "teamId,name,appName,usedCount";
                        sqlId = "teamId";
                    }
                    else if (groupByModel == "department")
                    {
                        sqlSelect = " select departmentId,departmentName as name,appName, COUNT(usedSeconds) AS usedCount,SUM(usedSeconds) AS usedSeconds ";
                        sqlGroupBy = " group by departmentId,departmentName,appName ";
                        sqlOrderBy = "departmentId,name,appName,usedCount";
                        sqlId = "departmentId";
                    }
                    else if (groupByModel == "fgs")
                    {
                        sqlSelect = " select fgsId,fgsName as name,appName, COUNT(usedSeconds) AS usedCount,SUM(usedSeconds) AS usedSeconds ";
                        sqlGroupBy = " group by fgsId,fgsName,appName  ";
                        sqlOrderBy = "fgsId,name,appName,usedCount";
                        sqlId = "fgsId";
                    }
                    else if (groupByModel == "zgs")
                    {
                        sqlSelect = " select zgsId,zgsName as name,appName, COUNT(usedSeconds) AS usedCount,SUM(usedSeconds) AS usedSeconds ";
                        sqlGroupBy = " group by zgsId,zgsName,appName  ";
                        sqlOrderBy = "zgsId,name,appName,usedCount";
                        sqlId = "zgsId";
                    }

                    sql = sqlSelect;

                    sql += " from " +
                           " ( " +
                           "    select " +
                           "        z.zgsId,z.zgsName,f.fgsId,f.fgsName,d.departmentId,d.departmentName,t.teamId,t.teamName,u.userId,u.userName,u.sex,k.* " +
                           "    from " +
                           "        tb_pages k " +
                           "        inner join tb_Machine_user u on k.cpuId = u.cpuId and u.flag = 1 " +
                           "        inner join public_team t on u.belongsId = t.teamId and t.flag = 1 " +
                           "        inner join public_department d on t.belongsId = d.departmentId and d.flag = 1 " +
                           "        inner join public_fgs f on d.belongsId = f.fgsId and f.flag = 1 " +
                           "        inner join public_zgs z on f.belongsId = z.zgsId and z.flag = 1 " +
                           "    where 1 = 1 " + sqlWhere +
                       " ) vw " + sqlGroupBy;

                    //这里把查询的语句记录到内存中
                    sysSearchSql sss = new sysSearchSql();
                    sss.loginInIp = public_method.GetIPAddress();
                    sss.gridkey = "getUseAppByTime";//这里记录一下
                    sss.sql = sql;

                    MvcApplication.setsysSearchSql(sss);

                    //这里进行修改，每个人保留8个最常用的软件 2020-5-10 
                    string softComparmCount = System.Configuration.ConfigurationManager.AppSettings["softComparmCount"];
                    sql = " select * from (select *,ROW_NUMBER() over(partition by " + sqlId + " order by usedSeconds desc) nums from (" + sql + ") t1) t2 where nums<="+ softComparmCount;

                    var list = db.SqlQueryable<object>(sql).OrderBy(sqlOrderBy).ToList();

                    return list;
                }
                else
                {
                    return new List<object>();
                }
                
            }
            catch (Exception ex)
            {
                return new List<object>();
            }
        }


        /// <summary>
        /// 一天内按时段分键盘动作情况
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        public List<object> getOneDayKeyboard(JObject passJson)
        {
            try
            {
                sqlHelper sh = new sqlHelper();
                ISqlSugarClient db = sh.dbClient();

                string sql = "";

                if (passJson != null)
                {
                    string userId = passJson["userId"].ToString();
                    string date = passJson["date"].ToString();

                    string sqlWhere = "";

                    if (!string.IsNullOrEmpty(date))
                    {
                        sqlWhere = " and CAST(k.createDate AS datetime) between CONVERT(varchar(10), '" + date + "', 120) AND CONVERT(varchar(10),DATEADD(day, 1,'" + date + "'), 120)  and userId = (" + userId + ")";
                    }

                    sql += " SELECT   u.userName, DATEPART(hh, k.createDate) AS hour, sum(len(inputText)) AS Count " +
                           " FROM dbo.tb_keyboard AS k  " +
                           "    INNER JOIN dbo.tb_Machine_user AS u ON k.cpuId = u.cpuId " +
                           " WHERE   1 = 1  " + sqlWhere +
                           " GROUP BY u.userName, DATEPART(hh, k.createDate) ";
                }


                //这里把查询的语句记录到内存中
                sysSearchSql sss = new sysSearchSql();
                sss.loginInIp = public_method.GetIPAddress();
                sss.gridkey = "getKeyboardTotalByTime";//这里记录一下
                sss.sql = sql;

                MvcApplication.setsysSearchSql(sss);

                var list = db.SqlQueryable<object>(sql).OrderBy("hour").ToList();

                return list;
            }
            catch (Exception ex)
            {
                return new List<object>();
            }
        }


        /// <summary>
        /// 一天内按时段分鼠标动作情况
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        public List<object> getOneDayMouse(JObject passJson)
        {
            try
            {
                sqlHelper sh = new sqlHelper();
                ISqlSugarClient db = sh.dbClient();

                string sql = "";

                if (passJson != null)
                {
                    string userId = passJson["userId"].ToString();
                    string date = passJson["date"].ToString();

                    string sqlWhere = "";

                    if (!string.IsNullOrEmpty(date))
                    {
                        sqlWhere = " and CAST(k.createDate AS datetime) between CONVERT(varchar(10), '" + date + "', 120) AND CONVERT(varchar(10),DATEADD(day, 1,'" + date + "'), 120)  and userId = (" + userId + ")";
                    }

                    sql += " SELECT   u.userName, DATEPART(hh, k.createDate) AS hour, sum(leftclickCount) as leftCount, sum(rightClickCount) as rightCount, sum(leftclickCount)+sum(rightClickCount) AS Count " +
                           " FROM dbo.tb_mouse AS k  " +
                           "    INNER JOIN dbo.tb_Machine_user AS u ON k.cpuId = u.cpuId " +
                           " WHERE   1 = 1  " + sqlWhere +
                           " GROUP BY u.userName, DATEPART(hh, k.createDate) ";
                }


                //这里把查询的语句记录到内存中
                sysSearchSql sss = new sysSearchSql();
                sss.loginInIp = public_method.GetIPAddress();
                sss.gridkey = "getOneDayMouse";//这里记录一下
                sss.sql = sql;

                MvcApplication.setsysSearchSql(sss);

                var list = db.SqlQueryable<object>(sql).OrderBy("hour").ToList();

                return list;
            }
            catch (Exception ex)
            {
                return new List<object>();
            }
        }


        /// <summary>
        /// 一天内每小时软件使用情况
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        public List<object> getOneDayApp(JObject passJson)
        {
            try
            {
                sqlHelper sh = new sqlHelper();
                ISqlSugarClient db = sh.dbClient();

                string sql = "";

                if (passJson != null)
                {
                    string userId = passJson["userId"].ToString();
                    string date = passJson["date"].ToString();

                    string sqlWhere = "";

                    if (!string.IsNullOrEmpty(date))
                    {
                        sqlWhere = " and CAST(k.createDate AS datetime) between CONVERT(varchar(10), '" + date + "', 120) AND CONVERT(varchar(10),DATEADD(day, 1,'" + date + "'), 120)  and userId = (" + userId + ")";
                    }

                    sql += " SELECT u.userName, DATEPART(hh, k.createDate) AS hour, left(appName,50) as appName,sum(usedSeconds) as Count " +
                           " FROM dbo.tb_pages AS k  " +
                           "    INNER JOIN dbo.tb_Machine_user AS u ON k.cpuId = u.cpuId " +
                           " WHERE   1 = 1  " + sqlWhere +
                           " GROUP BY u.userName,DATEPART(hh, k.createDate), appName ";
                }


                //这里把查询的语句记录到内存中
                sysSearchSql sss = new sysSearchSql();
                sss.loginInIp = public_method.GetIPAddress();
                sss.gridkey = "getOneDayApp";//这里记录一下
                sss.sql = sql;

                MvcApplication.setsysSearchSql(sss);

                var list = db.SqlQueryable<object>(sql).OrderBy("hour,Count desc").ToList();

                return list;
            }
            catch (Exception ex)
            {
                return new List<object>();
            }
        }

        /// <summary>
        /// 一天内每小时文件使用情况
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        public List<object> getOneDayFile(JObject passJson)
        {
            try
            {
                sqlHelper sh = new sqlHelper();
                ISqlSugarClient db = sh.dbClient();

                string sql = "";

                if (passJson != null)
                {
                    string userId = passJson["userId"].ToString();
                    string date = passJson["date"].ToString();

                    string sqlWhere = "";

                    if (!string.IsNullOrEmpty(date))
                    {
                        sqlWhere = " and CAST(k.createDate AS datetime) between CONVERT(varchar(10), '" + date + "', 120) AND CONVERT(varchar(10),DATEADD(day, 1,'" + date + "'), 120)  and userId = (" + userId + ")";
                    }

                    sql += " SELECT * FROM (SELECT ROW_NUMBER() over(PARTITION By DATEPART(hh, k.createDate) order by sum(usedSeconds) desc ) as rowId,u.userName, DATEPART(hh, k.createDate) AS hour, left(windowTitle,50) as appName,sum(usedSeconds) as Count " +
                           " FROM dbo.tb_pages AS k  " +
                           "    INNER JOIN dbo.tb_Machine_user AS u ON k.cpuId = u.cpuId " +
                           " WHERE   1 = 1  " + sqlWhere +
                           " GROUP BY u.userName,DATEPART(hh, k.createDate), windowTitle )t WHERE t.rowid<=20 ";
                }


                //这里把查询的语句记录到内存中
                sysSearchSql sss = new sysSearchSql();
                sss.loginInIp = public_method.GetIPAddress();
                sss.gridkey = "getOneDayFile";//这里记录一下
                sss.sql = sql;

                MvcApplication.setsysSearchSql(sss);

                var list = db.SqlQueryable<object>(sql).OrderBy("hour,Count desc").ToList();

                return list;
            }
            catch (Exception ex)
            {
                return new List<object>();
            }
        }

        /// <summary>
        /// 一天内每小时作业浓度
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        public List<object> getOneDayBusyState(JObject passJson)
        {
            try
            {
                sqlHelper sh = new sqlHelper();
                ISqlSugarClient db = sh.dbClient();

                string sql = "";

                if (passJson != null)
                {
                    string userId = passJson["userId"].ToString();
                    string date = passJson["date"].ToString();

                    string sqlWhere = "";

                    if (!string.IsNullOrEmpty(date))
                    {
                        sqlWhere = " and CAST(k.createDate AS datetime) between CONVERT(varchar(10), '" + date + "', 120) AND CONVERT(varchar(10),DATEADD(day, 1,'" + date + "'), 120)  and userId = (" + userId + ")";
                    }

                    sql = " SELECT pdata.userName, pdata.hour, (mdata.count + kdata.count) * 60.0 / pdata.count AS Count ";

                    sql += " from " +
                           " ( " +
                           "    SELECT   u.userName, DATEPART(hh, k.createDate) AS hour,sum(usedSeconds) as count " +
                           "    FROM dbo.tb_pages AS k  " +
                           "        INNER JOIN dbo.tb_Machine_user AS u ON k.cpuId = u.cpuId " +
                           "    WHERE   1 = 1  " + sqlWhere +
                           "    GROUP BY u.userName,DATEPART(hh, k.createDate)" +
                           " ) pdata " +
                           " inner join " +
                           " ( " +
                           "    SELECT   u.userName, DATEPART(hh, k.createDate) AS hour,sum(len(inputText)) as count " +
                           "    FROM dbo.tb_keyboard AS k  " +
                           "        INNER JOIN dbo.tb_Machine_user AS u ON k.cpuId = u.cpuId " +
                           "    WHERE   1 = 1  " + sqlWhere +
                           "    GROUP BY u.userName,DATEPART(hh, k.createDate) " +
                           " ) kdata on pdata.hour = kdata.hour " +
                           " inner join " +
                           " ( " +
                           "    SELECT   u.userName, DATEPART(hh, k.createDate) AS hour, sum(leftclickCount)+sum(rightClickCount) as count " +
                           "    FROM dbo.tb_mouse AS k  " +
                           "        INNER JOIN dbo.tb_Machine_user AS u ON k.cpuId = u.cpuId " +
                           "    WHERE   1 = 1  " + sqlWhere +
                           "    GROUP BY u.userName,DATEPART(hh, k.createDate) " +
                           " ) mdata on pdata.hour = mdata.hour ";
                }


                //这里把查询的语句记录到内存中
                sysSearchSql sss = new sysSearchSql();
                sss.loginInIp = public_method.GetIPAddress();
                sss.gridkey = "getOneDayBusyState";//这里记录一下
                sss.sql = sql;

                MvcApplication.setsysSearchSql(sss);

                var list = db.SqlQueryable<object>(sql).OrderBy("hour").ToList();

                return list;
            }
            catch (Exception ex)
            {
                return new List<object>();
            }
        }


        /// <summary>
        /// 一段时间内按天统计键盘动作情况
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        public List<object> getRangeDayKeyboard(JObject passJson)
        {
            try
            {
                sqlHelper sh = new sqlHelper();
                ISqlSugarClient db = sh.dbClient();

                string sql = "";

                if (passJson != null)
                {
                    string userId = passJson["userId"].ToString();
                    string timeRange = passJson["timeRange"].ToString();

                    string sqlWhere = "";

                    if (!string.IsNullOrEmpty(timeRange))
                    {
                        string[] arrTime = timeRange.Split('~');
                        string beginTime = arrTime[0];
                        string endTime = arrTime[1] + " 23:59:59";

                        sqlWhere = " and CAST(k.createDate AS datetime) between '" + beginTime + "' AND '" + endTime + "'  and userId = (" + userId + ")";
                    }

                    sql += " SELECT   u.userName, convert(varchar(10),k.createDate,120) AS date, sum(len(inputText)) AS Count " +
                           " FROM dbo.tb_keyboard AS k  " +
                           "    INNER JOIN dbo.tb_Machine_user AS u ON k.cpuId = u.cpuId " +
                           " WHERE   1 = 1  " + sqlWhere +
                           " GROUP BY u.userName, convert(varchar(10),k.createDate,120) ";
                }


                //这里把查询的语句记录到内存中
                sysSearchSql sss = new sysSearchSql();
                sss.loginInIp = public_method.GetIPAddress();
                sss.gridkey = "getRangeDayKeyboard";//这里记录一下
                sss.sql = sql;

                MvcApplication.setsysSearchSql(sss);

                var list = db.SqlQueryable<object>(sql).OrderBy("date").ToList();

                return list;
            }
            catch (Exception ex)
            {
                return new List<object>();
            }
        }


        /// <summary>
        /// 一段时间内按天统计键盘动作情况
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        public List<object> getRangeDayMouse(JObject passJson)
        {
            try
            {
                sqlHelper sh = new sqlHelper();
                ISqlSugarClient db = sh.dbClient();

                string sql = "";

                if (passJson != null)
                {
                    string userId = passJson["userId"].ToString();
                    string timeRange = passJson["timeRange"].ToString();

                    string sqlWhere = "";

                    if (!string.IsNullOrEmpty(timeRange))
                    {
                        string[] arrTime = timeRange.Split('~');
                        string beginTime = arrTime[0];
                        string endTime = arrTime[1] + " 23:59:59";

                        sqlWhere = " and CAST(k.createDate AS datetime) between '" + beginTime + "' AND '" + endTime + "'  and userId = (" + userId + ")";
                    }

                    sql += " SELECT   u.userName, convert(varchar(10),k.createDate,120) AS date, sum(leftclickCount) as leftCount, sum(rightClickCount) as rightCount, sum(leftclickCount)+sum(rightClickCount) AS Count " +
                           " FROM dbo.tb_Mouse AS k  " +
                           "    INNER JOIN dbo.tb_Machine_user AS u ON k.cpuId = u.cpuId " +
                           " WHERE   1 = 1  " + sqlWhere +
                           " GROUP BY u.userName, convert(varchar(10),k.createDate,120) ";
                }


                //这里把查询的语句记录到内存中
                sysSearchSql sss = new sysSearchSql();
                sss.loginInIp = public_method.GetIPAddress();
                sss.gridkey = "getRangeDayMouse";//这里记录一下
                sss.sql = sql;

                MvcApplication.setsysSearchSql(sss);

                var list = db.SqlQueryable<object>(sql).OrderBy("date").ToList();

                return list;
            }
            catch (Exception ex)
            {
                return new List<object>();
            }
        }


        /// <summary>
        /// 一段时间内按天统计APP使用情况
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        public List<object> getRangeDayApp(JObject passJson)
        {
            try
            {
                sqlHelper sh = new sqlHelper();
                ISqlSugarClient db = sh.dbClient();

                string sql = "";

                if (passJson != null)
                {
                    string userId = passJson["userId"].ToString();
                    string timeRange = passJson["timeRange"].ToString();

                    string sqlWhere = "";

                    if (!string.IsNullOrEmpty(timeRange))
                    {
                        string[] arrTime = timeRange.Split('~');
                        string beginTime = arrTime[0];
                        string endTime = arrTime[1] + " 23:59:59";

                        sqlWhere = " and CAST(k.createDate AS datetime) between '" + beginTime + "' AND '" + endTime + "'  and userId = (" + userId + ")";
                    }

                    sql += " SELECT   u.userName, convert(varchar(10),k.createDate,120) AS date,left(appName,50) as appName, sum(usedSeconds) as Count " +
                           " FROM dbo.tb_pages AS k  " +
                           "    INNER JOIN dbo.tb_Machine_user AS u ON k.cpuId = u.cpuId " +
                           " WHERE   1 = 1  " + sqlWhere +
                           " GROUP BY u.userName, convert(varchar(10),k.createDate,120),appName ";
                }


                //这里把查询的语句记录到内存中
                sysSearchSql sss = new sysSearchSql();
                sss.loginInIp = public_method.GetIPAddress();
                sss.gridkey = "getRangeDayApp";//这里记录一下
                sss.sql = sql;

                MvcApplication.setsysSearchSql(sss);

                var list = db.SqlQueryable<object>(sql).OrderBy("date,Count desc").ToList();

                return list;
            }
            catch (Exception ex)
            {
                return new List<object>();
            }
        }


        /// <summary>
        /// 一段时间内按天统计文件使用情况
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        public List<object> getRangeDayFile(JObject passJson)
        {
            try
            {
                sqlHelper sh = new sqlHelper();
                ISqlSugarClient db = sh.dbClient();

                string sql = "";

                if (passJson != null)
                {
                    string userId = passJson["userId"].ToString();
                    string timeRange = passJson["timeRange"].ToString();

                    string sqlWhere = "";

                    if (!string.IsNullOrEmpty(timeRange))
                    {
                        string[] arrTime = timeRange.Split('~');
                        string beginTime = arrTime[0];
                        string endTime = arrTime[1] + " 23:59:59";

                        sqlWhere = " and CAST(k.createDate AS datetime) between '" + beginTime + "' AND '" + endTime + "'  and userId = (" + userId + ")";
                    }

                    sql += " select * from " +
                           " ( " +
                           "    select row_number() over(partition by  date order by count desc) as rownum, * " +
                           "    from " +
                           "    ( " +
                           "        SELECT u.userName,convert(varchar(10), k.createDate, 120) AS date, left(windowTitle, 50) as appName, sum(usedSeconds) as Count " +
                           "        FROM dbo.tb_pages AS k INNER JOIN dbo.tb_Machine_user AS u ON k.cpuId = u.cpuId " +
                           "        WHERE   1 = 1  " + sqlWhere +
                           "        GROUP BY u.userName, convert(varchar(10),k.createDate,120),windowTitle " +
                           "    ) a " +
                           " ) b " +
                           " where rownum <= 20 ";
                }


                //这里把查询的语句记录到内存中
                sysSearchSql sss = new sysSearchSql();
                sss.loginInIp = public_method.GetIPAddress();
                sss.gridkey = "getRangeDayFile";//这里记录一下
                sss.sql = sql;

                MvcApplication.setsysSearchSql(sss);

                var list = db.SqlQueryable<object>(sql).OrderBy("date,Count desc").ToList();

                return list;
            }
            catch (Exception ex)
            {
                return new List<object>();
            }
        }

        /// <summary>
        /// 一段时间内按天统计作业浓度
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        public List<object> getRangeDayBusyState(JObject passJson)
        {
            try
            {
                sqlHelper sh = new sqlHelper();
                ISqlSugarClient db = sh.dbClient();

                string sql = "";

                if (passJson != null)
                {
                    string userId = passJson["userId"].ToString();
                    string timeRange = passJson["timeRange"].ToString();

                    string sqlWhere = "";

                    if (!string.IsNullOrEmpty(timeRange))
                    {
                        string[] arrTime = timeRange.Split('~');
                        string beginTime = arrTime[0];
                        string endTime = arrTime[1] + " 23:59:59";

                        sqlWhere = " and CAST(k.createDate AS datetime) between '" + beginTime + "' AND '" + endTime + "'  and userId = (" + userId + ")";
                    }

                    sql = " SELECT pdata.userName, pdata.date, (mdata.count + kdata.count) * 60.0 / pdata.count AS Count ";

                    sql += " from " +
                           " ( " +
                           "    SELECT   u.userName, convert(varchar(10),k.createDate,120) AS date,sum(usedSeconds) as count " +
                           "    FROM dbo.tb_pages AS k  " +
                           "        INNER JOIN dbo.tb_Machine_user AS u ON k.cpuId = u.cpuId " +
                           "    WHERE   1 = 1  " + sqlWhere +
                           "    GROUP BY u.userName,convert(varchar(10),k.createDate,120)" +
                           " ) pdata " +
                           " inner join " +
                           " ( " +
                           "    SELECT   u.userName, convert(varchar(10),k.createDate,120) AS date,sum(len(inputText)) as count " +
                           "    FROM dbo.tb_keyboard AS k  " +
                           "        INNER JOIN dbo.tb_Machine_user AS u ON k.cpuId = u.cpuId " +
                           "    WHERE   1 = 1  " + sqlWhere +
                           "    GROUP BY u.userName,convert(varchar(10),k.createDate,120) " +
                           " ) kdata on pdata.date = kdata.date " +
                           " inner join " +
                           " ( " +
                           "    SELECT   u.userName,convert(varchar(10),k.createDate,120) AS date, sum(leftclickCount)+sum(rightClickCount) as count " +
                           "    FROM dbo.tb_mouse AS k  " +
                           "        INNER JOIN dbo.tb_Machine_user AS u ON k.cpuId = u.cpuId " +
                           "    WHERE   1 = 1  " + sqlWhere +
                           "    GROUP BY u.userName,convert(varchar(10),k.createDate,120) " +
                           " ) mdata on pdata.date = mdata.date ";
                }


                //这里把查询的语句记录到内存中
                sysSearchSql sss = new sysSearchSql();
                sss.loginInIp = public_method.GetIPAddress();
                sss.gridkey = "getRangeDayBusyState";//这里记录一下
                sss.sql = sql;

                MvcApplication.setsysSearchSql(sss);

                var list = db.SqlQueryable<object>(sql).OrderBy("date").ToList();

                return list;
            }
            catch (Exception ex)
            {
                return new List<object>();
            }
        }


        /// <summary>
        /// 一段时间内按天统计作业浓度
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        public List<object> getRangeDayWorkloadState(JObject passJson)
        {
            try
            {
                sqlHelper sh = new sqlHelper();
                ISqlSugarClient db = sh.dbClient();

                string sql = "";

                if (passJson != null)
                {
                    string userId = passJson["userId"].ToString();
                    string timeRange = passJson["timeRange"].ToString();

                    string sqlWhere = "";

                    if (!string.IsNullOrEmpty(timeRange))
                    {
                        string[] arrTime = timeRange.Split('~');
                        string beginTime = arrTime[0];
                        string endTime = arrTime[1] + " 23:59:59";

                        sqlWhere = " and CAST(k.createDate AS datetime) between '" + beginTime + "' AND '" + endTime + "'  and userId = (" + userId + ")";
                    }

                    sql = " SELECT pdata.userName, pdata.date, (mdata.count + kdata.count) AS Count ";

                    sql += " from " +
                           " ( " +
                           "    SELECT   u.userName, convert(varchar(10),k.createDate,120) AS date" +
                           "    FROM dbo.tb_pages AS k  " +
                           "        INNER JOIN dbo.tb_Machine_user AS u ON k.cpuId = u.cpuId " +
                           "    WHERE   1 = 1  " + sqlWhere +
                           "    GROUP BY u.userName,convert(varchar(10),k.createDate,120)" +
                           " ) pdata " +
                           " inner join " +
                           " ( " +
                           "    SELECT   u.userName, convert(varchar(10),k.createDate,120) AS date,sum(len(inputText)) as count " +
                           "    FROM dbo.tb_keyboard AS k  " +
                           "        INNER JOIN dbo.tb_Machine_user AS u ON k.cpuId = u.cpuId " +
                           "    WHERE   1 = 1  " + sqlWhere +
                           "    GROUP BY u.userName,convert(varchar(10),k.createDate,120) " +
                           " ) kdata on pdata.date = kdata.date " +
                           " inner join " +
                           " ( " +
                           "    SELECT   u.userName,convert(varchar(10),k.createDate,120) AS date, sum(leftclickCount)+sum(rightClickCount) as count " +
                           "    FROM dbo.tb_mouse AS k  " +
                           "        INNER JOIN dbo.tb_Machine_user AS u ON k.cpuId = u.cpuId " +
                           "    WHERE   1 = 1  " + sqlWhere +
                           "    GROUP BY u.userName,convert(varchar(10),k.createDate,120) " +
                           " ) mdata on pdata.date = mdata.date ";
                }


                //这里把查询的语句记录到内存中
                sysSearchSql sss = new sysSearchSql();
                sss.loginInIp = public_method.GetIPAddress();
                sss.gridkey = "getRangeDayBusyState";//这里记录一下
                sss.sql = sql;

                MvcApplication.setsysSearchSql(sss);

                var list = db.SqlQueryable<object>(sql).OrderBy("date").ToList();

                return list;
            }
            catch (Exception ex)
            {
                return new List<object>();
            }
        }


        /// <summary>
        /// 时间段内鼠标左键+右键点击数报表 
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        public List<object> getCoypToTop(JObject passJson)
        {
            try
            {
                sqlHelper sh = new sqlHelper();
                ISqlSugarClient db = sh.dbClient();

                string sql = "";

                if (passJson != null)
                {
                    string userIdList = passJson["userIdList"].ToString();
                    string top = passJson["top"].ToString();
                    string timeRange = passJson["timeRange"].ToString();

                    string sqlWhere = "";

                    if (!string.IsNullOrEmpty(timeRange))
                    {
                        string[] arrTime = timeRange.Split('~');
                        string beginTime = arrTime[0];
                        string endTime = arrTime[1] + " 23:59:59";
                        sqlWhere = " and sp.createDate between '" + beginTime + "' and '" + endTime + "' and userId in (" + userIdList + ")";
                    }

                    sql += " select top  " + top + " copyFromWindowTitle + '(' + replace(copyFromAppName, '.exe', '') + ')' as copyFrom,  windowTitle + '(' + replace(appName, '.exe', '') + ')' as copyTo,count(*) as totalCount" +
                           " from tb_special sp inner join tb_Machine_user u on u.cpuId = sp.cpuId and u.flag = 1 " +
                           " where copyflag = 1 " +
                           sqlWhere +
                           " group by copyFromAppName,copyFromWindowTitle,appName,windowTitle " +
                           "order by totalCount desc ";
                }

                //这里把查询的语句记录到内存中
                sysSearchSql sss = new sysSearchSql();
                sss.loginInIp = public_method.GetIPAddress();
                sss.gridkey = "getCoypToTop";//这里记录一下
                sss.sql = sql;

                MvcApplication.setsysSearchSql(sss);

                var list = db.SqlQueryable<object>(sql).ToList();

                return list;
            }
            catch (Exception ex)
            {
                return new List<object>();
            }

        }

        #endregion

        #region  //新接口 时间段内键盘点击数报表
        /// <summary>
        /// 时间段内键盘点击数报表 
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        public DataTable getKeyboardTotalByTime(JObject passJson)
        {
            try
            {
                //定义返回值
                var dtResult = new DataTable();
                dtResult.Columns.AddRange(new[]{
                        new DataColumn("departmentName",typeof(string)), //部门名称
                        new DataColumn("keyboardCount",typeof(int)) //键盘统计
                    }
                );

                sqlHelper sh = new sqlHelper();
                ISqlSugarClient db = sh.dbClient();

                if (passJson != null)
                {
                    string userIdList = passJson["userIdList"].ToString();
                    string level = passJson["level"].ToString();
                    string timeBegin = passJson["timeBegin"].ToString();
                    string timeEnd = passJson["timeEnd"].ToString();

                    #region //如果是人别，则特殊处理,统计后直接返回结果接口
                    if (level == "0")
                    {
                        string sql = "select userName as departmentName,sum(len(inputText)) as keyboardCount " +
                                    " from tb_keyboard k " +
                                    " inner join tb_Machine_user u on k.cpuId = u.cpuId " +
                                    " where k.createDate between '" + timeBegin + "' and '" + timeEnd + "' " +
                                    " and userId in (" + userIdList + ") " +
                                    " group by userName,userId ";

                        public_method.writeLog("getKeyboardTotalByTime", sql);//写日志
                        var dateResult = db.SqlQueryable<object>(sql).ToDataTable();
                        return dateResult;
                    }
                    #endregion

                    //按人进行统计
                    string sqlDataByPerson = "select userId,k.cpuId,u.userName,u.belongsId,departmentName,level,sum(len(inputText)) as keyboardCount" +
                                    "  from tb_keyboard k " +
                                    "  inner join tb_Machine_user u on k.cpuId = u.cpuId  and u.flag = 1 " +
                                    "  inner join public_department d on u.belongsId = d.departmentId and d.flag = 1 " +
                                    "  where k.createDate between '" + timeBegin + "' and '" + timeEnd + "' " +
                                    "  and userId in (" + userIdList + ") " +
                                    "  group by userId,k.cpuid,u.userName,u.belongsId,level,departmentName ";
                    public_method.writeLog("getKeyboardTotalByTime", sqlDataByPerson);//写日志
                    var countByPerson = db.SqlQueryable<object>(sqlDataByPerson).ToDataTable();

                    //整理部门，都推到要统计的级别
                    countByPerson = regularLevel(countByPerson, level);

                    //定义一个新dt准备放需要的字段
                    var dt = new DataTable();
                    dt.Columns.AddRange(new[]
                    {
                        new DataColumn("departmentName",typeof(string)),
                        new DataColumn("keyboardCount",typeof(int))
                    });

                    //逐个人的数据循环，把每个人的部门都归集到将要统计的级别
                    for (int i = 0; i < countByPerson.Rows.Count; i++)
                    {
                        dt.Rows.Add(countByPerson.Rows[i]["departmentName"].ToString(), int.Parse(countByPerson.Rows[i]["keyboardCount"].ToString())); //把归集好的人别统计数据放到新dt 此时的部门已经计算到了要统计的级别 （理论上不存在有人级别高于要统计的级别，前端会过滤，如果前端失误了，直接按较高级别统计就是了，结果也可理解）
                    }

                    //linq对数据集进行按部门统计
                    var query = from t in dt.AsEnumerable()
                                group t by new { t1 = t.Field<string>("departmentName") } into m
                                select new
                                {
                                    departmentName = m.Key.t1,
                                    keyboardCount = m.Sum(n => n.Field<int>("keyboardCount"))
                                };

                    if (query.ToList().Count > 0)
                    {
                        query.ToList().ForEach(q =>
                        {
                            dtResult.Rows.Add(q.departmentName,q.keyboardCount);
                        });
                    }
                }

                return dtResult;
            }
            catch (Exception ex)
            {
                return new DataTable();
            }

        }
        #endregion

        #region  //新接口 时间段内鼠标点击数报表
        /// <summary>
        /// 时间段内鼠标点击数报表 
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        public DataTable getMouseTotalByTime(JObject passJson)
        {
            try
            {
                //定义返回值
                var dtResult = new DataTable();
                dtResult.Columns.AddRange(new[]{
                        new DataColumn("departmentName",typeof(string)), //部门名称
                        new DataColumn("leftCount",typeof(int)), //鼠标左键统计
                        new DataColumn("rightCount",typeof(int)), //鼠标右键统计
                        new DataColumn("bothCount",typeof(int)) //鼠标合计统计
                    }
                );

                sqlHelper sh = new sqlHelper();
                ISqlSugarClient db = sh.dbClient();

                if (passJson != null)
                {
                    string userIdList = passJson["userIdList"].ToString();
                    string level = passJson["level"].ToString();
                    string timeBegin = passJson["timeBegin"].ToString();
                    string timeEnd = passJson["timeEnd"].ToString();

                    #region //如果是人别，则特殊处理,统计后直接返回结果接口
                    if (level == "0")
                    {
                        string sql = "select userName as departmentName,sum(leftclickCount) as leftCount ,sum(rightclickCount) as rightclickCount" +
                                    " from tb_mouse m " +
                                    " inner join tb_Machine_user u on m.cpuId = u.cpuId " +
                                    " where m.createDate between '" + timeBegin + "' and '" + timeEnd + "' " +
                                    " and userId in (" + userIdList + ") " +
                                    " group by userName ,userId";

                        public_method.writeLog("getMouseTotalByTime", sql);//写日志
                        var dateResult = db.SqlQueryable<object>(sql).ToDataTable();
                        return dateResult;
                    }
                    #endregion

                    //按人进行统计
                    string sqlDataByPerson = "select userId,m.cpuId,u.userName,u.belongsId,departmentName,level,sum(leftclickCount) as leftCount ,sum(rightclickCount) as rightCount" +
                                    "  from tb_mouse m " +
                                    "  inner join tb_Machine_user u on m.cpuId = u.cpuId  and u.flag = 1 " +
                                    "  inner join public_department d on u.belongsId = d.departmentId and d.flag = 1 " +
                                    "  where m.createDate between '" + timeBegin + "' and '" + timeEnd + "' " +
                                    "  and userId in (" + userIdList + ") " +
                                    "  group by userId,m.cpuid,u.userName,u.belongsId,level,departmentName ";
                    public_method.writeLog("getMouseTotalByTime", sqlDataByPerson);//写日志
                    var countByPerson = db.SqlQueryable<object>(sqlDataByPerson).ToDataTable();

                    //整理部门，都推到要统计的级别
                    countByPerson = regularLevel(countByPerson,level);

                    //定义一个新dt准备放需要的字段
                    var dt = new DataTable();
                    dt.Columns.AddRange(new[]
                    {
                        new DataColumn("departmentName",typeof(string)),
                        new DataColumn("leftCount",typeof(int)),
                        new DataColumn("rightCount",typeof(int))
                    });

                    //逐个人的数据循环，把每个人的部门都归集到将要统计的级别
                    for (int i = 0; i < countByPerson.Rows.Count; i++)
                    {
                        //把归集好的人别统计数据放到新dt 此时的部门已经计算到了要统计的级别 （理论上不存在有人级别高于要统计的级别，前端会过滤，如果前端失误了，直接按较高级别统计就是了，结果也可理解）
                        dt.Rows.Add(countByPerson.Rows[i]["departmentName"].ToString(), int.Parse(countByPerson.Rows[i]["leftCount"].ToString()), int.Parse(countByPerson.Rows[i]["rightCount"].ToString()));
                    }

                    //linq对数据集进行按部门统计
                    var query = from t in dt.AsEnumerable()
                                group t by new { t1 = t.Field<string>("departmentName") } into m
                                select new
                                {
                                    departmentName = m.Key.t1,
                                    leftCount = m.Sum(n => n.Field<int>("leftCount")),
                                    rightCount = m.Sum(n => n.Field<int>("rightCount")),
                                    bothCount = m.Sum(n => n.Field<int>("leftCount")) + m.Sum(n => n.Field<int>("rightCount"))
                                };

                    if (query.ToList().Count > 0)
                    {
                        query.ToList().ForEach(q =>
                        {
                            dtResult.Rows.Add(q.departmentName, q.leftCount,q.rightCount, q.bothCount);
                        });
                    }
                }
                return dtResult;
            }
            catch (Exception ex)
            {
                return new DataTable();
            }

        }
        #endregion

        #region  //新接口 时间范围软件使用时间榜单
        /// <summary>
        /// 时间范围软件使用时间榜单 
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        public DataTable getAppCharts(JObject passJson)
        {
            try
            {
                sqlHelper sh = new sqlHelper();
                ISqlSugarClient db = sh.dbClient();
                string sql = "";
                if (passJson != null)
                {
                    string userIdList = passJson["userIdList"].ToString();
                    string timeBegin = passJson["timeBegin"].ToString();
                    string timeEnd = passJson["timeEnd"].ToString();

                    sql = "select appName,sum(usedSeconds) as usedSeconds" +
                        " from tb_pages p " +
                        " inner join tb_Machine_user u on p.cpuId = u.cpuId " +
                        " where p.createDate between '" + timeBegin + "' and '" + timeEnd + "' " +
                        " and userId in (" + userIdList + ") " +
                        " group by appName ";
                }

                public_method.writeLog("getAppCharts", sql);//写日志
                var dateResult = db.SqlQueryable<object>(sql).OrderBy("usedSeconds desc").ToDataTablePage(1,10);
                return dateResult;
            }
            catch (Exception ex)
            {
                return new DataTable();
            }
        }
        #endregion

        #region  //新接口 当前使用软件展示
        /// <summary>
        /// 时间范围软件使用时间榜单 
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        public DataTable getAppNow(JObject passJson)
        {
            try
            {
                sqlHelper sh = new sqlHelper();
                ISqlSugarClient db = sh.dbClient();
                string sql = "";
                if (passJson != null)
                {
                    string userIdList = passJson["userIdList"].ToString();
                    string timeBegin = passJson["timeBegin"].ToString();
                    string timeEnd = passJson["timeEnd"].ToString();

                    sql = "select userName,appName,createDate from " +
                        " ( " +
                        "   select userName,appName,p.createDate, ROW_NUMBER() over(partition by p.cpuId order by p.createDate desc) rowNo " +
                        "   from tb_pages p   " +
                        "   inner join tb_Machine_user u on p.cpuId = u.cpuId   " +
                        "   where p.createDate between '" + timeBegin + "' and '" + timeEnd + "' " +
                        "   and userId in (" + userIdList + ") " +
                        " ) t " +
                        " where rowNo = 1 ";
                }

                public_method.writeLog("getAppNow", sql);//写日志
                var dateResult = db.SqlQueryable<object>(sql).OrderBy("createDate desc").ToDataTablePage(1, 10);
                return dateResult;
            }
            catch (Exception ex)
            {
                return new DataTable();
            }
        }
        #endregion

        #region  //新接口 时刻工作量对比
        /// <summary>
        /// 时刻工作量对比 
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        public DataTable getWorkGroupByHour(JObject passJson)
        {
            try
            {
                //定义返回值
                var dtResult = new DataTable();
                dtResult.Columns.AddRange(new[]{
                        new DataColumn("departmentName",typeof(string)), //部门名称
                        new DataColumn("departmentId",typeof(int)), //部门名称
                        new DataColumn("hour",typeof(int)), //部门名称
                        new DataColumn("actionCount",typeof(string)), //动作统计
                    }
                );

                sqlHelper sh = new sqlHelper();
                ISqlSugarClient db = sh.dbClient();

                if (passJson != null)
                {
                    string userIdList = passJson["userIdList"].ToString();
                    string level = passJson["level"].ToString();
                    string timeBegin = passJson["timeBegin"].ToString();
                    string timeEnd = passJson["timeEnd"].ToString();

                    #region //如果是人别，则特殊处理,统计后直接返回结果接口
                    if (level == "0")
                    {
                        string sql = "select h.userId as departmentId,h.userName as departmentName,h.hour" +
                                    " ,case when (h.hour > datepart(hour, GETDATE()) and datediff(day,getdate(),'" + timeBegin + "' ) = 0) then null else (isnull(m.leftCount, 0) + isnull(m.rightclickCount, 0) + isnull(k.keyboardCount, 0)) end AS actionCount " +
                                    " from " +
                                    " ( " +
                                    "   select hour,username,userId" +
                                    "   from sys_hour h cross join tb_Machine_user u  " +
                                    "   where userId in (" + userIdList + ") and  u.flag = 1 " +
                                    " ) h " +
                                    " left join  " +
                                    " (  " +
                                    "   select userName,userId,datepart(hour,m.createDate) as hour,sum(leftclickCount) as leftCount ,sum(rightclickCount) as rightclickCount " +
                                    "   from tb_mouse m " +
                                    "   inner join tb_Machine_user u on m.cpuId = u.cpuId " +
                                    "   where m.createDate between '" + timeBegin + "' and '" + timeEnd + "' " +
                                    "   and userId in (" + userIdList + ") " +
                                    "   group by userName,userId,datepart(hour,m.createDate) " +
                                    " ) m on h.userId = m.userId and h.hour = m.hour   " +
                                    " left join   " +
                                    " (   " +
                                    "   select userName,userId,datepart(hour,k.createDate) as hour ,sum(len(inputText)) as keyboardCount     " +
                                    "   from tb_keyboard k " +
                                    "   inner join tb_Machine_user u on k.cpuId = u.cpuId " +
                                    "   where k.createDate between '" + timeBegin + "' and '" + timeEnd + "' " +
                                    "   and userId in (" + userIdList + ") " +
                                    "   group by userName,userId,datepart(hour,k.createDate)  " +
                                    " ) k on h.userId = k.userId and h.hour = k.hour   " ;

                        public_method.writeLog("getWorkGroupByHour", sql);//写日志
                        var dateResult = db.SqlQueryable<object>(sql).OrderBy("hour asc").ToDataTable();
                        return dateResult;
                    }
                    #endregion

                    //按人进行统计
                    string sqlDataByPerson = "select h.userId,h.userName,h.hour" +
                                            " ,isnull(m.leftCount,0) + isnull(m.rightclickCount,0) + isnull(k.keyboardCount,0) as actionCount,belongsId,departmentName,level  " +
                                            " from " +
                                            " ( " +
                                            "   select hour,username,userId,u.belongsId,departmentName,level " +
                                            "   from sys_hour h cross join tb_Machine_user u  " +
                                            "   inner join public_department d on u.belongsId = d.departmentId and d.flag = 1  " +
                                            "   where userId in (" + userIdList + ") and u.flag = 1 " +
                                            " ) h " +
                                            " left join  " +
                                            " (  " +
                                            "   select userName,userId,datepart(hour,m.createDate) as hour,sum(leftclickCount) as leftCount ,sum(rightclickCount) as rightclickCount " +
                                            "   from tb_mouse m " +
                                            "   inner join tb_Machine_user u on m.cpuId = u.cpuId " +
                                            "   where m.createDate between '" + timeBegin + "' and '" + timeEnd + "' " +
                                            "   and userId in (" + userIdList + ") " +
                                            "   group by userName,userId,datepart(hour,m.createDate) " +
                                            " ) m on h.userId = m.userId and h.hour = m.hour   " +
                                            " left join   " +
                                            " (   " +
                                            "   select userName,userId,datepart(hour,k.createDate) as hour ,sum(len(inputText)) as keyboardCount     " +
                                            "   from tb_keyboard k " +
                                            "   inner join tb_Machine_user u on k.cpuId = u.cpuId " +
                                            "   where k.createDate between '" + timeBegin + "' and '" + timeEnd + "' " +
                                            "   and userId in (" + userIdList + ") " +
                                            "   group by userName,userId,datepart(hour,k.createDate)  " +
                                            " ) k on h.userId = k.userId and h.hour = k.hour   ";
                    public_method.writeLog("getWorkGroupByHour", sqlDataByPerson);//写日志
                    var countByPerson = db.SqlQueryable<object>(sqlDataByPerson).OrderBy("userId,hour asc").ToDataTable();

                    //整理部门，都推到要统计的级别
                    countByPerson = regularLevel(countByPerson, level);

                    //定义一个新dt准备放需要的字段
                    var dt = new DataTable();
                    dt.Columns.AddRange(new[]
                    {
                        new DataColumn("departmentName",typeof(string)),
                        new DataColumn("departmentId",typeof(int)),
                        new DataColumn("hour",typeof(int)),
                        new DataColumn("actionCount",typeof(int))
                    });

                    //逐个人的数据循环，把每个人的部门都归集到将要统计的级别
                    for (int i = 0; i < countByPerson.Rows.Count; i++)
                    {
                        //把归集好的人别统计数据放到新dt 此时的部门已经计算到了要统计的级别
                        dt.Rows.Add(countByPerson.Rows[i]["departmentName"].ToString(), int.Parse(countByPerson.Rows[i]["belongsId"].ToString()), int.Parse(countByPerson.Rows[i]["hour"].ToString()), int.Parse(countByPerson.Rows[i]["actionCount"].ToString()));
                    }

                    //linq对数据集进行按部门统计
                    var query = from t in dt.AsEnumerable()
                                group t by new { t1 = t.Field<string>("departmentName"), t2 = t.Field<int>("departmentId"), t3 = t.Field<int>("hour") } into m
                                orderby m.Key.t3
                                select new
                                {
                                    departmentName = m.Key.t1,
                                    departmentId = m.Key.t2,
                                    hour = m.Key.t3,
                                    actionCount = m.Sum(n => n.Field<int>("actionCount"))
                                };

                    int nowHour = int.Parse(DateTime.Now.Hour.ToString());

                    if (query.ToList().Count > 0)
                    {
                        query.ToList().ForEach(q =>
                        {
                            if(q.hour > nowHour  && DateTime.Parse(timeBegin) == DateTime.Parse(DateTime.Now.ToShortDateString().ToString()))
                            {
                                dtResult.Rows.Add(q.departmentName, q.departmentId, q.hour, null);
                            }
                            else
                            {
                                dtResult.Rows.Add(q.departmentName, q.departmentId, q.hour, q.actionCount);
                            }
                        });
                    }
                }
                return dtResult;
            }
            catch (Exception ex)
            {
                return new DataTable();
            }

        }
        #endregion

        #region  //新接口 时刻工作效率对比
        /// <summary>
        /// 时刻工作效率对比 
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        public DataTable getEfficiencyGroupByHour(JObject passJson)
        {
            try
            {
                //定义返回值
                var dtResult = new DataTable();
                dtResult.Columns.AddRange(new[]{
                        new DataColumn("departmentName",typeof(string)), //部门名称
                        new DataColumn("departmentId",typeof(int)), //部门Id
                        new DataColumn("efficiency",typeof(int)), //效率
                    }
                );

                sqlHelper sh = new sqlHelper();
                ISqlSugarClient db = sh.dbClient();

                if (passJson != null)
                {
                    string userIdList = passJson["userIdList"].ToString();
                    string level = passJson["level"].ToString();
                    string timeBegin = passJson["timeBegin"].ToString();
                    string timeEnd = passJson["timeEnd"].ToString();

                    #region //如果是人别，则特殊处理,统计后直接返回结果接口
                    if (level == "0")
                    {
                        string sql = "select p.userId as departmentId,p.userName as departmentName,(isnull(m.leftCount,0) + isnull(m.rightclickCount,0) + isnull(k.keyboardCount,0)) * 60 / isnull(usedSeconds,0) as efficiency " +
                                    " from " +
                                    " ( " +
                                    "   select userName,userId,sum(usedSeconds) as usedSeconds " +
                                    "   from tb_pages p  " +
                                    "   inner join tb_Machine_user u on p.cpuId = u.cpuId  " +
                                    "   where p.createDate between '" + timeBegin + "' and '" + timeEnd + "' " +
                                    "   and userId in (" + userIdList + ") " +
                                    "   group by userName,userId  " +
                                    " ) p " +
                                    " left join  " +
                                    " (  " +
                                    "   select userName,userId,sum(leftclickCount) as leftCount ,sum(rightclickCount) as rightclickCount " +
                                    "   from tb_mouse m " +
                                    "   inner join tb_Machine_user u on m.cpuId = u.cpuId " +
                                    "   where m.createDate between '" + timeBegin + "' and '" + timeEnd + "' " +
                                    "   and userId in (" + userIdList + ") " +
                                    "   group by userName,userId " +
                                    " ) m on p.userId = m.userId " +
                                    " left join   " +
                                    " (   " +
                                    "   select userName,userId,sum(len(inputText)) as keyboardCount     " +
                                    "   from tb_keyboard k " +
                                    "   inner join tb_Machine_user u on k.cpuId = u.cpuId " +
                                    "   where k.createDate between '" + timeBegin + "' and '" + timeEnd + "' " +
                                    "   and userId in (" + userIdList + ") " +
                                    "   group by userName,userId  " +
                                    " ) k on p.userId = k.userId   ";

                        public_method.writeLog("getEfficiencyGroupByHour", sql);//写日志
                        var dateResult = db.SqlQueryable<object>(sql).ToDataTable();
                        return dateResult;
                    }
                    #endregion

                    //按人进行统计
                    string sqlDataByPerson = "select e.userId,e.userName,e.efficiency,u.belongsId,departmentName,level  " +
                                            " from " +
                                            " ( " +
                                            "   select p.userId,p.userName,(isnull(m.leftCount,0) + isnull(m.rightclickCount,0) + isnull(k.keyboardCount,0)) * 60 / isnull(usedSeconds,0) as efficiency " +
                                            "   from " +
                                            "   ( " +
                                            "       select userName,userId,sum(usedSeconds) as usedSeconds " +
                                            "       from tb_pages p " +
                                            "       inner join tb_Machine_user u on p.cpuId = u.cpuId " +
                                            "       where p.createDate between '" + timeBegin + "' and '" + timeEnd + "' " +
                                            "       and userId in (" + userIdList + ") " +
                                            "       group by userName,userId " +
                                            "   ) p " +
                                            "   left join " +
                                            "   ( " +
                                            "       select userName,userId,sum(leftclickCount) as leftCount ,sum(rightclickCount) as rightclickCount" +
                                            "       from tb_mouse m " +
                                            "       inner join tb_Machine_user u on m.cpuId = u.cpuId" +
                                            "       where m.createDate between '" + timeBegin + "' and '" + timeEnd + "' " +
                                            "       and userId in (" + userIdList + ") " +
                                            "       group by userName,userId " +
                                            "   ) m on p.userId = m.userId " +
                                            "   left join " +
                                            "   ( " +
                                            "       select userName,userId,sum(len(inputText)) as keyboardCount " +
                                            "       from tb_keyboard k " +
                                            "       inner join tb_Machine_user u on k.cpuId = u.cpuId " +
                                            "       where k.createDate between '" + timeBegin + "' and '" + timeEnd + "' " +
                                            "       and userId in (" + userIdList + ") " +
                                            "       group by userName,userId " +
                                            "   ) k on p.userId = k.userId  " +
                                            " ) e " +
                                            " inner join tb_Machine_user u on e.userId = u.userId and u.flag = 1 " +
                                            " inner join public_department d on u.belongsId = d.departmentId and d.flag = 1 ";
                    public_method.writeLog("getEfficiencyGroupByHour", sqlDataByPerson);//写日志
                    var countByPerson = db.SqlQueryable<object>(sqlDataByPerson).ToDataTable();

                    //整理部门，都推到要统计的级别
                    countByPerson = regularLevel(countByPerson, level);

                    //定义一个新dt准备放需要的字段
                    var dt = new DataTable();
                    dt.Columns.AddRange(new[]
                    {
                        new DataColumn("departmentName",typeof(string)),
                        new DataColumn("departmentId",typeof(int)),
                        new DataColumn("efficiency",typeof(int))
                    });

                    //逐个人的数据循环，把每个人的部门都归集到将要统计的级别
                    for (int i = 0; i < countByPerson.Rows.Count; i++)
                    {
                        //把归集好的人别统计数据放到新dt 此时的部门已经计算到了要统计的级别 （理论上不存在有人级别高于要统计的级别，前端会过滤，如果前端失误了，直接按较高级别统计就是了，结果也可理解）
                        dt.Rows.Add(countByPerson.Rows[i]["departmentName"].ToString(), int.Parse(countByPerson.Rows[i]["belongsId"].ToString()), int.Parse(countByPerson.Rows[i]["efficiency"].ToString()));
                    }

                    //linq对数据集进行按部门统计
                    var query = from t in dt.AsEnumerable()
                                group t by new { t1 = t.Field<string>("departmentName"), t2 = t.Field<int>("departmentId")} into m
                                select new
                                {
                                    departmentName = m.Key.t1,
                                    departmentId = m.Key.t2,
                                    efficiency = m.Average(n => n.Field<int>("efficiency"))
                                };

                    if (query.ToList().Count > 0)
                    {
                        query.ToList().ForEach(q =>
                        {
                            dtResult.Rows.Add(q.departmentName, q.departmentId, q.efficiency);
                        });
                    }
                }
                return dtResult;
            }
            catch (Exception ex)
            {
                return new DataTable();
            }

        }
        #endregion

        #region  //新接口 时间范围内粘贴次数
        /// <summary>
        /// 时间段内粘贴次数 
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        public DataTable getPasteTotalByTime(JObject passJson)
        {
            try
            {
                //定义返回值
                var dtResult = new DataTable();
                dtResult.Columns.AddRange(new[]{
                        new DataColumn("departmentName",typeof(string)), //部门名称
                        new DataColumn("pasteCount",typeof(int)) //粘贴次数统计
                    }
                );

                sqlHelper sh = new sqlHelper();
                ISqlSugarClient db = sh.dbClient();

                if (passJson != null)
                {
                    string userIdList = passJson["userIdList"].ToString();
                    string level = passJson["level"].ToString();
                    string timeBegin = passJson["timeBegin"].ToString();
                    string timeEnd = passJson["timeEnd"].ToString();

                    #region //如果是人别，则特殊处理,统计后直接返回结果接口
                    if (level == "0")
                    {
                        string sql = "select userName as departmentName,count(id) as pasteCount " +
                                    " from tb_special s " +
                                    " inner join tb_Machine_user u on s.cpuId = u.cpuId " +
                                    " where s.createDate between '" + timeBegin + "' and '" + timeEnd + "' " +
                                    " and userId in (" + userIdList + ") " +
                                    " group by userName,userId ";

                        public_method.writeLog("getPasteTotalByTime", sql);//写日志
                        var dateResult = db.SqlQueryable<object>(sql).ToDataTable();
                        return dateResult;
                    }
                    #endregion

                    //按人进行统计
                    string sqlDataByPerson = "select userId,s.cpuId,u.userName,u.belongsId,departmentName,level,count(id) as pasteCount" +
                                    "  from tb_special s " +
                                    "  inner join tb_Machine_user u on s.cpuId = u.cpuId  and u.flag = 1 " +
                                    "  inner join public_department d on u.belongsId = d.departmentId and d.flag = 1 " +
                                    "  where s.createDate between '" + timeBegin + "' and '" + timeEnd + "' " +
                                    "  and userId in (" + userIdList + ") " +
                                    "  group by userId,s.cpuid,u.userName,u.belongsId,level,departmentName ";
                    public_method.writeLog("getPasteTotalByTime", sqlDataByPerson);//写日志
                    var countByPerson = db.SqlQueryable<object>(sqlDataByPerson).ToDataTable();

                    //整理部门，都推到要统计的级别
                    countByPerson = regularLevel(countByPerson, level);

                    //定义一个新dt准备放需要的字段
                    var dt = new DataTable();
                    dt.Columns.AddRange(new[]
                    {
                        new DataColumn("departmentName",typeof(string)),
                        new DataColumn("pasteCount",typeof(int))
                    });

                    //逐个人的数据循环，把每个人的部门都归集到将要统计的级别
                    for (int i = 0; i < countByPerson.Rows.Count; i++)
                    {
                        dt.Rows.Add(countByPerson.Rows[i]["departmentName"].ToString(), int.Parse(countByPerson.Rows[i]["pasteCount"].ToString())); //把归集好的人别统计数据放到新dt 此时的部门已经计算到了要统计的级别 （理论上不存在有人级别高于要统计的级别，前端会过滤，如果前端失误了，直接按较高级别统计就是了，结果也可理解）
                    }

                    //linq对数据集进行按部门统计
                    var query = from t in dt.AsEnumerable()
                                group t by new { t1 = t.Field<string>("departmentName") } into m
                                select new
                                {
                                    departmentName = m.Key.t1,
                                    pasteCount = m.Sum(n => n.Field<int>("pasteCount"))
                                };

                    if (query.ToList().Count > 0)
                    {
                        query.ToList().ForEach(q =>
                        {
                            dtResult.Rows.Add(q.departmentName, q.pasteCount);
                        });
                    }
                }

                return dtResult;
            }
            catch (Exception ex)
            {
                return new DataTable();
            }

        }
        #endregion

        #region  //新接口 复制关系排行（内容依赖分析）
        /// <summary>
        /// 复制关系排名 
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        public DataTable getContentRely(JObject passJson)
        {
            try
            {
                sqlHelper sh = new sqlHelper();
                ISqlSugarClient db = sh.dbClient();
                var dateResult = new DataTable();

                if (passJson != null)
                {
                    string userIdList = passJson["userIdList"].ToString();
                    string timeBegin = passJson["timeBegin"].ToString();
                    string timeEnd = passJson["timeEnd"].ToString();
                    string top = passJson["top"].ToString();

                    string sql = " select top  " + top + " copyFromWindowTitle + '(' + replace(copyFromAppName, '.exe', '') + ')' as copyFrom,  windowTitle + '(' + replace(appName, '.exe', '') + ')' as copyTo,count(*) as totalCount" +
                                " from tb_special s inner join tb_Machine_user u on u.cpuId = s.cpuId and u.flag = 1 " +
                                " where copyflag = 1  " +
                                " and s.createDate between '" + timeBegin + "' and '" + timeEnd + "' " +
                                " and userId in (" + userIdList + ") " +
                                " group by copyFromAppName,copyFromWindowTitle,appName,windowTitle ";

                    public_method.writeLog("getContentRely", sql);//写日志
                    dateResult = db.SqlQueryable<object>(sql).OrderBy("totalCount desc").ToDataTable();
                }
                return dateResult;
            }
            catch (Exception ex)
            {
                return new DataTable();
            }

        }
        #endregion

        #region 统一部门层级的方法
        private DataTable regularLevel(DataTable countByPerson, string level)
        {
            sqlHelper sh = new sqlHelper();
            ISqlSugarClient db = sh.dbClient();

            //找出级别低于要统计级别的所有部门，并拿到其上级部门名
            string sqlGetDepInfo = " select  s.departmentId,s.level,s.belongsId,f.departmentName as fDepartmentName " +
                            " from public_department s inner join public_department f on s.belongsId = f.departmentId and f.flag = 1 " +
                            " where s.flag = 1 and s.level > " + level;
            public_method.writeLog("getMouseTotalByTime", sqlGetDepInfo);//写日志
            var depInfo = db.SqlQueryable<object>(sqlGetDepInfo).ToDataTable();

            for (int i = 0; i < countByPerson.Rows.Count; i++)
            {
                //若所在部门级别较低，需要继续向上推，直到计算出要统计的级别
                while (int.Parse(countByPerson.Rows[i]["level"].ToString()) > int.Parse(level)) 
                {
                    for (int j = 0; j < depInfo.Rows.Count; j++)
                    {
                        if (countByPerson.Rows[i]["belongsId"].ToString() == depInfo.Rows[j]["departmentId"].ToString())
                        {
                            countByPerson.Rows[i]["belongsId"] = depInfo.Rows[j]["belongsId"];
                            countByPerson.Rows[i]["departmentName"] = depInfo.Rows[j]["fDepartmentName"];
                            countByPerson.Rows[i]["level"] = int.Parse(countByPerson.Rows[i]["level"].ToString()) - 1;
                            break;
                        }
                    }
                }
            }
            return countByPerson;
        }
        #endregion
    }
}
