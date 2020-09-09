using Newtonsoft.Json.Linq;
using SqlSugar;
using Sugar.Enties;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApplication11.App_Start;
using WebApplication11.EF.mySysClass;

namespace WebApplication11.Controllers
{
    /// <summary>
    /// 和树有关系的
    /// 和 数据权限 和
    /// 权限的功能都在这里
    /// 
    /// </summary>
    public class webapi_treeController : ApiController
    {

        #region 数据权限表 相关方法
    
        //新增数据权限角色
        [HttpPost]
        public returnR dataRoleAdd(JObject dataRoleObj)
        {
            returnR r = new returnR();
            r.code = (int)sysEnum.还没有执行;
            if (dataRoleObj == null)
            {
                r.code = (int)sysEnum.参数必填;
                return r;
            }
            //这里执行
            try
            {

                #region 判断用户
                string roleName = dataRoleObj["roleName"].ToString();
                if (string.IsNullOrEmpty(roleName))
                {
                    r.code = (int)sysEnum.参数必填;
                    r.msg = "数据权限名称必填";
                    return r;
                }
                string orderNo = dataRoleObj["orderNo"].ToString();
                if (string.IsNullOrEmpty(orderNo))
                {
                    r.code = (int)sysEnum.参数必填;
                    r.msg = "orderNo必填";
                    return r;
                }
                string remarks = "";
                if (dataRoleObj["remarks"]!=null)
                {
                    remarks = dataRoleObj["remarks"].ToString();
                }

                sqlHelper sh = new sqlHelper();
                ISqlSugarClient db = sh.dbClient();


                var dataList = db.Queryable<sys_data_role>()
                    .Where(it => it.roleName == roleName && it.flag == 1).ToList();
                if (dataList.Count > 0)
                {
                    r.code = (int)sysEnum.数据库中已经存在;
                    r.msg = "数据库中已存在[" + roleName + "]";
                    return r;
                }
                #endregion

                sysLoginInCls si = public_method.getLoginInObject();

                sys_data_role sys_data_role = new sys_data_role();
                sys_data_role.roleName = roleName;
                sys_data_role.orderNo = int.Parse(orderNo);
                sys_data_role.remarks = remarks;
                sys_data_role.createDate = System.DateTime.Now;
                sys_data_role.createUserId = si.loginUserId;
                sys_data_role.flag = 1;//默认开启
                //这里转换一下
                int iReturn = db.Insertable(sys_data_role).ExecuteCommand();
                if (iReturn > 0)
                {
                    r.code = (int)sysEnum.操作成功;
                    r.msg = "成功添加[" + roleName + "]";
                    #region //写日志
                    sys_log sys_log = new sys_log();
                    sys_log.logType = "新增";
                    sys_log.logText = Newtonsoft.Json.JsonConvert.SerializeObject(sys_data_role);
                    sys_log.createUserId = si.loginUserId;
                    public_method.saveLog(sys_log);
                    #endregion
                    return r;
                }
                else
                {
                    r.code = (int)sysEnum.执行数据库失败;
                    r.msg = "添加[" + roleName + "]失败";
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

        /// 更新数据权限角色
        [HttpPost]
        public returnR roleDataUpdate(JObject dataRoleObj)
        {
            returnR r = new returnR();
            r.code = (int)sysEnum.还没有执行;
            if (dataRoleObj == null)
            {
                r.code = (int)sysEnum.参数必填;
                return r;
            }
            //这里执行
            try
            {


                #region 判断用户
                string roleId = dataRoleObj["roleId"].ToString();
                if (string.IsNullOrEmpty(roleId))
                {
                    r.code = (int)sysEnum.参数必填;
                    r.msg = "roleId必填";
                    return r;
                }
                string roleName = dataRoleObj["roleName"].ToString();
                if (string.IsNullOrEmpty(roleName))
                {
                    r.code = (int)sysEnum.参数必填;
                    r.msg = "roleName必填";
                    return r;
                }
                string orderNo = dataRoleObj["orderNo"].ToString();
                if (string.IsNullOrEmpty(orderNo))
                {
                    r.code = (int)sysEnum.参数必填;
                    r.msg = "orderNo必填";
                    return r;
                }
                string remarks = "";
                if (dataRoleObj["remarks"] != null)
                {
                    remarks = dataRoleObj["remarks"].ToString();
                }
                sqlHelper sh = new sqlHelper();
                ISqlSugarClient db = sh.dbClient();


                var dataList = db.Queryable<sys_data_role>()
                    .Where(it => it.roleName == roleName 
                    && it.flag == 1 
                    && it.dataRoleId.ToString() != roleId).ToList();
                if (dataList.Count > 0)
                {
                    r.code = (int)sysEnum.数据库中已经存在;
                    r.msg = "数据库中已存在[" + roleName + "]";
                    return r;
                }
                #endregion

                sysLoginInCls si = public_method.getLoginInObject();

                sys_data_role sys_data_role = new sys_data_role();
                sys_data_role.dataRoleId = int.Parse(roleId);
                sys_data_role.roleName = roleName;
                sys_data_role.orderNo = int.Parse(orderNo);
                sys_data_role.remarks = remarks;

                sys_data_role.updateUserId = si.loginUserId;//更新人
                sys_data_role.updateDate = System.DateTime.Now;//更新时间
                sys_data_role.flag = 1;//默认开启
                //这里转换一下
                int iReturn = db.Updateable(sys_data_role)
                    .IgnoreColumns(it => new { it.createDate, it.createUserId,it.flag }).ExecuteCommand();
                if (iReturn > 0)
                {
                    r.code = (int)sysEnum.操作成功;
                    r.msg = "更新[" + roleName + "]成功";
                    #region //写日志
                    sys_log sys_log = new sys_log();
                    sys_log.logType = "更新";
                    sys_log.logText = Newtonsoft.Json.JsonConvert.SerializeObject(sys_data_role);
                    sys_log.createUserId = si.loginUserId;
                    public_method.saveLog(sys_log);
                    #endregion
                    return r;
                }
                else
                {
                    r.code = (int)sysEnum.执行数据库失败;
                    r.msg = "更新[" + roleName + "]失败";
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

        //删除数据权限角色进
        [HttpPost]
        public returnR dataRoleDel(JObject passJson)
        {
            returnR r = new returnR();
            r.code = (int)sysEnum.还没有执行;
            if (passJson == null)
            {
                r.code = (int)sysEnum.参数必填;
                return r;
            }
            //这里执行

            try
            {
                sysLoginInCls si = public_method.getLoginInObject();

                string roleIdList = passJson["roleIdList"].ToString();

                sqlHelper sh = new sqlHelper();
                ISqlSugarClient db = sh.dbClient();

                string[] roleIdArray = roleIdList.Split(',');
                List<string> list = new List<string>();
                for (int i = 0; i < roleIdArray.Length; i++)
                {
                    list.Add(roleIdArray[i]);
                }

                int iReturn = db.Updateable<sys_data_role>()
                .SetColumns(it => new sys_data_role()
                {
                    flag = (int)sysEnum.数据被删除
                    ,
                    updateUserId = si.loginUserId
                    ,
                    updateDate = DateTime.Now
                })
                .Where(it => list.Contains(it.dataRoleId.ToString())).ExecuteCommand();
                if (iReturn > 0)
                {
                    r.code = (int)sysEnum.操作成功;
                    r.msg = "成功删除数据角色";
                    #region //写日志
                    sys_log sys_log = new sys_log();
                    sys_log.logType = "删除";
                    sys_log.logText = "删除数据角色id[" + roleIdList + "]";
                    sys_log.createUserId = si.loginUserId;
                    public_method.saveLog(sys_log);
                    #endregion
                    return r;
                }
                else
                {
                    r.code = (int)sysEnum.执行数据库失败;
                    r.msg = "删除数据角色失败";
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

        /// 获取 数据权限角色列表 [{name: op: value }]
        [HttpPost]
        public List<object> getDataRoleManger(JObject passJson)
        {
            try
            {
                sqlHelper sh = new sqlHelper();
                ISqlSugarClient db = sh.dbClient();

                string sql = "";
                sql += " select * from vw_sys_data_role where 1=1";
                if (passJson != null)
                {
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
                sss.gridkey = "getDataRoleManger";//这里记录一下
                sss.sql = sql;

                MvcApplication.setsysSearchSql(sss);

                var list = db.SqlQueryable<object>(sql).OrderBy("orderNo").ToList();

                return list;
            }
            catch (Exception ex)
            {
                return new List<object>();
            }

        }
        
        //新增页面权限角色
        [HttpPost]
        public returnR pageRoleAdd(JObject dataRoleObj)
        {
            returnR r = new returnR();
            r.code = (int)sysEnum.还没有执行;
            if (dataRoleObj == null)
            {
                r.code = (int)sysEnum.参数必填;
                return r;
            }
            //这里执行
            try
            {

                #region 判断用户
                string roleName = dataRoleObj["roleName"].ToString();
                if (string.IsNullOrEmpty(roleName))
                {
                    r.code = (int)sysEnum.参数必填;
                    r.msg = "数据权限名称必填";
                    return r;
                }
                string orderNo = dataRoleObj["orderNo"].ToString();
                if (string.IsNullOrEmpty(orderNo))
                {
                    r.code = (int)sysEnum.参数必填;
                    r.msg = "orderNo必填";
                    return r;
                }
                string remarks = "";
                if (dataRoleObj["remarks"] != null)
                {
                    remarks = dataRoleObj["remarks"].ToString();
                }

                sqlHelper sh = new sqlHelper();
                ISqlSugarClient db = sh.dbClient();


                var dataList = db.Queryable<sys_role>()
                    .Where(it => it.roleName == roleName && it.flag == 1).ToList();
                if (dataList.Count > 0)
                {
                    r.code = (int)sysEnum.数据库中已经存在;
                    r.msg = "数据库中已存在[" + roleName + "]";
                    return r;
                }
                #endregion

                sysLoginInCls si = public_method.getLoginInObject();

                sys_role sys_role = new sys_role();
                sys_role.roleName = roleName;
                sys_role.orderNo = int.Parse(orderNo);
                sys_role.remarks = remarks;
                sys_role.createDate = System.DateTime.Now;
                sys_role.createUserId = si.loginUserId;
                sys_role.flag = 1;//默认开启
                //这里转换一下
                int iReturn = db.Insertable(sys_role).ExecuteCommand();
                if (iReturn > 0)
                {
                    r.code = (int)sysEnum.操作成功;
                    r.msg = "成功添加[" + roleName + "]";
                    #region //写日志
                    sys_log sys_log = new sys_log();
                    sys_log.logType = "新增";
                    sys_log.logText = Newtonsoft.Json.JsonConvert.SerializeObject(sys_role);
                    sys_log.createUserId = si.loginUserId;
                    public_method.saveLog(sys_log);
                    #endregion
                    return r;
                }
                else
                {
                    r.code = (int)sysEnum.执行数据库失败;
                    r.msg = "添加[" + roleName + "]失败";
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

        /// 更新页面权限角色
        [HttpPost]
        public returnR rolePageUpdate(JObject dataRoleObj)
        {
            returnR r = new returnR();
            r.code = (int)sysEnum.还没有执行;
            if (dataRoleObj == null)
            {
                r.code = (int)sysEnum.参数必填;
                return r;
            }
            //这里执行
            try
            {


                #region 判断用户
                string roleId = dataRoleObj["roleId"].ToString();
                if (string.IsNullOrEmpty(roleId))
                {
                    r.code = (int)sysEnum.参数必填;
                    r.msg = "roleId必填";
                    return r;
                }
                string roleName = dataRoleObj["roleName"].ToString();
                if (string.IsNullOrEmpty(roleName))
                {
                    r.code = (int)sysEnum.参数必填;
                    r.msg = "roleName必填";
                    return r;
                }
                string orderNo = dataRoleObj["orderNo"].ToString();
                if (string.IsNullOrEmpty(orderNo))
                {
                    r.code = (int)sysEnum.参数必填;
                    r.msg = "orderNo必填";
                    return r;
                }
                string remarks = "";
                if (dataRoleObj["remarks"] != null)
                {
                    remarks = dataRoleObj["remarks"].ToString();
                }
                sqlHelper sh = new sqlHelper();
                ISqlSugarClient db = sh.dbClient();


                var dataList = db.Queryable<sys_role>()
                    .Where(it => it.roleName == roleName
                    && it.flag == 1
                    && it.roleId.ToString() != roleId).ToList();
                if (dataList.Count > 0)
                {
                    r.code = (int)sysEnum.数据库中已经存在;
                    r.msg = "数据库中已存在[" + roleName + "]";
                    return r;
                }
                #endregion

                sysLoginInCls si = public_method.getLoginInObject();

                sys_role sys_role = new sys_role();
                sys_role.roleId = int.Parse(roleId);
                sys_role.roleName = roleName;
                sys_role.orderNo = int.Parse(orderNo);
                sys_role.remarks = remarks;

                sys_role.updateUserId = si.loginUserId;//更新人
                sys_role.updateDate = System.DateTime.Now;//更新时间
                //这里转换一下
                int iReturn = db.Updateable(sys_role)
                    .IgnoreColumns(it => new { it.createDate, it.createUserId, it.flag }).ExecuteCommand();
                if (iReturn > 0)
                {
                    r.code = (int)sysEnum.操作成功;
                    r.msg = "更新[" + roleName + "]成功";
                    #region //写日志
                    sys_log sys_log = new sys_log();
                    sys_log.logType = "更新";
                    sys_log.logText = Newtonsoft.Json.JsonConvert.SerializeObject(sys_role);
                    sys_log.createUserId = si.loginUserId;
                    public_method.saveLog(sys_log);
                    #endregion
                    return r;
                }
                else
                {
                    r.code = (int)sysEnum.执行数据库失败;
                    r.msg = "更新[" + roleName + "]失败";
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

        //删除页面权限角色进
        [HttpPost]
        public returnR pageRoleDel(JObject passJson)
        {
            returnR r = new returnR();
            r.code = (int)sysEnum.还没有执行;
            if (passJson == null)
            {
                r.code = (int)sysEnum.参数必填;
                return r;
            }
            //这里执行

            try
            {
                sysLoginInCls si = public_method.getLoginInObject();

                string roleIdList = passJson["roleIdList"].ToString();

                sqlHelper sh = new sqlHelper();
                ISqlSugarClient db = sh.dbClient();

                string[] roleIdArray = roleIdList.Split(',');
                List<string> list = new List<string>();
                for (int i = 0; i < roleIdArray.Length; i++)
                {
                    list.Add(roleIdArray[i]);
                }

                int iReturn = db.Updateable<sys_role>()
                .SetColumns(it => new sys_role()
                {
                    flag = (int)sysEnum.数据被删除
                    ,
                    updateUserId = si.loginUserId
                    ,
                    updateDate = DateTime.Now
                })
                .Where(it => list.Contains(it.roleId.ToString())).ExecuteCommand();
                if (iReturn > 0)
                {
                    r.code = (int)sysEnum.操作成功;
                    r.msg = "成功删除页面角色";
                    #region //写日志
                    sys_log sys_log = new sys_log();
                    sys_log.logType = "删除";
                    sys_log.logText = "删除数据角色id[" + roleIdList + "]";
                    sys_log.createUserId = si.loginUserId;
                    public_method.saveLog(sys_log);
                    #endregion
                    return r;
                }
                else
                {
                    r.code = (int)sysEnum.执行数据库失败;
                    r.msg = "删除页面角色失败";
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

        /// 获取页面权限角色列表 [{name: op: value }]
        [HttpPost]
        public List<object> getPageRoleManger(JObject passJson)
        {
            try
            {
                sqlHelper sh = new sqlHelper();
                ISqlSugarClient db = sh.dbClient();

                string sql = "";
                sql += " select * from vw_sys_page_role where 1=1";
                if (passJson != null)
                {
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
                sss.gridkey = "getPageRoleManger";//这里记录一下
                sss.sql = sql;

                MvcApplication.setsysSearchSql(sss);

                var list = db.SqlQueryable<object>(sql).OrderBy("orderNo").ToList();

                return list;
            }
            catch (Exception ex)
            {
                return new List<object>();
            }

        }
        /// 获取 sys_role信息
        [HttpGet]
        public List<sys_role> get_sys_role()
        {
            List<sys_role> l_role = new List<sys_role>();
            //这里执行
            try
            {
                sqlHelper sh = new sqlHelper();
                ISqlSugarClient db = sh.dbClient();
                l_role = db.Queryable<sys_role>().Where(it => it.flag == 1).ToList();
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
                l_role = db.Queryable<sys_data_role>().Where(it => it.flag == 1).ToList();
            }
            catch (Exception ex)
            {

            }

            return l_role;
        }

        /// 获取 getSysLog [{name: op: value }]
        [HttpPost]
        public List<object> getSysLog(JObject passJson)
        {
            try
            {
                sqlHelper sh = new sqlHelper();
                ISqlSugarClient db = sh.dbClient();

                string sql = "";
                sql += " select s.*,u.userName createUserName  from sys_log s left join sys_user u ";
                sql += " on s.createUserId=u.createUserId where 1=1 ";
                if (passJson != null)
                {
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
                            sql += " and " + key + public_method.get_op_sql(op, value);
                        }
                    }
                }

                //这里把查询的语句记录到内存中
                sysSearchSql sss = new sysSearchSql();
                sss.loginInIp = public_method.GetIPAddress();
                sss.gridkey = "getSysLog";//这里记录一下
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

        #region
        [HttpGet]
        public List<treeClass> getDataRoleSelectUserTree()
        {
            List<treeClass> l_treeClass = new List<treeClass>();

            treeClass tc_gen = new treeClass();
            tc_gen.id = "0";
            tc_gen.name = "系统数据页面结构";
            tc_gen.pId = "-1";
            tc_gen.open = true;
            tc_gen.icon = "../image/treeImage/gen.png";
            l_treeClass.Add(tc_gen);

            sqlHelper sh = new sqlHelper();
            ISqlSugarClient db = sh.dbClient();
            try
            {
                string sql = "select departmentId,departmentName,belongsId from public_department where flag=1";
                DataTable dt = new DataTable();
                dt = sh.dbClient().Ado.GetDataTable(sql);
                for (var i = 0; i < dt.Rows.Count; i++) {
                    treeClass tc = new treeClass();
                    tc.id = dt.Rows[i]["departmentId"].ToString();
                    tc.name = dt.Rows[i]["departmentName"].ToString();
                    tc.icon = "../image/treeImage/mokuai.png";
                    tc.pId = dt.Rows[i]["belongsId"].ToString();
                    tc.open = true;
                    l_treeClass.Add(tc);
                }

                //List<public_zgs> l_sys_Modules = db.Queryable<public_zgs>().Where(it => it.flag == 1).ToList();
                //if (l_sys_Modules.Count > 0)
                //{
                //    for (var i = 0; i < l_sys_Modules.Count; i++)
                //    {

                //    }
                //}
                //List<public_fgs> l_sys_function = db.Queryable<public_fgs>().Where(it => it.flag == 1).ToList();
                //if (l_sys_function.Count > 0)
                //{
                //    for (var i = 0; i < l_sys_function.Count; i++)
                //    {
                //        treeClass tc = new treeClass();
                //        tc.id = "B" + l_sys_function[i].fgsId.ToString();
                //        tc.name = l_sys_function[i].fgsName.ToString();
                //        tc.icon = "../image/treeImage/page.png";
                //        tc.pId = "A" + l_sys_function[i].belongsId.ToString();
                //        tc.open = true;
                //        l_treeClass.Add(tc);
                //    }
                //}
                //List<public_department> l_sys_department = db.Queryable<public_department>().Where(it => it.flag == 1).ToList();
                //if (l_sys_department.Count > 0)
                //{
                //    for (var i = 0; i < l_sys_department.Count; i++)
                //    {
                //        treeClass tc = new treeClass();
                //        tc.id = "C" + l_sys_department[i].departmentId.ToString();
                //        tc.name = l_sys_department[i].departmentName.ToString();
                //        tc.icon = "../image/treeImage/lianjie.png";
                //        tc.pId = "B" + l_sys_department[i].belongsId.ToString();
                //        tc.open = true;
                //        l_treeClass.Add(tc);
                //    }
                //}
                //List<public_team> l_sys_team = db.Queryable<public_team>().Where(it => it.flag == 1).ToList();
                //if (l_sys_team.Count > 0)
                //{
                //    for (var i = 0; i < l_sys_team.Count; i++)
                //    {
                //        treeClass tc = new treeClass();
                //        tc.id = "D" + l_sys_team[i].teamId.ToString();
                //        tc.name = l_sys_team[i].teamName.ToString();
                //        tc.icon = "../image/treeImage/loufang.png";
                //        tc.pId = "C" + l_sys_team[i].belongsId.ToString();
                //        tc.open = true;
                //        l_treeClass.Add(tc);
                //    }
                //}
                //List<tb_Machine_user> l_sys_Machine_user = db.Queryable<tb_Machine_user>().Where(it => it.flag == 1).ToList();
                //if (l_sys_Machine_user.Count > 0)
                //{
                //    for (var i = 0; i < l_sys_Machine_user.Count; i++)
                //    {
                //        treeClass tc = new treeClass();
                //        tc.id = "E" + l_sys_Machine_user[i].userId.ToString();
                //        tc.name = l_sys_Machine_user[i].userName.ToString();
                //        tc.icon = "../image/treeImage/user.png";
                //        tc.pId = "D" + l_sys_Machine_user[i].belongsId.ToString();
                //        tc.open = true;
                //        l_treeClass.Add(tc);
                //    }
                //}
            }
            catch
            {
            }
            return l_treeClass;
        }
        #endregion

        #region //这是 数据权限用户树
        /// <summary>
        /// 这是系统 页面数据权限用户树
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public List<treeClass> getDataRoleUserTree()
        {
            List<treeClass> l_treeClass = new List<treeClass>();

            //treeClass tc_gen = new treeClass();
            //tc_gen.id = "0";
            //tc_gen.name = "系统数据页面结构";
            //tc_gen.pId = "-1";
            //tc_gen.open = true;
            //tc_gen.icon = "../image/treeImage/gen.png";
            //l_treeClass.Add(tc_gen);

            sqlHelper sh = new sqlHelper();
            ISqlSugarClient db = sh.dbClient();
            try
            {
                List<sys_data_role> l_sys_Modules = db.Queryable<sys_data_role>().Where(it => it.flag == 1).ToList();
                if (l_sys_Modules.Count > 0)
                {
                    for (var i = 0; i < l_sys_Modules.Count; i++)
                    {
                        treeClass tc = new treeClass();
                        tc.id = "A" + l_sys_Modules[i].dataRoleId.ToString();
                        tc.name = l_sys_Modules[i].roleName;
                        tc.icon = "../image/treeImage/mokuai.png";
                        tc.pId = "0";
                        tc.open = true;
                        l_treeClass.Add(tc);
                    }
                }
                List<sys_user> l_sys_function = db.Queryable<sys_user>().Where(it => it.flag == 1).ToList();
                if (l_sys_function.Count > 0)
                {
                    for (var i = 0; i < l_sys_function.Count; i++)
                    {
                        treeClass tc = new treeClass();
                        tc.id = "B" + l_sys_function[i].userId.ToString();
                        tc.name = l_sys_function[i].userName.ToString();
                        tc.icon = "../image/treeImage/user.png";
                        tc.pId = "A" + l_sys_function[i].dataRoleId.ToString();
                        tc.open = true;
                        l_treeClass.Add(tc);
                    }
                }

            }
            catch
            {
            }
            return l_treeClass;
        }
        #endregion

      

        #region 这里是数据权限
        /// <summary>
        /// {"roleId":"1","lhIdList":"1,2,3"  } 数据权限 
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        public returnR saveDataProjectRole(JObject passObj)
        {
            returnR r = new returnR();
            r.code = (int)sysEnum.还没有执行;
            if (passObj == null)
            {
                r.code = (int)sysEnum.参数必填;
                return r;
            }
            try
            {
                string roleId = passObj["roleId"].ToString();
                if (string.IsNullOrEmpty(roleId))
                {
                    r.code = (int)sysEnum.参数必填;
                    r.msg = "roleId必填";
                    return r;
                }
                int iRoleId = int.Parse(roleId);

                string TeamIdIdList = passObj["TeamIdIdList"].ToString();
                if (string.IsNullOrEmpty(TeamIdIdList))
                {
                    r.code = (int)sysEnum.参数必填;
                    r.msg = "TeamIdIdList必填";
                    return r;
                }
                string[] TeamIdIdArray = TeamIdIdList.Split(',');

                sqlHelper sh = new sqlHelper();
                ISqlSugarClient db = sh.dbClient();

                //先删除之前的
                int iReturn = db.Deleteable<sys_dataRole_user>().Where(it => it.roleId == iRoleId).ExecuteCommand();//删除等于1的
                //int iReturn = db.Deleteable<sys_dataRole_lh>().Where(new sys_dataRole_lh() { roleId = iRoleId }).ExecuteCommand();
                if (iReturn >= 0)
                {
                    iReturn = 0;
                    for (var i = 0; i < TeamIdIdArray.Length; i++)
                    {
                        string teamId = TeamIdIdArray[i];
                        sys_dataRole_user sdr = new sys_dataRole_user();
                        sdr.roleId = iRoleId;
                        sdr.teamId = int.Parse(teamId);
                        sdr.flag = 1;
                        sdr.createDate = System.DateTime.Now;
                        iReturn += db.Insertable(sdr).ExecuteCommand();//插入
                    }
                }
                else
                {
                    r.code = (int)sysEnum.执行数据库失败;
                    r.msg = "发生异常";
                    return r;
                }

                r.code = (int)sysEnum.操作成功;
                r.msg = "成功更新[" + iReturn + "]条";
            }
            catch (Exception ex)
            {

            }
            return r;
        }
        #endregion

        #region //这是 页面权限用户树
        /// <summary>
        /// 这是系统 页面权限用户树
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public List<treeClass> getPageRoleUserTree()
        {
            List<treeClass> l_treeClass = new List<treeClass>();

            sqlHelper sh = new sqlHelper();
            ISqlSugarClient db = sh.dbClient();
            try
            {
                List<sys_role> l_sys_Modules = db.Queryable<sys_role>().Where(it => it.flag == 1).ToList();
                if (l_sys_Modules.Count > 0)
                {
                    for (var i = 0; i < l_sys_Modules.Count; i++)
                    {
                        treeClass tc = new treeClass();
                        tc.id = "A" + l_sys_Modules[i].roleId.ToString();
                        tc.name = l_sys_Modules[i].roleName;
                        tc.icon = "../image/treeImage/mokuai.png";
                        tc.pId = "0";
                        tc.open = true;
                        l_treeClass.Add(tc);
                    }
                }
                List<sys_user> l_sys_function = db.Queryable<sys_user>().Where(it => it.flag == 1).ToList();
                if (l_sys_function.Count > 0)
                {
                    for (var i = 0; i < l_sys_function.Count; i++)
                    {
                        treeClass tc = new treeClass();
                        tc.id = "B" + l_sys_function[i].userId.ToString();
                        tc.name = l_sys_function[i].userName.ToString();
                        tc.icon = "../image/treeImage/user.png";
                        tc.pId = "A" + l_sys_function[i].roleId.ToString();
                        tc.open = true;
                        l_treeClass.Add(tc);
                    }
                }
            }
            catch
            {
            }
            return l_treeClass;
        }
        #endregion

        #region //这是 页面树
        /// <summary>
        /// 这是系统 获取 所有 页面
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public List<treeClass> getSystemPageTree()
        {
            List<treeClass> l_treeClass = new List<treeClass>();

            treeClass tc_gen = new treeClass();

            sqlHelper sh = new sqlHelper();
            ISqlSugarClient db = sh.dbClient();
            try
            {
                List<Sys_module> l_sys_Modules = db.Queryable<Sys_module>().Where(it => it.flag == 1).ToList();
                if (l_sys_Modules.Count > 0)
                {
                    for (var i = 0; i < l_sys_Modules.Count; i++)
                    {
                        treeClass tc = new treeClass();
                        tc.id = "A" + l_sys_Modules[i].Module_id.ToString();
                        tc.name = l_sys_Modules[i].Module_name;
                        tc.icon = "../image/treeImage/mokuai.png";
                        tc.pId = "0";
                        tc.open = true;
                        l_treeClass.Add(tc);
                    }
                }
                List<Sys_function> l_sys_function = db.Queryable<Sys_function>().Where(it => it.Flag == 1).ToList();
                if (l_sys_function.Count > 0)
                {
                    for (var i = 0; i < l_sys_function.Count; i++)
                    {
                        treeClass tc = new treeClass();
                        tc.id = "B" + l_sys_function[i].Function_id.ToString();
                        tc.name = l_sys_function[i].Function_name.ToString();
                        tc.icon = "../image/treeImage/page.png";
                        tc.pId = "A" + l_sys_function[i].Module_id.ToString();
                        tc.open = true;
                        l_treeClass.Add(tc);
                    }
                }
            }
            catch (Exception ex)
            {

            }
            return l_treeClass;
        }
        #endregion

        #region 这里是页面权限
        /// <summary>
        /// {"roleId":"1","lhIdList":"1,2,3"  } 数据权限 
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        public returnR savePageRole(JObject passObj)
        {
            returnR r = new returnR();
            r.code = (int)sysEnum.还没有执行;
            if (passObj == null)
            {
                r.code = (int)sysEnum.参数必填;
                return r;
            }
            try
            {
                string roleId = passObj["roleId"].ToString();
                if (string.IsNullOrEmpty(roleId))
                {
                    r.code = (int)sysEnum.参数必填;
                    r.msg = "roleId必填";
                    return r;
                }
                int iRoleId = int.Parse(roleId);

                string functionIdList = passObj["functionIdList"].ToString();
                if (string.IsNullOrEmpty(functionIdList))
                {
                    r.code = (int)sysEnum.参数必填;
                    r.msg = "functionId必填";
                    return r;
                }
                string[] functionIdArray = functionIdList.Split(',');

                sqlHelper sh = new sqlHelper();
                ISqlSugarClient db = sh.dbClient();
                sysLoginInCls si = public_method.getLoginInObject();

                //先删除之前的
                int iReturn = db.Deleteable<Sys_role_function>().Where(it => it.Role_id == iRoleId).ExecuteCommand();//删除等于1的
                //int iReturn = db.Deleteable<sys_dataRole_lh>().Where(new sys_dataRole_lh() { roleId = iRoleId }).ExecuteCommand();
                if (iReturn >= 0)
                {
                    iReturn = 0;
                    for (var i = 0; i < functionIdArray.Length; i++)
                    {
                        string functionId = functionIdArray[i];
                        Sys_role_function spr = new Sys_role_function();
                        spr.Role_id = iRoleId;
                        spr.Function_id = int.Parse(functionId);
                        spr.Flag = 1;
                        spr.CreateDate = System.DateTime.Now;
                        spr.CreateUserId = si.personId;
                        iReturn += db.Insertable(spr).ExecuteCommand();//插入
                    }
                }
                else
                {
                    r.code = (int)sysEnum.执行数据库失败;
                    r.msg = "发生异常";
                    return r;
                }

                r.code = (int)sysEnum.操作成功;
                r.msg = "成功更新[" + iReturn + "]条";
            }
            catch (Exception ex)
            {

            }
            return r;
        }
        #endregion

       

    }



    /// <summary>
    /// 树结构的结构
    /// </summary>
    public class treeClass
    {
        public string id { get; set; }
        public string name { get; set; }
        public string pId { get; set; }
        public bool open { get; set; }

        public string icon { get; set; }

        public string shuxing1 { get; set; }
        public string shuxing2 { get; set; }
        public string shuxing3 { get; set; }

    }

    public class dtTree {
        public string id { get; set; }
        public string title { get; set; }
        public string parentId { get; set; }
        public List<dtTree> children { get; set; }

        public string checkArr { get; set; }

    }
    public class dtTree_List
    {
        public string id { get; set; }
        public string title { get; set; }
        public string checkArr { get; set; }
        public string parentId { get; set; }

        public string iconClass { get; set; }

        public string type { get; set; }

        public string mylevel { get; set; }

    }
}
