using Microsoft.Ajax.Utilities;
using Newtonsoft.Json.Linq;
using SqlSugar;
using Sugar.Enties;
using System;
using System.Collections.Generic;
using System.Data;
using System.Management;
using System.Web.Http;
using WebApplication11.App_Start;
using WebApplication11.EF.mySysClass;

namespace WebApplication11.Controllers
{
    public class webapiMainController : ApiController
    {

        [HttpGet]
        public returnR checkAction()
        {

            returnR rr = new returnR();
            sysLoginInCls si = public_method.getLoginInObject();
            if (si == null)
            {
                rr.code = -1;//掉线了
            }
            else {
                rr.code = 1;//有效

            }
            return rr;
        }

        [HttpGet]
        public object search()
        {
            sqlHelper sh = new sqlHelper();
            var list = sh.dbClient().Queryable<sys_user>().ToList();//查询所有
            return list;

        }

        /// <summary>
        /// 登录
        /// </summary>
        /// <param name="username"></param>
        /// <param name="psw"></param>
        /// <param name="yzm"></param>
        /// <returns></returns>
        [HttpPost]
        public returnR login(JObject passJson)
        {
            returnR r = new returnR();
            r.code = (int)sysEnum.还没有执行;
            
            try {

                string userName = passJson["userName"].ToString();
                if (string.IsNullOrEmpty(userName)){
                    r.code = (int)sysEnum.参数必填;
                    return r;
                }
                string psw= passJson["psw"].ToString();
                if (string.IsNullOrEmpty(psw))
                {
                    r.code = (int)sysEnum.参数必填;
                    return r;
                }

                psw = DES_En_De.UserMd5(psw);
                string isAdmin = passJson["isAdmin"].ToString();
                if (string.IsNullOrEmpty(isAdmin))
                {
                    isAdmin ="false";
                }

                sqlHelper sh = new sqlHelper();
                if (isAdmin.ToLower() == "true")
                {
                    #region
                    DataTable loginTable = sh.dbClient().Queryable<sys_user>()
                    .Where(it => it.userName == userName && it.pwd == psw).ToDataTable();
                    if (loginTable == null || loginTable.Rows.Count <= 0)
                    {
                        r.code = (int)sysEnum.数据不存在;
                        r.msg = "账号或密码错误";
                        return r;
                    }
                    //这里是成成功的
                    string ip = public_method.GetIPAddress();
                    sysLoginInCls si = new sysLoginInCls();
                    si.loginInIp = ip;
                    si.loginUserId = int.Parse(loginTable.Rows[0]["userId"].ToString());
                    si.userName = loginTable.Rows[0]["userName"].ToString();
                    si.roleId = loginTable.Rows[0]["roleId"].ToString();
                    si.dataRoleId = loginTable.Rows[0]["dataRoleId"].ToString();
                    si.loginIsAdmin = true;
                    si.mySubordinateList = "";

                    MvcApplication.setLoginInCls(si);
                    r.code = (int)sysEnum.操作成功;
                    r.data = si;
                    r.msg = "登录成功！";

                    #endregion
                }
                else {
                    DataTable loginTable = sh.dbClient().Queryable<tb_Machine_user>()
                    .Where(it => it.account == userName && it.psw == psw).ToDataTable();
                    if (loginTable == null || loginTable.Rows.Count <= 0)
                    {
                        r.code = (int)sysEnum.数据不存在;
                        r.msg = "账号或密码错误";
                        return r;
                    }
                    //这里是成成功的
                    string ip = public_method.GetIPAddress();
                    sysLoginInCls si = new sysLoginInCls();
                    si.loginInIp = ip;
                    si.loginIsAdmin = false;
                    si.loginUserId = int.Parse(loginTable.Rows[0]["userId"].ToString());
                    si.userName = loginTable.Rows[0]["userName"].ToString();
                    si.roleId = "15";
                    si.dataRoleId = loginTable.Rows[0]["belongsId"].ToString(); ;
                    si.managerFlag = loginTable.Rows[0]["managerFlag"].ToString();
                    si.mySubordinateList = "";
                    MvcApplication.setLoginInCls(si);
                    r.code = (int)sysEnum.操作成功;
                    r.data = si;
                    r.msg = "登录成功！";
                }
            }
            catch (Exception ex)
            {
                r.code = (int)sysEnum.发生异常;
                r.msg = "发生异常" + ex.Message;
                return r;
            }
            return r;
        }


        /// <summary>
        /// 登录
        /// </summary>
        /// <param name="username"></param>
        /// <param name="psw"></param>
        /// <param name="yzm"></param>
        /// <returns></returns>
        [HttpPost]
        public returnR login_employee(JObject passJson)
        {
            returnR r = new returnR();
            r.code = (int)sysEnum.还没有执行;

            try
            {

                string account = passJson["account"].ToString();
                if (string.IsNullOrEmpty(account))
                {
                    r.code = (int)sysEnum.参数必填;
                    return r;
                }
                string psw = passJson["psw"].ToString();
                if (string.IsNullOrEmpty(psw))
                {
                    r.code = (int)sysEnum.参数必填;
                    return r;
                }

                psw = DES_En_De.UserMd5(psw);
                sqlHelper sh = new sqlHelper();
                DataTable loginTable = sh.dbClient().Queryable<tb_Machine_user>()
                    .Where(it => it.account == account && it.psw == psw).ToDataTable();
                if (loginTable == null || loginTable.Rows.Count <= 0)
                {
                    r.code = (int)sysEnum.数据不存在;
                    r.msg = "账号或密码错误";
                    return r;
                }
                //这里是成成功的
                string ip = public_method.GetIPAddress();
                sysLoginInCls si = new sysLoginInCls();
                si.loginInIp = ip;
                si.loginUserId = int.Parse(loginTable.Rows[0]["userId"].ToString());
                si.userName = loginTable.Rows[0]["userName"].ToString();
                si.belongsId = loginTable.Rows[0]["belongsId"].ToString();
                si.managerFlag = loginTable.Rows[0]["managerFlag"].ToString();

                if (si.managerFlag == "1")
                {
                    DataTable subList = getMySubordinateList(si.belongsId);//递归求得所有下级的userId
                    string mySubordinateList = "";
                    for (int i = 0; i < subList.Rows.Count; i++)
                    {
                        if (i > 0)
                        {
                            mySubordinateList += ",";
                        }
                        mySubordinateList += subList.Rows[i][0].ToString();
                    }
                    si.mySubordinateList = mySubordinateList;
                }
                else
                {
                    si.mySubordinateList = si.loginUserId.ToString();
                }


                MvcApplication.setLoginInCls(si);

                r.code = (int)sysEnum.操作成功;
                r.data = si;
                r.msg = "登录成功！";

            }
            catch (Exception ex)
            {
                r.code = (int)sysEnum.发生异常;
                r.msg = "发生异常" + ex.Message;
                return r;
            }

            return r;

        }

        /// <summary>
        /// 登录
        /// </summary>
        /// <param name="username"></param>
        /// <param name="psw"></param>
        /// <param name="yzm"></param>
        /// <returns></returns>
        [HttpGet]
        public returnR getSystemMenu(string role_id)
        {
            returnR r = new returnR();
            r.code = (int)sysEnum.还没有执行;
            if (string.IsNullOrEmpty(role_id)) {
                r.code= (int)sysEnum.参数必填;
                return r;
            }
            //这里执行
            try
            {
                sqlHelper sh = new sqlHelper();

            }
            catch(Exception ex) {
                r.code= (int)sysEnum.发生异常;
                r.msg = ex.Message;
            }

            return r;
        }

        #region 登录用户相关方法
        [HttpPost]
        public returnR userAdd(JObject userObj)
        {
            returnR r = new returnR();
            r.code = (int)sysEnum.还没有执行;
            if (userObj==null)
            {
                r.code = (int)sysEnum.参数必填;
                return r;
            }
            //这里执行
            try
            {
                #region 判断用户
                string username = userObj["userName"].ToString();
                if (string.IsNullOrEmpty(username)) {
                    r.code = (int)sysEnum.参数必填;
                    r.msg = "用户名称必填";
                    return r;
                }
                string pwd = userObj["psw"].ToString();
                if (string.IsNullOrEmpty(pwd))
                {
                    r.code = (int)sysEnum.参数必填;
                    r.msg = "用户密码必填";
                    return r;
                }
                
                sqlHelper sh = new sqlHelper();
                ISqlSugarClient db = sh.dbClient();

                
                var dataList = db.Queryable<sys_user>()
                    .Where(it => it.userName == username && it.flag ==1).ToList();
                if (dataList.Count > 0) {
                    r.code = (int)sysEnum.数据库中已经存在;
                    r.msg = "数据库中已存在[" + username + "]";
                    return r;
                }
                #endregion

                sysLoginInCls si= public_method.getLoginInObject();

                pwd = DES_En_De.UserMd5(pwd);//这里进行加密
                string realName = userObj["realName"].ToString();

                sys_user sys_user = new sys_user();
                sys_user.userName = username;
                sys_user.pwd = pwd;
                sys_user.realName = realName;
                sys_user.roleId= int.Parse(userObj["roleId"].ToString());
                sys_user.dataRoleId = int.Parse(userObj["dataRoleId"].ToString());
                sys_user.phone = userObj["phone"].ToString();
                sys_user.email = userObj["email"].ToString();
                sys_user.orderNum = int.Parse(userObj["orderNum"].ToString());
                sys_user.remarks= userObj["remarks"].ToString();
                sys_user.createUserId = si.loginUserId;
                sys_user.createDate = System.DateTime.Now; 
                sys_user.flag = 1;//默认开启
                //这里转换一下
                int iReturn= db.Insertable(sys_user).ExecuteCommand();
                if (iReturn > 0)
                {
                    r.code = (int)sysEnum.操作成功;
                    r.msg = "成功添加[" + username + "]";
                    #region //写日志
                    sys_log sys_log = new sys_log();
                    sys_log.logType = "新增";
                    sys_log.logText = Newtonsoft.Json.JsonConvert.SerializeObject(sys_user);
                    sys_log.createUserId = si.loginUserId;
                    public_method.saveLog(sys_log);
                    #endregion
                    return r;
                }
                else {
                    r.code = (int)sysEnum.执行数据库失败;
                    r.msg = "添加[" + username + "]失败";
                    return r;
                }

            }
            catch (Exception ex)
            {
                r.code = (int)sysEnum.发生异常;
                r.msg = ex.Message;
            }

            return r;
        }

        /// <summary>
        /// 更新用户信息
        /// </summary>
        /// <param name="userObj"></param>
        /// <returns></returns>
        [HttpPost]
        public returnR userUpdate(JObject userObj)
        {
            returnR r = new returnR();
            r.code = (int)sysEnum.还没有执行;
            if (userObj == null)
            {
                r.code = (int)sysEnum.参数必填;
                return r;
            }
            //这里执行
            try
            {
                
                #region 判断用户
                string userId= userObj["userId"].ToString();
                if (string.IsNullOrEmpty(userId))
                {
                    r.code = (int)sysEnum.参数必填;
                    r.msg = "userId必填";
                    return r;
                }
                string username = userObj["userName"].ToString();
                if (string.IsNullOrEmpty(username))
                {
                    r.code = (int)sysEnum.参数必填;
                    r.msg = "用户名称必填";
                    return r;
                }

                sqlHelper sh = new sqlHelper();
                ISqlSugarClient db = sh.dbClient();


                var dataList = db.Queryable<sys_user>()
                    .Where(it => it.userName == username && it.flag == 1 && it.userId.ToString()!= userId).ToList();
                if (dataList.Count > 0)
                {
                    r.code = (int)sysEnum.数据库中已经存在;
                    r.msg = "数据库中已存在[" + username + "]";
                    return r;
                }
                #endregion

                sysLoginInCls si = public_method.getLoginInObject();

                string realName = userObj["realName"].ToString();

                sys_user sys_user = new sys_user();
                sys_user.userId = int.Parse(userId);
                sys_user.userName = username;
                sys_user.realName = realName;
                sys_user.roleId = int.Parse(userObj["roleId"].ToString());
                sys_user.dataRoleId = int.Parse(userObj["dataRoleId"].ToString());
                sys_user.phone = userObj["phone"].ToString();
                sys_user.email = userObj["email"].ToString();
                sys_user.remarks = userObj["remarks"].ToString();
                sys_user.updateUserId = si.loginUserId;//更新人
                sys_user.updateDate = System.DateTime.Now;//更新时间
                sys_user.flag = 1;//默认开启
                //这里转换一下
                int iReturn = db.Updateable(sys_user)
                    .IgnoreColumns(it => new { it.createDate, it.createUserId , it.pwd}).ExecuteCommand();
                if (iReturn > 0)
                {
                    r.code = (int)sysEnum.操作成功;
                    r.msg = "更新[" + username + "]成功";
                    #region //写日志
                    sys_log sys_log = new sys_log();
                    sys_log.logType = "更新";
                    sys_log.logText = Newtonsoft.Json.JsonConvert.SerializeObject(sys_user);
                    sys_log.createUserId = si.loginUserId;
                    public_method.saveLog(sys_log);
                    #endregion
                    return r;
                }
                else
                {
                    r.code = (int)sysEnum.执行数据库失败;
                    r.msg = "更新[" + username + "]失败";
                    return r;
                }

            }
            catch (Exception ex)
            {
                r.code = (int)sysEnum.发生异常;
                r.msg = ex.Message;
            }

            return r;
        }

        /// <summary>
        /// 对用户进行删除
        /// </summary>
        /// <param name="userId"></param>
        /// <returns></returns>
        [HttpPost]
        public returnR userDel(JObject passJson)
        {
            returnR r = new returnR();
            r.code = (int)sysEnum.还没有执行;
            if (passJson==null)
            {
                r.code = (int)sysEnum.参数必填;
                return r;
            }
            //这里执行
            
            try
            {
                sysLoginInCls si = public_method.getLoginInObject();

                string userIdList = passJson["userIdList"].ToString();

                sqlHelper sh = new sqlHelper();
                ISqlSugarClient db = sh.dbClient();

                string[] useridArray = userIdList.Split(',');
                List<string> list = new List<string>();
                for (int i = 0; i < useridArray.Length; i++) {
                    list.Add(useridArray[i]);
                }

                int iReturn = db.Updateable<sys_user>()
                .SetColumns(it => new sys_user() {
                    flag = (int)sysEnum.数据被删除
                    ,updateUserId= si.loginUserId
                    , updateDate = DateTime.Now
                })
                .Where(it => list.Contains(it.userId.ToString())).ExecuteCommand();
                if (iReturn > 0)
                {
                    r.code = (int)sysEnum.操作成功;
                    r.msg = "成功删除用户";
                    #region //写日志
                    sys_log sys_log = new sys_log();
                    sys_log.logType = "删除";
                    sys_log.logText = "删除用户id[" + userIdList + "]";
                    sys_log.createUserId = si.loginUserId;
                    public_method.saveLog(sys_log);
                    #endregion
                    return r;
                }
                else
                {
                    r.code = (int)sysEnum.执行数据库失败;
                    r.msg = "删除用户失败";
                    return r;
                }

            }
            catch (Exception ex)
            {
                r.code = (int)sysEnum.发生异常;
                r.msg = ex.Message;
            }

            return r;
        }

        /// <summary>
        /// 更新用户密码
        /// </summary>
        /// <param name="userObj"></param>
        /// <returns></returns>
        [HttpPost]
        public returnR resetPsw(JObject userObj)
        {
            returnR r = new returnR();
            r.code = (int)sysEnum.还没有执行;
            if (userObj == null)
            {
                r.code = (int)sysEnum.参数必填;
                return r;
            }
            //这里执行
            try
            {
                #region 判断用户
                string userId = userObj["userId"].ToString();
                if (string.IsNullOrEmpty(userId))
                {
                    r.code = (int)sysEnum.参数必填;
                    r.msg = "userId必填";
                    return r;
                }
                
                string pwd = userObj["psw"].ToString();
                if (string.IsNullOrEmpty(pwd))
                {
                    r.code = (int)sysEnum.参数必填;
                    r.msg = "用户密码必填";
                    return r;
                }

                sqlHelper sh = new sqlHelper();
                ISqlSugarClient db = sh.dbClient();

                #endregion

                sysLoginInCls si = public_method.getLoginInObject();

                pwd = DES_En_De.UserMd5(pwd);//这里进行加密

                int iReturn = db.Updateable<sys_user>()
                .SetColumns(it => new sys_user()
                {
                    pwd = pwd
                    ,
                    updateUserId = si.loginUserId
                    ,
                    updateDate = DateTime.Now
                })
                .Where(it => it.userId.ToString() == userId).ExecuteCommand();
                if (iReturn > 0)
                {
                    r.code = (int)sysEnum.操作成功;
                    r.msg = "重置密码成功";
                    #region //写日志
                    sys_log sys_log = new sys_log();
                    sys_log.logType = "重置";
                    sys_log.logText = "重置用户id[" + userId + "]密码成功";
                    sys_log.createUserId = si.loginUserId;
                    public_method.saveLog(sys_log);
                    #endregion
                    return r;
                }
                else
                {
                    r.code = (int)sysEnum.执行数据库失败;
                    r.msg = "重置密码失败";
                    return r;
                }

            }
            catch (Exception ex)
            {
                r.code = (int)sysEnum.发生异常;
                r.msg = ex.Message;
            }

            return r;
        }

        /// <summary>
        /// 获取 sys_role信息 [{name: op: value }]
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        public List<object> getUserManger(JObject passJson)
        {
            try
            {
                sqlHelper sh = new sqlHelper();
                ISqlSugarClient db = sh.dbClient();

                string sql = "";
                sql += " select * from vw_userManger where 1=1";
                if (passJson != null) {
                    JArray passSearchJarry = JArray.Parse(passJson["centerSearchArray"].ToString());
                    for (var i = 0; i < passSearchJarry.Count; i++)
                    {
                        string key = passSearchJarry[i]["fieldName"].ToString();
                        string op = passSearchJarry[i]["op"].ToString();
                        string value = passSearchJarry[i]["fieldValue"].ToString(); ;
                        if (!string.IsNullOrEmpty(key)
                            && !string.IsNullOrEmpty(op)
                            && !string.IsNullOrEmpty(value))
                        {
                            sql += " and " + key + public_method.get_opTimeReset_sql(op, value);
                        }
                    }
                }

                //这里把查询的语句记录到内存中
                sysSearchSql sss = new sysSearchSql();
                sss.loginInIp = public_method.GetIPAddress();
                sss.gridkey = "getUserManger";//这里记录一下
                sss.sql = sql;

                MvcApplication.setsysSearchSql(sss);

                var list = db.SqlQueryable<object>(sql).OrderBy("orderNum").ToList();

                return list;
            }
            catch (Exception ex)
            {
                return new List<object>();
            }

        }

        /// <summary>
        /// 获取 sys_role信息
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public List<sys_role> get_sys_role()
        {
            List<sys_role> l_role = new List<sys_role>();
            //这里执行
            try
            {
                sqlHelper sh = new sqlHelper();
                ISqlSugarClient db = sh.dbClient();
                l_role=db.Queryable<sys_role>().Where(it=> it.flag==1).OrderBy("orderNo").ToList();
            }
            catch (Exception ex)
            {
               
            }

            return l_role;
        }
        [HttpGet]
        public List<sys_data_role> get_sys_data_role()
        {
            List<sys_data_role> l_role = new List<sys_data_role>();
            //这里执行
            try
            {
                sqlHelper sh = new sqlHelper();
                ISqlSugarClient db = sh.dbClient();
                l_role = db.Queryable<sys_data_role>().Where(it => it.flag == 1).OrderBy("orderNo").ToList();
            }
            catch (Exception ex)
            {

            }

            return l_role;
        }

        /// <summary>
        /// 获取 getSysLog [{name: op: value }]
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        public DataTable getSysLog(JObject passJson)
        {
            DataTable dt = new DataTable();
            try
            {
                sqlHelper sh = new sqlHelper();
                ISqlSugarClient db = sh.dbClient();
                
                string sql = "";
                sql = " select s.*,u.userName createUserName  from sys_log s left join sys_user u on s.createUserId=u.userId where 1=1  ";
                if (passJson != null){
                    JArray passSearchJarry = JArray.Parse(passJson["centerSearchArray"].ToString());
                    for (var i = 0; i < passSearchJarry.Count; i++)
                    {
                        string key = passSearchJarry[i]["fieldName"].ToString();
                        string op = passSearchJarry[i]["op"].ToString();
                        string value = passSearchJarry[i]["fieldValue"].ToString(); ;
                        if (!string.IsNullOrEmpty(key)
                            && !string.IsNullOrEmpty(op)
                            && !string.IsNullOrEmpty(value))
                        {
                            sql += " and " + key + public_method.get_opTimeReset_sql(op, value);
                        }
                    }
                }
              // sql += "  order by s.createDate desc ";

                //这里把查询的语句记录到内存中
                sysSearchSql sss = new sysSearchSql();
                sss.loginInIp = public_method.GetIPAddress();
                sss.gridkey = "getSysLog";//这里记录一下
                sss.sql = sql;

                MvcApplication.setsysSearchSql(sss);

                dt = db.SqlQueryable<object>(sql).OrderBy("createDate desc").ToDataTable();

                return dt;
            }
            catch (Exception ex)
            {
                return dt;
            }

        }

        #endregion
        [HttpGet]
        public returnR getNowLoginObejct(){
            sysLoginInCls si = public_method.getLoginInObject();
            returnR r = new returnR();
            r.code = (int)sysEnum.操作成功;
            r.data = si;
            r.msg = "成功";
            return r;
        }


        #region 共用方法
        /// <summary>
        /// 获取 sys_role信息
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public DataTable getSelectItem(string tableName,int checkDataRole=0)
        {
            sysLoginInCls si = public_method.getLoginInObject();
            DataTable dt = new DataTable();
            //这里执行
            try
            {
                sqlHelper sh = new sqlHelper();
                ISqlSugarClient db = sh.dbClient();
                string whereSql = "";
        
                string sql = "select * from "+ tableName+ " where flag=1  "+ whereSql;
                if (checkDataRole == 1) {
                    #region
                    #endregion
                }
                dt = db.SqlQueryable<object>(sql).ToDataTable();
            }
            catch (Exception ex)
            {
                
            }

            return dt;
        }
        /// <summary>
        /// 获取 sys_role信息
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public DataTable getSelectItem(string tableName, int belongsId, int checkDataRole = 0)
        {
            sysLoginInCls si = public_method.getLoginInObject();
            DataTable dt = new DataTable();
            //这里执行
            try
            {
                sqlHelper sh = new sqlHelper();
                ISqlSugarClient db = sh.dbClient();
                string whereSql = "";
                string sql = "select * from " + tableName + " where flag=1  " + whereSql;
                if (checkDataRole == 1)
                {
                    #region
                    sql += " and belongsId = " + belongsId;
                    #endregion
                }
                dt = db.SqlQueryable<object>(sql).ToDataTable();
            }
            catch (Exception ex)
            {

            }

            return dt;
        }


        /// <summary>
        /// 获取 sys_role信息
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public DataTable getSelectItem(string tableName
            ,string fieldKey
            , string fieldValue
            , int checkDataRole = 0)
        {
            DataTable dt = new DataTable();
            //这里执行
            try
            {
                sqlHelper sh = new sqlHelper();
                ISqlSugarClient db = sh.dbClient();
                string sql = "select * from "+ tableName + " where flag=1";
                if (!string.IsNullOrEmpty(fieldKey)
                    && !string.IsNullOrEmpty(fieldValue)) {
                    sql += " and " + fieldKey + "='" + fieldValue + "'";
                }
                if (checkDataRole == 1)
                {
                    #region

                    #endregion
                }
                dt = db.SqlQueryable<object>(sql).ToDataTable();
            }
            catch (Exception ex)
            {

            }

            return dt;
        }

        /// <summary>
        /// 获取 sys_role信息
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public DataTable getSelectItem(string tableName
            , string fieldKey
            , string fieldValue
            , string fieldKey1
            , string fieldValue1
            , int checkDataRole = 0)
        {
            DataTable dt = new DataTable();
            //这里执行
            try
            {
                sqlHelper sh = new sqlHelper();
                ISqlSugarClient db = sh.dbClient();
                string sql = "select * from " + tableName + " where flag=1";
                if (!string.IsNullOrEmpty(fieldKey)
                    && !string.IsNullOrEmpty(fieldValue))
                {
                    sql += " and " + fieldKey + "='" + fieldValue + "'";
                }
                if (!string.IsNullOrEmpty(fieldKey1)
                    && !string.IsNullOrEmpty(fieldValue1))
                {
                    sql += " and " + fieldKey1 + "='" + fieldValue1 + "'";
                }
                if (checkDataRole == 1)
                {
                    #region

                    #endregion
                }
                dt = db.SqlQueryable<object>(sql).ToDataTable();
            }
            catch (Exception ex)
            {

            }

            return dt;
        }


        [HttpGet]
        public DataTable getSelectItem1(string tableName
     
            , string fieldValue
           )
        {
            sysLoginInCls si = public_method.getLoginInObject();
            DataTable dt = new DataTable();
            //这里执行
            try
            {
                sqlHelper sh = new sqlHelper();
                ISqlSugarClient db = sh.dbClient();
                string sql = "select * from " + tableName + " where (flag=1";
                if (!string.IsNullOrEmpty(fieldValue)&& fieldValue!="null")
                {
                    sql += " and projectId= " + si.projectId + " and personId is null ) or (flag=1 and projectId= " + si.projectId + " and workCardId=" + fieldValue + ")";
                }else {
                    sql += " and projectId= " + si.projectId + " and personId is null )";
                }
                dt = db.SqlQueryable<object>(sql).ToDataTable();
            }
            catch (Exception ex)
            {

            }

            return dt;
        }

        [HttpGet]
        public DataTable getSelectItem2(string tableName , string fieldValue)
        {
            sysLoginInCls si = public_method.getLoginInObject();
            DataTable dt = new DataTable();
            //这里执行
            try
            {
                sqlHelper sh = new sqlHelper();
                ISqlSugarClient db = sh.dbClient();
                string sql = "select * from " + tableName + " where (flag=1";
                if (!string.IsNullOrEmpty(fieldValue) && fieldValue != "null")
                {
                    sql += " and projectId= " + si.projectId + " and carId is null ) or (flag=1 and projectId= " + si.projectId + " and guanYouId=" + fieldValue + ")";
                }
                else
                {
                    sql += " and projectId= " + si.projectId + " and carId is null )";
                }



                dt = db.SqlQueryable<object>(sql).ToDataTable();
            }
            catch (Exception ex)
            {

            }

            return dt;
        }

        [HttpGet]
        public string getPcMac() {
            string code = null;
            try {

                SelectQuery query = new SelectQuery("select * from Win32_ComputerSystemProduct");
                using (ManagementObjectSearcher searcher = new ManagementObjectSearcher(query))
                {
                    foreach (var item in searcher.Get())
                    {
                        using (item) code = item["UUID"].ToString();
                    }
                }
            }
            catch (Exception ex) { 
            }
            
            return code;
        }

        [HttpGet]
        public  string getComputerName()
        {
            return Environment.MachineName;

        }

        [HttpPost]
        public  returnR  submitUserInfo(JObject passObj)
        {
            returnR rr = new returnR();
            rr.code = 0;
            string cpuId = passObj["cpuId"].ToString();
            string userName = passObj["userName"].ToString();
            string belongsId = passObj["belongsId"].ToString();
            sqlHelper sh = new sqlHelper();
            string sql = "select * from tb_Machine_user with(nolock) where flag=1 and cpuId='" + cpuId + "'";
            try
            {
                SqlSugarClient db = sh.dbClient();
                DataTable dt= db.Ado.GetDataTable(sql);
                if (dt.Rows.Count > 0)
                {
                    sql = "update tb_Machine_user set userName='"+userName+"' ,belongsId='"+ belongsId + "',updateDate=GETDATE() where flag=1 and cpuId='"+cpuId+"'";
                }
                else {
                    sql = "insert into tb_Machine_user(cpuId,userName,belongsId,createDate) values('"+ cpuId + "','"+userName+"','"+belongsId
                        +"',getdate())";
                }
                int iReturn = db.Ado.ExecuteCommand(sql);
                if (iReturn > 0)
                {
                    rr.code = 100;
                }
                else {
                    rr.code = 0;
                }
            }
            catch {
            }

            return rr;
        }
        #endregion


        //根据mac地址查找到用户信息
        [HttpGet]
        public List<object> getMachineUserDate(JObject passJson,String mac)
        {
            try
            {
                sqlHelper sh = new sqlHelper();
                ISqlSugarClient db = sh.dbClient();

                string sql = "";
                sql += " select u.*,t.teamName from tb_Machine_user u" +
                    " inner join public_team  t on t.teamId = u.belongsId and t.flag = 1 " + 
                    " where u.flag = 1 and cpuid = '" + mac + "'";
                

                //这里把查询的语句记录到内存中
                sysSearchSql sss = new sysSearchSql();
                sss.loginInIp = public_method.GetIPAddress();
                sss.gridkey = "getMachineUserDate";//这里记录一下
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


        private DataTable getMySubordinateList(string departmentId )
        {
            ISqlSugarClient db = null;
            try
            {
                sqlHelper sh = new sqlHelper();

                db = sh.dbClient();

                var depId = new SugarParameter("@departmentId", departmentId);
                //var manager = new SugarParameter("@managerFlag", managerFlag);
                SugarParameter[] para = new SugarParameter[1];
                para[0] = depId;
                //para[1] = manager;

                DataTable MySubordinateList = db.Ado.UseStoredProcedure().GetDataTable("sp_getMySubordinateList", para);

                //string sql = "";
                //sql += " ;WITH rec AS(  " +
                //        "   SELECT departmentId,departmentName,belongsId FROM public_department where departmentId =   " + departmentId + 
                //        "   UNION ALL  " +
                //        "   SELECT a.departmentId,a.departmentName,a.belongsId FROM public_department as a ,rec AS b WHERE a.belongsId = b.departmentId  " +
                //        " ) " +
                //        " select userId from tb_Machine_user " +
                //        " where belongsId in " +
                //        " (  " +
                //        "   SELECT departmentId FROM rec " +
                //        " ) " ;
                

                return MySubordinateList;
            }
            catch (Exception ex)
            {
                //return new List<object>();
                return new DataTable();
            }
            finally
            {
                db.Close();
            }

        }


        /**
         * 修改对应的版权权限的方法
         */
        [HttpGet]
        public  string updateListenCount(string count)
        {
            if (string.IsNullOrEmpty(count)) {
                return "错误，输入的count为空";
            }
            ISqlSugarClient db = null;
            try
            {
                sqlHelper sh = new sqlHelper();
                db = sh.dbClient();
                sys_listen listen = new sys_listen();
                listen.listen_count = DES_En_De.DesEncrypt(count);
                var countList = db.SqlQueryable<sys_listen>("select listen_count from sys_listen").ToList();
                if (countList.Count > 0){
                    db.Updateable(listen).ExecuteCommand();
                }else{
                    db.Insertable(listen).ExecuteCommand();
                }
            }
            catch (Exception ex){
                return ex.Message;
            }
            return "操作成功";
        }
    }
   
}
