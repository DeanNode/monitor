using SqlSugar;
using Sugar.Enties;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Management;
using System.Web.Script.Serialization;
using WebApplication11.EF.mySysClass;

namespace WebApplication11.App_Start
{
    public class public_method
    {
        /**
         * 获得当前时间年月日时分秒之后加上一个随机的时间戳
         */
        public static string getRadNum(string strType)
        {
            Random ran = new Random();
            string strReturn = strType + System.DateTime.Now.ToString("yyyyMMddHHmmss") 
                + ran.Next(1000, 9999).ToString();
            return strReturn;
        }

        public static string get_op_sql(string op)
        {
            string strReturn = "";
            if (op == "equal")
            {
                strReturn = "=";
            }
            else if (op == "greaterorequal")
            {
                strReturn = ">=";
            }
            else if (op == "greater")
            {
                strReturn = ">";
            }
            else if (op == "lessorequal")
            {
                strReturn = "<=";
            }
            else if (op == "less")
            {
                strReturn = "<";
            }
            else
            {
                strReturn = op;
            }
            return strReturn;
        }
        public static string get_op_sql(string op,string Value)
        {
            string strReturn = "";
            if (op == "equal")
            {
                strReturn = " = '"+Value+"'";
            }
            else if (op == "like")
            {
                strReturn = " like '%" + Value + "%'";
            }
            else if (op == "greaterorequal")
            {
                strReturn = " >= "+Value;
            }
            else if (op == "greater")
            {
                strReturn = " > "+Value;
            }
            else if (op == "lessorequal")
            {
                strReturn = " <= "+Value;
            }
            else if (op == "less")
            {
                strReturn = " < "+Value;
            }
            else
            {
                strReturn = op;
            }
            return strReturn;
        }

        public static string get_opTimeReset_sql(string op, string Value)
        {
            string strReturn = "";
            if (op == "equal")
            {
                strReturn = " = '" + Value + "'";
            }
            else if (op == "like")
            {
                strReturn = " like '%" + Value + "%'";
            }
            else if (op == "greaterorequal")
            {
                strReturn = " >= " + Value;
            }
            else if (op == "greater")
            {
                strReturn = " > " + Value;
            }
            else if (op == "lessorequal")
            {
                strReturn = " <= " + Value;
            }
            else if (op == "less")
            {
                strReturn = " < " + Value;
            }
            else if (op == "startdatetime")
            {
                strReturn = " >=  '" + Value +" 00:00:00' ";
            }
            else if (op == "enddatetime")
            {
                strReturn = " <= '" + Value +" 23:59:59' ";
            }
            else if (op == "less")
            {
                strReturn = " < " + Value;
            }
            else 
            {
                strReturn = op;
            }
            return strReturn;
        }

        /// <summary>
        /// 传递一个sys_log对象进行插入数据库
        /// </summary>
        /// <param name="sys_log"></param>
        /// <returns></returns>
        public static int saveLog(sys_log sys_log) {
            int iReturn = 0;
            try
            {
                sqlHelper sh = new sqlHelper();
                ISqlSugarClient db = sh.dbClient();
                sys_log.createDate = System.DateTime.Now;
                iReturn =db.Insertable(sys_log).ExecuteCommand();
            }
            catch(Exception ex) {
            }
            return iReturn;
        }

        public static string getCurrDateTime() {

            return System.DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss");
        }
        public static string getCurrDate()
        {

            return System.DateTime.Now.ToString("yyyy-MM-dd");
        }

        /// <summary>
        /// 获取客户端IP地址
        /// </summary>
        /// <returns></returns>
        public static string GetIPAddress()
        {
            string code = null;
            SelectQuery query = new SelectQuery("select * from Win32_ComputerSystemProduct");
            using (ManagementObjectSearcher searcher = new ManagementObjectSearcher(query))
            {
                foreach (var item in searcher.Get())
                {
                    using (item) code = item["UUID"].ToString();
                    if (code != "") {
                        break;
                    }
                }
            }
            return code;
        }

        public static sysLoginInCls getLoginInObject() {
            sysLoginInCls si = null;
            string ip = GetIPAddress();
            for (var i = 0; i < MvcApplication.l_sysLoginInCls.Count; i++)
            {
                if (MvcApplication.l_sysLoginInCls[i].loginInIp == ip)
                {
                    si = MvcApplication.l_sysLoginInCls[i];
                    break;
                }
            }
            try
            {
                if (si == null){
                    System.Web.HttpContext.Current.Response.Redirect("/login/index");
                }
            } catch (Exception x) {
                Console.Write(x.Message);
            }
            return si;

        }

        public static void writeLog(string keyName,string sql)
        {
            //这里把查询的语句记录到内存中
            sysSearchSql sss = new sysSearchSql();
            sss.loginInIp = public_method.GetIPAddress();
            sss.gridkey = keyName;//这里记录一下
            sss.sql = sql;

            MvcApplication.setsysSearchSql(sss);
        }
        

        #region
        /// <summary>
        /// Json 字符串 转换为 DataTable数据集合
        /// </summary>
        /// <param name="json"></param>
        /// <returns></returns>
        public static DataTable ToDataTableTwo(string json)
        {
            DataTable dataTable = new DataTable();  //实例化
            DataTable result;
            try
            {
                JavaScriptSerializer javaScriptSerializer = new JavaScriptSerializer();
                javaScriptSerializer.MaxJsonLength = Int32.MaxValue; //取得最大数值
                ArrayList arrayList = javaScriptSerializer.Deserialize<ArrayList>(json);
                if (arrayList.Count > 0)
                {
                    foreach (Dictionary<string, object> dictionary in arrayList)
                    {
                        if (dictionary.Keys.Count<string>() == 0)
                        {
                            result = dataTable;
                            return result;
                        }
                        //Columns
                        if (dataTable.Columns.Count == 0)
                        {
                            foreach (string current in dictionary.Keys)
                            {
                                dataTable.Columns.Add(current, dictionary[current].GetType());
                            }
                        }
                        //Rows
                        DataRow dataRow = dataTable.NewRow();
                        foreach (string current in dictionary.Keys)
                        {
                            dataRow[current] = dictionary[current];
                        }
                        dataTable.Rows.Add(dataRow); //循环添加行到DataTable中
                    }
                }
            }
            catch
            {
            }
            result = dataTable;
            return result;
        }
        #endregion
    }
}