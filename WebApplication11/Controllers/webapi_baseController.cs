using Newtonsoft.Json.Linq;
using SqlSugar;
using Sugar.Enties;
using System;
using System.Collections.Generic;
using System.Data;
using System.Web.Http;
using WebApplication11.App_Start;
using WebApplication11.EF.mySysClass;

namespace WebApplication11.Controllers
{
    public class webapi_baseController : ApiController
    {


        #region 废弃了
        //#region 集团信息维护 
        ///// <summary>
        ///// 获取集团信息[{name: op: value }]
        ///// </summary>
        ///// <returns></returns>
        //[HttpPost]
        //public List<object> getGroupList(JObject passJson)
        //{
        //    try
        //    {
        //        sqlHelper sh = new sqlHelper();
        //        ISqlSugarClient db = sh.dbClient();
        //        string sql = "";
        //        sql += " select jt.jtId,jt.jtName,jt.remarks,jt.orderNum,jt.createDate,jt.updateDate,createuser.username createdName,updateuser.username updatedName" +
        //            "    from public_jt jt left join sys_user createuser on jt.createUserId = createuser.userId left join " +
        //            "sys_user updateuser on  jt.updateUserId = updateuser.userId  where jt.flag =1 ";
        //        if (passJson != null)
        //        {
        //            JArray passSearchJarry = JArray.Parse(passJson["centerSearchArray"].ToString());
        //            for (var i = 0; i < passSearchJarry.Count; i++)
        //            {
        //                string key = passSearchJarry[i]["fieldName"].ToString();
        //                string op = passSearchJarry[i]["op"].ToString();
        //                string value = passSearchJarry[i]["fieldValue"].ToString(); ;
        //                if (!string.IsNullOrEmpty(key)
        //                    && !string.IsNullOrEmpty(op)
        //                    && !string.IsNullOrEmpty(value))
        //                {
        //                    sql += " and " + key + public_method.get_op_sql(op, value);
        //                }
        //            }
        //        }
        //        //这里把查询的语句记录到内存中
        //        sysSearchSql sss = new sysSearchSql();
        //        sss.loginInIp = public_method.GetIPAddress();
        //        sss.gridkey = "getGroupList";//这里记录一下
        //        sss.sql = sql;
        //        MvcApplication.setsysSearchSql(sss);
        //        var list = db.SqlQueryable<object>(sql).OrderBy("orderNum").ToList();
        //        return list;
        //    }
        //    catch (Exception ex)
        //    {
        //        return new List<object>();
        //    }
        //}
        ///// <summary>
        ///// 增加集团信息
        ///// </summary>
        ///// <param name="passObj"></param>
        ///// <returns></returns>

        //[HttpPost]
        //public returnR addGroup(JObject passObj)
        //{
        //    sqlHelper sh = new sqlHelper();
        //    ISqlSugarClient db = sh.dbClient();
        //    sysLoginInCls si = public_method.getLoginInObject();
        //    returnR r = new returnR();
        //    r.code = (int)sysEnum.还没有执行;
        //    if (passObj == null)
        //    {
        //        r.code = (int)sysEnum.参数必填;
        //        return r;
        //    }
        //    //这里执行
        //    try
        //    {
        //        #region 判断
        //        string jtName = passObj["jtName"].ToString();
        //        if (string.IsNullOrEmpty(jtName))
        //        {
        //            r.code = (int)sysEnum.参数必填;
        //            r.msg = "集团名称必填";
        //            return r;
        //        }
        //        //存在性check
        //        var dataList1 = db.Queryable<public_jt>()
        //            .Where(it => it.flag == 1 && it.jtName.ToString().Equals(jtName)).ToList();
        //        if (dataList1.Count > 0)
        //        {
        //            r.code = (int)sysEnum.数据库中已经存在;
        //            r.msg = "该集团名称已经存在";
        //            return r;
        //        }
        //        string orderNum = passObj["orderNum"].ToString();
        //        string remarks = passObj["remarks"].ToString();
        //        #endregion

        //        public_jt public_jt = new public_jt();
        //        public_jt.jtName = jtName;
        //        if (!string.IsNullOrEmpty(orderNum)) {  //如果为前台传送的值null的情况下这样保存 不会报错
        //            public_jt.orderNum = int.Parse(orderNum);
        //        }

        //        public_jt.createDate = System.DateTime.Now;
        //        public_jt.createUserId = si.loginUserId; //创建人的id
        //        public_jt.remarks = remarks;
        //        public_jt.flag = 1;//默认开启
        //        int ipersonId = db.Insertable(public_jt).ExecuteReturnIdentity();
        //        if (ipersonId > 0)
        //        {
        //            r.code = (int)sysEnum.操作成功;
        //            r.msg = "成功添加[" + jtName + "]";
        //            #region //写日志
        //            sys_log sys_log = new sys_log();
        //            sys_log.logType = "新增";
        //            sys_log.logFunName = "addGroup";
        //            sys_log.logText = Newtonsoft.Json.JsonConvert.SerializeObject(public_jt);
        //            sys_log.createUserId = si.loginUserId;
        //            public_method.saveLog(sys_log);
        //            #endregion
        //            return r;
        //        }
        //        else
        //        {
        //            r.code = (int)sysEnum.执行数据库失败;
        //            r.msg = "添加[" + jtName + "]失败";
        //            return r;
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        r.code = (int)sysEnum.发生异常;
        //        r.msg = ex.Message;
        //    }
        //    return r;

        //}

        ///// <summary>
        ///// 更新集团信
        ///// </summary>
        ///// <param name="passObj"></param>
        ///// <returns></returns>
        //[HttpPost]
        //public returnR updateGroup(JObject passObj)
        //{
        //    sqlHelper sh = new sqlHelper();
        //    ISqlSugarClient db = sh.dbClient();
        //    sysLoginInCls si = public_method.getLoginInObject();
        //    returnR r = new returnR();
        //    r.code = (int)sysEnum.还没有执行;

        //    if (passObj == null)
        //    {
        //        r.code = (int)sysEnum.参数必填;
        //        return r;
        //    }
        //    //这里执行
        //    try
        //    {
        //        #region 判断
        //        string jtId = passObj["jtId"].ToString();
        //        if (string.IsNullOrEmpty(jtId))
        //        {
        //            r.code = (int)sysEnum.参数必填;
        //            r.msg = "集团id必填";
        //            return r;
        //        }
        //        string jtName = passObj["jtName"].ToString();
        //        if (string.IsNullOrEmpty(jtName))
        //        {
        //            r.code = (int)sysEnum.参数必填;
        //            r.msg = "集团名称必填";
        //            return r;
        //        }
        //        var dataList = db.Queryable<public_jt>()
        //          .Where(it => it.jtName.Equals(jtName) && it.flag == 1 && !it.jtId.Equals(jtId)).ToList();
        //        if (dataList.Count > 0)
        //        {
        //            r.code = (int)sysEnum.数据库中已经存在;
        //            r.msg = "数据库中已存在[" + jtName + "]";
        //            return r;
        //        }
        //        //var dataList = db.Queryable<public_jt>().Where(it => it.jtName == jtName && it.flag == 1).ToList();
        //        //if (dataList.Count > 0)
        //        //{
        //        //    r.code = (int)sysEnum.数据库中已经存在;
        //        //    r.msg = "集团名称在数据库当中已存在[" + jtName + "]";
        //        //    return r;
        //        //}
        //        string remarks = passObj["remarks"].ToString();
        //        string orderNum = passObj["orderNum"].ToString();
        //        public_jt public_jt = new public_jt();
        //        public_jt.jtId = int.Parse(jtId);
        //        public_jt.jtName = jtName;
        //        if (!string.IsNullOrEmpty(orderNum)) {
        //            public_jt.orderNum = int.Parse(orderNum);
        //        }
        //        public_jt.remarks = remarks;
        //       // public_jt.flag = 1;//默认开启
        //        public_jt.updateDate = System.DateTime.Now;//更新人
        //        public_jt.updateUserId = si.loginUserId;//更新时间
        //        //这里转换一下
        //        int iReturn = db.Updateable(public_jt)
        //        .IgnoreColumns(it => new { it.createDate, it.createUserId,it.flag}).ExecuteCommand();
        //        if (iReturn > 0)
        //        {
        //            r.code = (int)sysEnum.操作成功;
        //            r.msg = "更新[" + public_jt + "]成功";
        //            #region //写日志
        //            sys_log sys_log = new sys_log();
        //            sys_log.logType = "更新";
        //            sys_log.logFunName = "updateGroup";
        //            sys_log.logText = Newtonsoft.Json.JsonConvert.SerializeObject(public_jt);
        //            sys_log.createUserId = si.loginUserId;
        //            sys_log.createDate = System.DateTime.Now;
        //            public_method.saveLog(sys_log);
        //            #endregion
        //            return r;
        //        }
        //        else
        //        {
        //            r.code = (int)sysEnum.执行数据库失败;
        //            r.msg = "更新[" + public_jt + "]失败";
        //            return r;
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        r.code = (int)sysEnum.发生异常;
        //        r.msg = ex.Message;
        //    }
        //    return r;
        //}
        ///// <summary>
        ///// 删除集团信息
        ///// </summary>
        ///// <param name="passObj"></param>
        ///// <returns></returns>
        //[HttpPost]
        //public returnR deleteGroup(JObject passObj)
        //{
        //    returnR r = new returnR();
        //    try
        //    {
        //        sqlHelper sh = new sqlHelper();
        //        ISqlSugarClient db = sh.dbClient();
        //        sysLoginInCls si = public_method.getLoginInObject();
        //        if (passObj == null) {
        //            r.code = (int)sysEnum.参数必填;
        //            r.msg = "没有选择需要删除的id";
        //            return r;
        //        }
        //        string jtIdList = passObj["jtIdList"].ToString();
        //        if (string.IsNullOrEmpty(jtIdList)){
        //            r.code = (int)sysEnum.参数必填;
        //            r.msg = "没有输入对应批量删除id";
        //            return r;
        //        }
        //        //这里执行
        //        string[] idArray = jtIdList.Split(',');
        //        List<string> list = new List<string>();
        //        for (int i = 0; i < idArray.Length; i++){
        //            list.Add(idArray[i]);
        //        }

        //        int iReturn = db.Updateable<public_jt>()
        //        .SetColumns(it => new public_jt()
        //        {
        //            flag = (int)sysEnum.数据被删除
        //            ,
        //            updateUserId = si.loginUserId
        //            ,
        //            updateDate = DateTime.Now
        //        })
        //        .Where(it => list.Contains(it.jtId.ToString())).ExecuteCommand();
        //        if (iReturn > 0)
        //        {
        //            r.code = (int)sysEnum.操作成功;
        //            r.msg = "成功删除人员";
        //            #region //写日志
        //            sys_log sys_log = new sys_log();
        //            sys_log.logType = "删除";
        //            sys_log.logText = "删除人员id[" + jtIdList + "]";
        //            sys_log.logFunName = "deleteGroup";
        //            sys_log.createUserId = si.loginUserId;
        //            sys_log.createDate = System.DateTime.Now;
        //            public_method.saveLog(sys_log);
        //            #endregion
        //            return r;
        //        }else{
        //            r.code = (int)sysEnum.执行数据库失败;
        //            r.msg = "删除人员失败";
        //            return r;
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        r.code = (int)sysEnum.发生异常;
        //        r.msg = ex.Message;
        //    }
        //    return r;
        //}
        //#endregion

        //#endregion

        //#region 公司信息维护 
        ///// <summary>
        ///// 获取总公司信息[{name: op: value }]
        ///// </summary>
        ///// <returns></returns>
        //[HttpPost]
        //public List<object> getHeadquartersList(JObject passJson)
        //{
        //    try
        //    {
        //        sqlHelper sh = new sqlHelper();
        //        ISqlSugarClient db = sh.dbClient();
        //        string sql = "";
        //        sql += " select zgs.zgsId,zgs.zgsName,zgs.orderNum,zgs.remarks,zgs.belongsId,zgs.flag,zgs.createDate,cu.username createName"+
        //                ",zgs.updateDate,uu.userName updateName " +
        //                "from public_zgs zgs " +
        //                "left join sys_user cu on zgs.createUserId = cu.userId and cu.flag = 1 " +
        //                "left join sys_user uu on zgs.updateUserId = uu.userId and uu.flag = 1  " +
        //                //"left join public_jt jt on jt.jtId = zgs.belongsId and jt.flag = 1 " +
        //                "where zgs.flag = 1 ";
        //        if (passJson != null)
        //        {
        //            JArray passSearchJarry = JArray.Parse(passJson["centerSearchArray"].ToString());
        //            for (var i = 0; i < passSearchJarry.Count; i++)
        //            {
        //                string key = passSearchJarry[i]["fieldName"].ToString();
        //                string op = passSearchJarry[i]["op"].ToString();
        //                string value = passSearchJarry[i]["fieldValue"].ToString(); ;
        //                if (!string.IsNullOrEmpty(key)
        //                    && !string.IsNullOrEmpty(op)
        //                    && !string.IsNullOrEmpty(value))
        //                {
        //                    sql += " and " + key + public_method.get_op_sql(op, value);
        //                }
        //            }
        //        }
        //        //这里把查询的语句记录到内存中
        //        sysSearchSql sss = new sysSearchSql();
        //        sss.loginInIp = public_method.GetIPAddress();
        //        sss.gridkey = "getHeadquartersList";//这里记录一下
        //        sss.sql = sql;
        //        MvcApplication.setsysSearchSql(sss);
        //        var list = db.SqlQueryable<object>(sql).OrderBy("orderNum").ToList();
        //        return list;
        //    }
        //    catch (Exception ex)
        //    {
        //        return new List<object>();
        //    }
        //}

        ///// <summary>
        ///// 增加总公司信息
        ///// </summary>
        ///// <param name="passObj"></param>
        ///// <returns></returns>
        //[HttpPost]
        //public returnR addHeadquarters(JObject passObj)
        //{
        //    sqlHelper sh = new sqlHelper();
        //    ISqlSugarClient db = sh.dbClient();
        //    sysLoginInCls si = public_method.getLoginInObject();
        //    returnR r = new returnR();
        //    r.code = (int)sysEnum.还没有执行;
        //    if (passObj == null)
        //    {
        //        r.code = (int)sysEnum.参数必填;
        //        return r;
        //    }
        //    //这里执行
        //    try
        //    {
        //        #region 判断
        //        string zgsName = passObj["zgsName"].ToString();
        //        if (string.IsNullOrEmpty(zgsName))
        //        {
        //            r.code = (int)sysEnum.参数必填;
        //            r.msg = "公司名称必填";
        //            return r;
        //        }
        //        //string belongsId = passObj["belongsId"].ToString();
        //        //if (string.IsNullOrEmpty(belongsId))
        //        //{
        //        //    r.code = (int)sysEnum.参数必填;
        //        //    r.msg = "所属集团必选";
        //        //    return r;
        //        //}
        //        string orderNum = passObj["orderNum"].ToString();

        //        //存在性check
        //        var dataList1 = db.Queryable<public_zgs>()
        //            .Where(it => it.flag == 1 && it.zgsName.ToString().Equals(zgsName)).ToList();
        //        if (dataList1.Count > 0)
        //        {
        //            r.code = (int)sysEnum.数据库中已经存在;
        //            r.msg = "该公司名称已经存在";
        //            return r;
        //        }
        //        string remarks = passObj["remarks"].ToString();
        //        #endregion

        //        public_zgs public_zgs = new public_zgs();
        //        public_zgs.zgsName = zgsName;


        //        //public_zgs.belongsId = int.Parse(belongsId);
        //        public_zgs.createDate = System.DateTime.Now;
        //        public_zgs.createUserId = si.loginUserId; //创建人的id
        //        if (!string.IsNullOrEmpty(orderNum))
        //        {  //如果为前台传送的值null的情况下这样保存 不会报错
        //            public_zgs.orderNum = int.Parse(orderNum);
        //        }
        //        public_zgs.remarks = remarks;
        //        public_zgs.flag = 1;//默认开启
        //        int ipersonId = db.Insertable(public_zgs).ExecuteReturnIdentity();
        //        if (ipersonId > 0)
        //        {
        //            r.code = (int)sysEnum.操作成功;
        //            r.msg = "成功添加[" + zgsName + "]";
        //            #region //写日志
        //            sys_log sys_log = new sys_log();
        //            sys_log.logType = "新增";
        //            sys_log.logFunName = "addHeadquarters";
        //            sys_log.logText = Newtonsoft.Json.JsonConvert.SerializeObject(public_zgs);
        //            sys_log.createUserId = si.loginUserId;
        //            public_method.saveLog(sys_log);
        //            #endregion
        //            return r;
        //        }
        //        else
        //        {
        //            r.code = (int)sysEnum.执行数据库失败;
        //            r.msg = "添加[" + zgsName + "]失败";
        //            return r;
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        r.code = (int)sysEnum.发生异常;
        //        r.msg = ex.Message;
        //    }
        //    return r;

        //}

        ///// <summary>
        ///// 更新总公司
        ///// </summary>
        ///// <param name="passObj"></param>
        ///// <returns></returns>
        //[HttpPost]
        //public returnR updateHeadquarters(JObject passObj)
        //{
        //    sqlHelper sh = new sqlHelper();
        //    ISqlSugarClient db = sh.dbClient();
        //    sysLoginInCls si = public_method.getLoginInObject();
        //    returnR r = new returnR();
        //    r.code = (int)sysEnum.还没有执行;

        //    if (passObj == null)
        //    {
        //        r.code = (int)sysEnum.参数必填;
        //        return r;
        //    }
        //    //这里执行
        //    try
        //    {
        //        #region 判断
        //        string zgsId = passObj["zgsId"].ToString();
        //        if (string.IsNullOrEmpty(zgsId))
        //        {
        //            r.code = (int)sysEnum.参数必填;
        //            r.msg = "公司ID必填";
        //            return r;
        //        }
        //        string zgsName = passObj["zgsName"].ToString();
        //        if (string.IsNullOrEmpty(zgsName))
        //        {
        //            r.code = (int)sysEnum.参数必填;
        //            r.msg = "公司名称必填";
        //            return r;
        //        }
        //        //string belongsId = passObj["belongsId"].ToString();
        //        string orderNum = passObj["orderNum"].ToString();
        //        string remarks = passObj["remarks"].ToString();

        //        var dataList = db.Queryable<public_zgs>()
        //          .Where(it => it.zgsName.Equals(zgsName) && it.flag == 1 && !it.zgsId.Equals(zgsId)).ToList();
        //        if (dataList.Count > 0){
        //            r.code = (int)sysEnum.数据库中已经存在;
        //            r.msg = "已经存在[" + zgsName + "]的公司名称了";
        //            return r;
        //        }
        //        #endregion


        //        public_zgs public_zgs = new public_zgs();
        //        public_zgs.zgsId = int.Parse(zgsId);
        //        public_zgs.zgsName = zgsName;
        //        if (!string.IsNullOrEmpty(orderNum))
        //        {  //如果为前台传送的值null的情况下这样保存 不会报错
        //            public_zgs.orderNum = int.Parse(orderNum);
        //        }
        //        //if (!string.IsNullOrEmpty(belongsId))
        //        //{
        //        //    public_zgs.belongsId = int.Parse(belongsId);
        //        //}

        //        public_zgs.remarks = remarks;
        //        // public_jt.flag = 1;//默认开启
        //        public_zgs.updateDate = System.DateTime.Now;//更新人
        //        public_zgs.updateUserId = si.loginUserId;//更新时间
        //        //这里转换一下
        //        int iReturn = db.Updateable(public_zgs)
        //        .IgnoreColumns(it => new { it.createDate, it.createUserId, it.flag }).ExecuteCommand();
        //        if (iReturn > 0)
        //        {
        //            r.code = (int)sysEnum.操作成功;
        //            r.msg = "更新[" + public_zgs + "]成功";
        //            #region //写日志
        //            sys_log sys_log = new sys_log();
        //            sys_log.logType = "更新";
        //            sys_log.logFunName = "updateHeadquarters";
        //            sys_log.logText = Newtonsoft.Json.JsonConvert.SerializeObject(public_zgs);
        //            sys_log.createUserId = si.loginUserId;
        //            sys_log.createDate = System.DateTime.Now;
        //            public_method.saveLog(sys_log);
        //            #endregion
        //            return r;
        //        }else {
        //            r.code = (int)sysEnum.执行数据库失败;
        //            r.msg = "更新[" + public_zgs + "]失败";
        //            return r;
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        r.code = (int)sysEnum.发生异常;
        //        r.msg = ex.Message;
        //    }
        //    return r;
        //}

        //[HttpPost]
        //public returnR deleteHeadquarters(JObject passObj)
        //{
        //    returnR r = new returnR();
        //    try
        //    {
        //        sqlHelper sh = new sqlHelper();
        //        ISqlSugarClient db = sh.dbClient();
        //        sysLoginInCls si = public_method.getLoginInObject();
        //        if (passObj == null)
        //        {
        //            r.code = (int)sysEnum.参数必填;
        //            r.msg = "没有选择需要删除的id";
        //            return r;
        //        }
        //        string zgsIdList = passObj["zgsIdList"].ToString();
        //        if (string.IsNullOrEmpty(zgsIdList))
        //        {
        //            r.code = (int)sysEnum.参数必填;
        //            r.msg = "没有输入对应批量删除id";
        //            return r;
        //        }
        //        //这里执行
        //        string[] idArray = zgsIdList.Split(',');
        //        List<string> list = new List<string>();
        //        for (int i = 0; i < idArray.Length; i++)
        //        {
        //            list.Add(idArray[i]);
        //        }

        //        int iReturn = db.Updateable<public_zgs>()
        //        .SetColumns(it => new public_zgs()
        //        {
        //            flag = (int)sysEnum.数据被删除
        //            ,
        //            updateUserId = si.loginUserId
        //            ,
        //            updateDate = DateTime.Now
        //        })
        //        .Where(it => list.Contains(it.zgsId.ToString())).ExecuteCommand();
        //        if (iReturn > 0)
        //        {
        //            r.code = (int)sysEnum.操作成功;
        //            r.msg = "成功删除人员";
        //            #region //写日志
        //            sys_log sys_log = new sys_log();
        //            sys_log.logType = "删除";
        //            sys_log.logText = "删除人员id[" + zgsIdList + "]";
        //            sys_log.logFunName = "deleteHeadquarters";
        //            sys_log.createUserId = si.loginUserId;
        //            sys_log.createDate = System.DateTime.Now;
        //            public_method.saveLog(sys_log);
        //            #endregion
        //            return r;
        //        }
        //        else
        //        {
        //            r.code = (int)sysEnum.执行数据库失败;
        //            r.msg = "删除人员失败";
        //            return r;
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        r.code = (int)sysEnum.发生异常;
        //        r.msg = ex.Message;
        //    }
        //    return r;
        //}
        //#endregion

        //#region 分公司信息维护 
        ///// <summary>
        ///// 获取公司信息[{name: op: value }]
        ///// </summary>
        ///// <returns></returns>
        //[HttpPost]
        //public List<object> getBranchOfficeList(JObject passJson)
        //{
        //    try
        //    {
        //        sqlHelper sh = new sqlHelper();
        //        ISqlSugarClient db = sh.dbClient();
        //        string sql = "";
        //        sql += " select fgs.fgsId,fgs.fgsName,fgs.remarks,fgs.belongsId,zgs.zgsName,fgs.flag,fgs.orderNum,fgs.createDate,cu.username createName,fgs.updateDate,uu.userName updateName " +
        //                "from public_fgs fgs " +
        //                "left join sys_user cu on fgs.createUserId = cu.userId and cu.flag = 1 " +
        //                "left join sys_user uu on fgs.updateUserId = uu.userId and uu.flag = 1 " +
        //                "inner join public_zgs zgs on zgs.zgsId = fgs.belongsId and zgs.flag = 1 " +
        //                //"inner join public_jt jt on jt.jtId = zgs.belongsId and jt.flag = 1 " +
        //                "where fgs.flag = 1 ";
        //        if (passJson != null)
        //        {
        //            JArray passSearchJarry = JArray.Parse(passJson["centerSearchArray"].ToString());
        //            for (var i = 0; i < passSearchJarry.Count; i++)
        //            {
        //                string key = passSearchJarry[i]["fieldName"].ToString();
        //                string op = passSearchJarry[i]["op"].ToString();
        //                string value = passSearchJarry[i]["fieldValue"].ToString(); ;
        //                if (!string.IsNullOrEmpty(key)
        //                    && !string.IsNullOrEmpty(op)
        //                    && !string.IsNullOrEmpty(value))
        //                {
        //                    sql += " and " + key + public_method.get_op_sql(op, value);
        //                }
        //            }
        //        }
        //        //这里把查询的语句记录到内存中
        //        sysSearchSql sss = new sysSearchSql();
        //        sss.loginInIp = public_method.GetIPAddress();
        //        sss.gridkey = "getBranchOfficeList";//这里记录一下
        //        sss.sql = sql;
        //        MvcApplication.setsysSearchSql(sss);
        //        var list = db.SqlQueryable<object>(sql).OrderBy("orderNum").ToList();
        //        return list;
        //    }
        //    catch (Exception ex)
        //    {
        //        return new List<object>();
        //    }
        //}

        ///// <summary>
        ///// 增加公司信息
        ///// </summary>
        ///// <param name="passObj"></param>
        ///// <returns></returns>
        //[HttpPost]
        //public returnR addBranchOffice(JObject passObj)
        //{
        //    sqlHelper sh = new sqlHelper();
        //    ISqlSugarClient db = sh.dbClient();
        //    sysLoginInCls si = public_method.getLoginInObject();
        //    returnR r = new returnR();
        //    r.code = (int)sysEnum.还没有执行;
        //    if (passObj == null)
        //    {
        //        r.code = (int)sysEnum.参数必填;
        //        return r;
        //    }
        //    //这里执行
        //    try
        //    {
        //        #region 判断
        //        string fgsName = passObj["fgsName"].ToString();
        //        if (string.IsNullOrEmpty(fgsName))
        //        {
        //            r.code = (int)sysEnum.参数必填;
        //            r.msg = "公司名称必填";
        //            return r;
        //        }
        //        string belongsId = passObj["belongsId"].ToString();
        //        string orderNum = passObj["orderNum"].ToString();
        //        //if (string.IsNullOrEmpty(belongsId)){
        //        //    r.code = (int)sysEnum.参数必填;
        //        //    r.msg = "集团名称必填";
        //        //    return r;
        //        //}

        //        //存在性check
        //        var dataList1 = db.Queryable<public_fgs>()
        //            .Where(it => it.flag == 1 &&it.belongsId.ToString() == belongsId && it.fgsName.ToString().Equals(fgsName)).ToList();
        //        if (dataList1.Count > 0)
        //        {
        //            r.code = (int)sysEnum.数据库中已经存在;
        //            r.msg = "该分公司名称已经存在";
        //            return r;
        //        }
        //        string remarks = passObj["remarks"].ToString();
        //        #endregion

        //        public_fgs public_fgs = new public_fgs();
        //        public_fgs.fgsName = fgsName;

        //        if (!string.IsNullOrEmpty(belongsId))
        //        {
        //            public_fgs.belongsId = int.Parse(belongsId);
        //        }
        //        if (!string.IsNullOrEmpty(orderNum))
        //        {
        //            public_fgs.orderNum = int.Parse(orderNum);
        //        }
        //        public_fgs.createDate = System.DateTime.Now;
        //        public_fgs.createUserId = si.loginUserId; //创建人的id
        //        public_fgs.remarks = remarks;
        //        public_fgs.flag = 1;//默认开启
        //        int ipersonId = db.Insertable(public_fgs).ExecuteReturnIdentity();
        //        if (ipersonId > 0)
        //        {
        //            r.code = (int)sysEnum.操作成功;
        //            r.msg = "成功添加[" + fgsName + "]";
        //            #region //写日志
        //            sys_log sys_log = new sys_log();
        //            sys_log.logType = "新增";
        //            sys_log.logFunName = "addBranchOffice";
        //            sys_log.logText = Newtonsoft.Json.JsonConvert.SerializeObject(public_fgs);
        //            sys_log.createUserId = si.loginUserId;
        //            public_method.saveLog(sys_log);
        //            #endregion
        //            return r;
        //        }
        //        else
        //        {
        //            r.code = (int)sysEnum.执行数据库失败;
        //            r.msg = "添加[" + fgsName + "]失败";
        //            return r;
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        r.code = (int)sysEnum.发生异常;
        //        r.msg = ex.Message;
        //    }
        //    return r;

        //}

        ///// <summary>
        ///// 更新分公司信息
        ///// </summary>
        ///// <param name="passObj"></param>
        ///// <returns></returns>
        //[HttpPost]
        //public returnR updateBranchOffice(JObject passObj)
        //{
        //    sqlHelper sh = new sqlHelper();
        //    ISqlSugarClient db = sh.dbClient();
        //    sysLoginInCls si = public_method.getLoginInObject();
        //    returnR r = new returnR();
        //    r.code = (int)sysEnum.还没有执行;

        //    if (passObj == null)
        //    {
        //        r.code = (int)sysEnum.参数必填;
        //        return r;
        //    }
        //    //这里执行
        //    try
        //    {
        //        #region 判断
        //        string fgsId = passObj["fgsId"].ToString();
        //        if (string.IsNullOrEmpty(fgsId)) { 
        //            r.code = (int)sysEnum.参数必填;
        //            r.msg = "分公司id必填";
        //            return r;
        //        }
        //        string fgsName = passObj["fgsName"].ToString();
        //        if (string.IsNullOrEmpty(fgsName))
        //        {
        //            r.code = (int)sysEnum.参数必填;
        //            r.msg = "分公司名称必填";
        //            return r;
        //        }
        //        string belongsId = passObj["belongsId"].ToString();
        //        string orderNum = passObj["orderNum"].ToString();
        //        //if (string.IsNullOrEmpty(belongsId))
        //        //{
        //        //    r.code = (int)sysEnum.参数必填;
        //        //    r.msg = "集团名称必填";
        //        //    return r;
        //        //}
        //        var dataList = db.Queryable<public_fgs>()
        //          .Where(it => it.fgsName.Equals(fgsName) && it.flag == 1 && !it.fgsId.Equals(fgsId)).ToList();
        //        if (dataList.Count > 0)
        //        {
        //            r.code = (int)sysEnum.数据库中已经存在;
        //            r.msg = "已经存在[" + fgsName + "]的公司名称了";
        //            return r;
        //        }
        //        #endregion
        //        string remarks = passObj["remarks"].ToString();
        //        public_fgs public_fgs = new public_fgs();
        //        public_fgs.fgsId = int.Parse(fgsId);
        //        public_fgs.fgsName = fgsName;
        //        if (!string.IsNullOrEmpty(belongsId))
        //        {
        //            public_fgs.belongsId = int.Parse(belongsId);
        //        }
        //        if (!string.IsNullOrEmpty(orderNum))
        //        {
        //            public_fgs.orderNum = int.Parse(orderNum);
        //        }

        //        public_fgs.remarks = remarks;
        //        // public_jt.flag = 1;//默认开启
        //        public_fgs.updateDate = System.DateTime.Now;//更新人
        //        public_fgs.updateUserId = si.loginUserId;//更新时间
        //        //这里转换一下
        //        int iReturn = db.Updateable(public_fgs)
        //        .IgnoreColumns(it => new { it.createDate, it.createUserId, it.flag }).ExecuteCommand();
        //        if (iReturn > 0)
        //        {
        //            r.code = (int)sysEnum.操作成功;
        //            r.msg = "更新[" + public_fgs + "]成功";
        //            #region //写日志
        //            sys_log sys_log = new sys_log();
        //            sys_log.logType = "更新";
        //            sys_log.logFunName = "updateBranchOffice";
        //            sys_log.logText = Newtonsoft.Json.JsonConvert.SerializeObject(public_fgs);
        //            sys_log.createUserId = si.loginUserId;
        //            sys_log.createDate = System.DateTime.Now;
        //            public_method.saveLog(sys_log);
        //            #endregion
        //            return r;
        //        }
        //        else
        //        {
        //            r.code = (int)sysEnum.执行数据库失败;
        //            r.msg = "更新[" + public_fgs + "]失败";
        //            return r;
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        r.code = (int)sysEnum.发生异常;
        //        r.msg = ex.Message;
        //    }
        //    return r;
        //}

        //[HttpPost]
        //public returnR deleteBranchOffice(JObject passObj)
        //{
        //    returnR r = new returnR();
        //    try
        //    {
        //        sqlHelper sh = new sqlHelper();
        //        ISqlSugarClient db = sh.dbClient();
        //        sysLoginInCls si = public_method.getLoginInObject();
        //        if (passObj == null)
        //        {
        //            r.code = (int)sysEnum.参数必填;
        //            r.msg = "没有选择需要删除的id";
        //            return r;
        //        }
        //        string fgsIdList = passObj["fgsIdList"].ToString();
        //        if (string.IsNullOrEmpty(fgsIdList))
        //        {
        //            r.code = (int)sysEnum.参数必填;
        //            r.msg = "没有输入对应批量删除id";
        //            return r;
        //        }
        //        //这里执行
        //        string[] idArray = fgsIdList.Split(',');
        //        List<string> list = new List<string>();
        //        for (int i = 0; i < idArray.Length; i++)
        //        {
        //            list.Add(idArray[i]);
        //        }

        //        int iReturn = db.Updateable<public_fgs>()
        //        .SetColumns(it => new public_fgs()
        //        {
        //            flag = (int)sysEnum.数据被删除
        //            ,
        //            updateUserId = si.loginUserId
        //            ,
        //            updateDate = DateTime.Now
        //        })
        //        .Where(it => list.Contains(it.fgsId.ToString())).ExecuteCommand();
        //        if (iReturn > 0)
        //        {
        //            r.code = (int)sysEnum.操作成功;
        //            r.msg = "成功删除人员";
        //            #region //写日志
        //            sys_log sys_log = new sys_log();
        //            sys_log.logType = "删除";
        //            sys_log.logText = "删除人员id[" + fgsIdList + "]";
        //            sys_log.logFunName = "deleteBranchOffice";
        //            sys_log.createUserId = si.loginUserId;
        //            sys_log.createDate = System.DateTime.Now;
        //            public_method.saveLog(sys_log);
        //            #endregion
        //            return r;
        //        }
        //        else
        //        {
        //            r.code = (int)sysEnum.执行数据库失败;
        //            r.msg = "删除人员失败";
        //            return r;
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        r.code = (int)sysEnum.发生异常;
        //        r.msg = ex.Message;
        //    }
        //    return r;
        //}
        //#endregion

        //#region 部门信息维护 
        ///// <summary>
        ///// 获取部门信息[{name: op: value }]
        ///// </summary>
        ///// <returns></returns>
        //[HttpPost]
        //public List<object> getDepartmentList(JObject passJson)
        //{
        //    try
        //    {
        //        sqlHelper sh = new sqlHelper();
        //        ISqlSugarClient db = sh.dbClient();
        //        string sql = "";
        //        sql += " select dpm.departmentId,dpm.departmentName,dpm.remarks,dpm.orderNum,dpm.belongsId,dpm.flag," +
        //            " dpm.createDate,cu.username createName,dpm.updateDate,uu.userName updateName,fgs.fgsName ,zgs.zgsName" +
        //            " from public_department dpm " +
        //            " left join sys_user cu on dpm.createUserId = cu.userId and cu.flag = 1 " +
        //            " left join sys_user uu on dpm.updateUserId = uu.userId and uu.flag = 1 " +
        //            " inner join public_fgs fgs on fgs.fgsId = dpm.belongsId and fgs.flag = 1 " +
        //            " inner join public_zgs zgs on fgs.belongsId = zgs.zgsId and zgs.flag = 1 " + 
        //            //" inner join public_jt jt on zgs.belongsId = jt.jtId and jt.flag = 1 " +
        //            " where dpm.flag = 1 ";

        //        if (passJson != null){
        //            JArray passSearchJarry = JArray.Parse(passJson["centerSearchArray"].ToString());
        //            for (var i = 0; i < passSearchJarry.Count; i++)
        //            {
        //                string key = passSearchJarry[i]["fieldName"].ToString();
        //                string op = passSearchJarry[i]["op"].ToString();
        //                string value = passSearchJarry[i]["fieldValue"].ToString(); ;
        //                if (!string.IsNullOrEmpty(key)
        //                    && !string.IsNullOrEmpty(op)
        //                    && !string.IsNullOrEmpty(value))
        //                {
        //                    sql += " and " + key + public_method.get_op_sql(op, value);
        //                }
        //            }
        //        }
        //        //这里把查询的语句记录到内存中
        //        sysSearchSql sss = new sysSearchSql();
        //        sss.loginInIp = public_method.GetIPAddress();
        //        sss.gridkey = "getDepartmentList";//这里记录一下
        //        sss.sql = sql;
        //        MvcApplication.setsysSearchSql(sss);
        //        var list = db.SqlQueryable<object>(sql).OrderBy("orderNum").ToList();
        //        return list;
        //    }
        //    catch (Exception ex)
        //    {
        //        return new List<object>();
        //    }
        //}

        ///// <summary>
        ///// 增加部门信息
        ///// </summary>
        ///// <param name="passObj"></param>
        ///// <returns></returns>
        //[HttpPost]
        //public returnR addDepartment(JObject passObj)
        //{
        //    sqlHelper sh = new sqlHelper();
        //    ISqlSugarClient db = sh.dbClient();
        //    sysLoginInCls si = public_method.getLoginInObject();
        //    returnR r = new returnR();
        //    r.code = (int)sysEnum.还没有执行;
        //    if (passObj == null)
        //    {
        //        r.code = (int)sysEnum.参数必填;
        //        return r;
        //    }
        //    //这里执行
        //    try
        //    {
        //        #region 判断
        //        string departmentName = passObj["departmentName"].ToString();
        //        if (string.IsNullOrEmpty(departmentName))
        //        {
        //            r.code = (int)sysEnum.参数必填;
        //            r.msg = "公司名称必填";
        //            return r;
        //        }
        //        string belongsId = passObj["belongsId"].ToString();
        //        string orderNum = passObj["orderNum"].ToString();
        //        //if (string.IsNullOrEmpty(belongsId)){
        //        //    r.code = (int)sysEnum.参数必填;
        //        //    r.msg = "集团名称必填";
        //        //    return r;
        //        //}
        //        //存在性check
        //        var dataList1 = db.Queryable<public_department>()
        //            .Where(it => it.flag == 1 &&it.belongsId.ToString() == belongsId  && it.departmentName.ToString().Equals(departmentName)).ToList();
        //        if (dataList1.Count > 0)
        //        {
        //            r.code = (int)sysEnum.数据库中已经存在;
        //            r.msg = "该分公司名称已经存在";
        //            return r;
        //        }
        //        string remarks = passObj["remarks"].ToString();
        //        #endregion

        //        public_department public_department = new public_department();
        //        public_department.departmentName = departmentName;

        //        if (!string.IsNullOrEmpty(belongsId))
        //        {
        //            public_department.belongsId = int.Parse(belongsId);
        //        }
        //        if (!string.IsNullOrEmpty(orderNum))
        //        {
        //            public_department.orderNum = int.Parse(orderNum);
        //        }
        //        public_department.createDate = System.DateTime.Now;
        //        public_department.createUserId = si.loginUserId; //创建人的id
        //        public_department.remarks = remarks;
        //        public_department.flag = 1;//默认开启
        //        int ipersonId = db.Insertable(public_department).ExecuteReturnIdentity();
        //        if (ipersonId > 0){
        //            r.code = (int)sysEnum.操作成功;
        //            r.msg = "成功添加[" + departmentName + "]";
        //            #region //写日志
        //            sys_log sys_log = new sys_log();
        //            sys_log.logType = "新增";
        //            sys_log.logFunName = "addDepartment";
        //            sys_log.logText = Newtonsoft.Json.JsonConvert.SerializeObject(public_department);
        //            sys_log.createUserId = si.loginUserId;
        //            public_method.saveLog(sys_log);
        //            #endregion
        //            return r;
        //        }
        //        else
        //        {
        //            r.code = (int)sysEnum.执行数据库失败;
        //            r.msg = "添加[" + departmentName + "]失败";
        //            return r;
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        r.code = (int)sysEnum.发生异常;
        //        r.msg = ex.Message;
        //    }
        //    return r;

        //}

        ///// <summary>
        ///// 更新部门信息
        ///// </summary>
        ///// <param name="passObj"></param>
        ///// <returns></returns>
        //[HttpPost]
        //public returnR updateDepartment(JObject passObj)
        //{
        //    sqlHelper sh = new sqlHelper();
        //    ISqlSugarClient db = sh.dbClient();
        //    sysLoginInCls si = public_method.getLoginInObject();
        //    returnR r = new returnR();
        //    r.code = (int)sysEnum.还没有执行;

        //    if (passObj == null)
        //    {
        //        r.code = (int)sysEnum.参数必填;
        //        return r;
        //    }
        //    //这里执行
        //    try
        //    {
        //        #region 判断
        //        string departmentId = passObj["departmentId"].ToString();
        //        if (string.IsNullOrEmpty(departmentId))
        //        {
        //            r.code = (int)sysEnum.参数必填;
        //            r.msg = "部门id必填";
        //            return r;
        //        }
        //        string departmentName = passObj["departmentName"].ToString();
        //        if (string.IsNullOrEmpty(departmentName))
        //        {
        //            r.code = (int)sysEnum.参数必填;
        //            r.msg = "部门名称必填";
        //            return r;
        //        }
        //        string belongsId = passObj["belongsId"].ToString();
        //        string orderNum = passObj["orderNum"].ToString();
        //        //if (string.IsNullOrEmpty(belongsId))
        //        //{
        //        //    r.code = (int)sysEnum.参数必填;
        //        //    r.msg = "集团名称必填";
        //        //    return r;
        //        //}
        //        var dataList = db.Queryable<public_department>()
        //          .Where(it => it.departmentName.Equals(departmentName) && it.flag == 1 && !it.departmentId.Equals(departmentId)).ToList();
        //        if (dataList.Count > 0)
        //        {
        //            r.code = (int)sysEnum.数据库中已经存在;
        //            r.msg = "已经存在[" + departmentName + "]的公司名称了";
        //            return r;
        //        }
        //        #endregion
        //        string remarks = passObj["remarks"].ToString();
        //        public_department public_department = new public_department();
        //        public_department.departmentId = int.Parse(departmentId);
        //        public_department.departmentName = departmentName;
        //        if (!string.IsNullOrEmpty(belongsId))
        //        {
        //            public_department.belongsId = int.Parse(belongsId);
        //        }
        //        if (!string.IsNullOrEmpty(orderNum))
        //        {
        //            public_department.orderNum = int.Parse(orderNum);
        //        }

        //        public_department.remarks = remarks;
        //        // public_jt.flag = 1;//默认开启
        //        public_department.updateDate = System.DateTime.Now;//更新人
        //        public_department.updateUserId = si.loginUserId;//更新时间
        //        //这里转换一下
        //        int iReturn = db.Updateable(public_department)
        //        .IgnoreColumns(it => new { it.createDate, it.createUserId, it.flag }).ExecuteCommand();
        //        if (iReturn > 0)
        //        {
        //            r.code = (int)sysEnum.操作成功;
        //            r.msg = "更新[" + departmentName + "]成功";
        //            #region //写日志
        //            sys_log sys_log = new sys_log();
        //            sys_log.logType = "更新";
        //            sys_log.logFunName = "updatedepartment";
        //            sys_log.logText = Newtonsoft.Json.JsonConvert.SerializeObject(public_department);
        //            sys_log.createUserId = si.loginUserId;
        //            sys_log.createDate = System.DateTime.Now;
        //            public_method.saveLog(sys_log);
        //            #endregion
        //            return r;
        //        }
        //        else
        //        {
        //            r.code = (int)sysEnum.执行数据库失败;
        //            r.msg = "更新[" + departmentName + "]失败";
        //            return r;
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        r.code = (int)sysEnum.发生异常;
        //        r.msg = ex.Message;
        //    }
        //    return r;
        //}

        //[HttpPost]
        //public returnR deleteDepartment(JObject passObj)
        //{
        //    returnR r = new returnR();
        //    try
        //    {
        //        sqlHelper sh = new sqlHelper();
        //        ISqlSugarClient db = sh.dbClient();
        //        sysLoginInCls si = public_method.getLoginInObject();
        //        if (passObj == null)
        //        {
        //            r.code = (int)sysEnum.参数必填;
        //            r.msg = "没有选择需要删除的id";
        //            return r;
        //        }
        //        string departmentIdList = passObj["departmentIdList"].ToString();
        //        if (string.IsNullOrEmpty(departmentIdList))
        //        {
        //            r.code = (int)sysEnum.参数必填;
        //            r.msg = "没有输入对应批量删除id";
        //            return r;
        //        }
        //        //这里执行
        //        string[] idArray = departmentIdList.Split(',');
        //        List<string> list = new List<string>();
        //        for (int i = 0; i < idArray.Length; i++)
        //        {
        //            list.Add(idArray[i]);
        //        }

        //        int iReturn = db.Updateable<public_department>()
        //        .SetColumns(it => new public_department()
        //        {
        //            flag = (int)sysEnum.数据被删除
        //            ,
        //            updateUserId = si.loginUserId
        //            ,
        //            updateDate = DateTime.Now
        //        })
        //        .Where(it => list.Contains(it.departmentId.ToString())).ExecuteCommand();
        //        if (iReturn > 0)
        //        {
        //            r.code = (int)sysEnum.操作成功;
        //            r.msg = "成功删除人员";
        //            #region //写日志
        //            sys_log sys_log = new sys_log();
        //            sys_log.logType = "删除";
        //            sys_log.logText = "删除人员id[" + departmentIdList + "]";
        //            sys_log.logFunName = "deleteDepartment";
        //            sys_log.createUserId = si.loginUserId;
        //            sys_log.createDate = System.DateTime.Now;
        //            public_method.saveLog(sys_log);
        //            #endregion
        //            return r;
        //        }
        //        else
        //        {
        //            r.code = (int)sysEnum.执行数据库失败;
        //            r.msg = "删除人员失败";
        //            return r;
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        r.code = (int)sysEnum.发生异常;
        //        r.msg = ex.Message;
        //    }
        //    return r;
        //}
        //#endregion

        //#region 小队信息维护 
        ///// <summary>
        ///// 获取小队信息[{name: op: value }]
        ///// </summary>
        ///// <returns></returns>
        //[HttpPost]
        //public List<object> getTeamList(JObject passJson)
        //{
        //    ISqlSugarClient db=null;
        //    try
        //    {
        //        sqlHelper sh = new sqlHelper();

        //        db=sh.dbClient();

        //        string sql = "";
        //        sql += " select team.teamId,team.teamName,team.remarks,team.belongsId,team.orderNum,team.flag," +
        //                " team.createDate,cu.username createName," +
        //                " team.updateDate,uu.userName updateName," +
        //                " dpm.departmentId,dpm.departmentName," +
        //                " fgs.fgsId,fgs.fgsName," +
        //                " zgs.zgsId,zgs.zgsName " +
        //                " from public_team team " +
        //                " left join sys_user cu on team.createUserId = cu.userId and cu.flag = 1 " +
        //                " left join sys_user uu on team.updateUserId = uu.userId and uu.flag = 1 " +
        //                " inner join public_department dpm on dpm.departmentId = team.belongsId and dpm.flag = 1 " +
        //                " inner join public_fgs fgs on dpm.belongsId = fgs.fgsId and fgs.flag = 1 " +
        //                " inner join public_zgs zgs on fgs.belongsId = zgs.zgsId and zgs.flag = 1 " +
        //                " where team.flag = 1 ";
        //        if (passJson != null)
        //        {
        //            JArray passSearchJarry = JArray.Parse(passJson["centerSearchArray"].ToString());
        //            for (var i = 0; i < passSearchJarry.Count; i++)
        //            {
        //                string key = passSearchJarry[i]["fieldName"].ToString();
        //                string op = passSearchJarry[i]["op"].ToString();
        //                string value = passSearchJarry[i]["fieldValue"].ToString(); ;
        //                if (!string.IsNullOrEmpty(key)
        //                    && !string.IsNullOrEmpty(op)
        //                    && !string.IsNullOrEmpty(value))
        //                {
        //                    sql += " and " + key + public_method.get_op_sql(op, value);
        //                }
        //            }
        //        }
        //        //这里把查询的语句记录到内存中
        //        sysSearchSql sss = new sysSearchSql();
        //        sss.loginInIp = public_method.GetIPAddress();
        //        sss.gridkey = "getTeamList";//这里记录一下
        //        sss.sql = sql;
        //        MvcApplication.setsysSearchSql(sss);
        //        var list = db.SqlQueryable<object>(sql).OrderBy("orderNum").ToList();
        //        return list;
        //    }
        //    catch (Exception ex)
        //    {
        //        return new List<object>();
        //    }
        //    finally{
        //        db.Close();
        //    }

        //}

        ///// <summary>
        ///// 增加小队信息
        ///// </summary>
        ///// <param name="passObj"></param>
        ///// <returns></returns>
        //[HttpPost]
        //public returnR addTeam(JObject passObj)
        //{
        //    sqlHelper sh = new sqlHelper();
        //    ISqlSugarClient db = sh.dbClient();
        //    sysLoginInCls si = public_method.getLoginInObject();
        //    returnR r = new returnR();
        //    r.code = (int)sysEnum.还没有执行;
        //    if (passObj == null)
        //    {
        //        r.code = (int)sysEnum.参数必填;
        //        return r;
        //    }
        //    //这里执行
        //    try
        //    {
        //        #region 判断
        //        string teamName = passObj["teamName"].ToString();
        //        if (string.IsNullOrEmpty(teamName))
        //        {
        //            r.code = (int)sysEnum.参数必填;
        //            r.msg = "小队名称必填";
        //            return r;
        //        }
        //        string belongsId = passObj["belongsId"].ToString();
        //        string orderNum = passObj["orderNum"].ToString();
        //        //if (string.IsNullOrEmpty(belongsId)){
        //        //    r.code = (int)sysEnum.参数必填;
        //        //    r.msg = "集团名称必填";
        //        //    return r;
        //        //}

        //        //存在性check
        //        var dataList1 = db.Queryable<public_team>()
        //            .Where(it => it.flag == 1 && it.belongsId.ToString() == belongsId && it.teamName.ToString().Equals(teamName)).ToList();
        //        if (dataList1.Count > 0)
        //        {
        //            r.code = (int)sysEnum.数据库中已经存在;
        //            r.msg = "该小队名称已经存在";
        //            return r;
        //        }
        //        string remarks = passObj["remarks"].ToString();
        //        #endregion

        //        public_team public_team = new public_team();
        //        public_team.teamName = teamName;
        //        if (!string.IsNullOrEmpty(belongsId))
        //        {
        //            public_team.belongsId = int.Parse(belongsId);
        //        }
        //        if (!string.IsNullOrEmpty(orderNum))
        //        {
        //            public_team.orderNum = int.Parse(orderNum);
        //        }
        //        public_team.createDate = System.DateTime.Now;
        //        public_team.createUserId = si.loginUserId; //创建人的id
        //        public_team.remarks = remarks;
        //        public_team.flag = 1;//默认开启
        //        int ipersonId = db.Insertable(public_team).ExecuteReturnIdentity();
        //        if (ipersonId > 0)
        //        {
        //            r.code = (int)sysEnum.操作成功;
        //            r.msg = "成功添加[" + teamName + "]";
        //            #region //写日志
        //            sys_log sys_log = new sys_log();
        //            sys_log.logType = "新增";
        //            sys_log.logFunName = "addTeam";
        //            sys_log.logText = Newtonsoft.Json.JsonConvert.SerializeObject(public_team);
        //            sys_log.createUserId = si.loginUserId;
        //            public_method.saveLog(sys_log);
        //            #endregion
        //            return r;
        //        }
        //        else
        //        {
        //            r.code = (int)sysEnum.执行数据库失败;
        //            r.msg = "添加[" + teamName + "]失败";
        //            return r;
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        r.code = (int)sysEnum.发生异常;
        //        r.msg = ex.Message;
        //    }
        //    return r;

        //}

        ///// <summary>
        ///// 更新小队信息
        ///// </summary>
        ///// <param name="passObj"></param>
        ///// <returns></returns>
        //[HttpPost]
        //public returnR updateTeam(JObject passObj)
        //{
        //    sqlHelper sh = new sqlHelper();
        //    ISqlSugarClient db = sh.dbClient();
        //    sysLoginInCls si = public_method.getLoginInObject();
        //    returnR r = new returnR();
        //    r.code = (int)sysEnum.还没有执行;

        //    if (passObj == null)
        //    {
        //        r.code = (int)sysEnum.参数必填;
        //        return r;
        //    }
        //    //这里执行
        //    try
        //    {
        //        #region 判断
        //        string teamId = passObj["teamId"].ToString();
        //        if (string.IsNullOrEmpty(teamId))
        //        {
        //            r.code = (int)sysEnum.参数必填;
        //            r.msg = "小队id必填";
        //            return r;
        //        }
        //        string teamName = passObj["teamName"].ToString();
        //        if (string.IsNullOrEmpty(teamName))
        //        {
        //            r.code = (int)sysEnum.参数必填;
        //            r.msg = "部门名称必填";
        //            return r;
        //        }
        //        string belongsId = passObj["belongsId"].ToString();
        //        string orderNum = passObj["orderNum"].ToString();
        //        //if (string.IsNullOrEmpty(belongsId))
        //        //{
        //        //    r.code = (int)sysEnum.参数必填;
        //        //    r.msg = "集团名称必填";
        //        //    return r;
        //        //}
        //        var dataList = db.Queryable<public_team>()
        //          .Where(it => it.teamName.Equals(teamName) && it.flag == 1 && !it.teamId.Equals(teamId)).ToList();
        //        if (dataList.Count > 0)
        //        {
        //            r.code = (int)sysEnum.数据库中已经存在;
        //            r.msg = "已经存在[" + teamName + "]的公司名称了";
        //            return r;
        //        }
        //        #endregion
        //        string remarks = passObj["remarks"].ToString();

        //        public_team public_team = new public_team();
        //        public_team.teamId = int.Parse(teamId);
        //        public_team.teamName = teamName;
        //        if (!string.IsNullOrEmpty(belongsId))
        //        {
        //            public_team.belongsId = int.Parse(belongsId);
        //        }
        //        if (!string.IsNullOrEmpty(orderNum))
        //        {
        //            public_team.orderNum = int.Parse(orderNum);
        //        }
        //        public_team.remarks = remarks;
        //        // public_jt.flag = 1;//默认开启
        //        public_team.updateDate = System.DateTime.Now;//更新人
        //        public_team.updateUserId = si.loginUserId;//更新时间
        //        //这里转换一下
        //        int iReturn = db.Updateable(public_team)
        //        .IgnoreColumns(it => new { it.createDate, it.createUserId, it.flag }).ExecuteCommand();
        //        if (iReturn > 0)
        //        {
        //            r.code = (int)sysEnum.操作成功;
        //            r.msg = "更新[" + teamName + "]成功";
        //            #region //写日志
        //            sys_log sys_log = new sys_log();
        //            sys_log.logType = "更新";
        //            sys_log.logFunName = "updateTeam";
        //            sys_log.logText = Newtonsoft.Json.JsonConvert.SerializeObject(public_team);
        //            sys_log.createUserId = si.loginUserId;
        //            sys_log.createDate = System.DateTime.Now;
        //            public_method.saveLog(sys_log);
        //            #endregion
        //            return r;
        //        }
        //        else
        //        {
        //            r.code = (int)sysEnum.执行数据库失败;
        //            r.msg = "更新[" + teamName + "]失败";
        //            return r;
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        r.code = (int)sysEnum.发生异常;
        //        r.msg = ex.Message;
        //    }
        //    return r;
        //}

        //[HttpPost]
        //public returnR deleteTeam(JObject passObj)
        //{
        //    returnR r = new returnR();
        //    try
        //    {
        //        sqlHelper sh = new sqlHelper();
        //        ISqlSugarClient db = sh.dbClient();
        //        sysLoginInCls si = public_method.getLoginInObject();
        //        if (passObj == null)
        //        {
        //            r.code = (int)sysEnum.参数必填;
        //            r.msg = "没有选择需要删除的id";
        //            return r;
        //        }
        //        string teamIdList = passObj["teamIdList"].ToString();
        //        if (string.IsNullOrEmpty(teamIdList))
        //        {
        //            r.code = (int)sysEnum.参数必填;
        //            r.msg = "没有输入对应批量删除id";
        //            return r;
        //        }
        //        //这里执行
        //        string[] idArray = teamIdList.Split(',');
        //        List<string> list = new List<string>();
        //        for (int i = 0; i < idArray.Length; i++)
        //        {
        //            list.Add(idArray[i]);
        //        }

        //        int iReturn = db.Updateable<public_team>()
        //        .SetColumns(it => new public_team()
        //        {
        //            flag = (int)sysEnum.数据被删除
        //            ,
        //            updateUserId = si.loginUserId
        //            ,
        //            updateDate = DateTime.Now
        //        })
        //        .Where(it => list.Contains(it.teamId.ToString())).ExecuteCommand();
        //        if (iReturn > 0)
        //        {
        //            r.code = (int)sysEnum.操作成功;
        //            r.msg = "成功删除人员";
        //            #region //写日志
        //            sys_log sys_log = new sys_log();
        //            sys_log.logType = "删除";
        //            sys_log.logText = "删除人员id[" + teamIdList + "]";
        //            sys_log.logFunName = "deleteDepartment";
        //            sys_log.createUserId = si.loginUserId;
        //            sys_log.createDate = System.DateTime.Now;
        //            public_method.saveLog(sys_log);
        //            #endregion
        //            return r;
        //        }
        //        else
        //        {
        //            r.code = (int)sysEnum.执行数据库失败;
        //            r.msg = "删除人员失败";
        //            return r;
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        r.code = (int)sysEnum.发生异常;
        //        r.msg = ex.Message;
        //    }
        //    return r;
        //}
        //#endregion

        //#region 设备-员工信息维护 
        ///// <summary>
        ///// 员工信息维护[{name: op: value }]
        ///// </summary>
        ///// <returns></returns>
        //[HttpPost]
        //public List<object> getUserList(JObject passJson)
        //{
        //    ISqlSugarClient db = null;
        //    try
        //    {
        //        sqlHelper sh = new sqlHelper();

        //        db = sh.dbClient();

        //        string sql = "";
        //        sql += " select mUser.userId,mUser.cpuId,mUser.accountName,mUser.machineName,mUser.userName,mUser.belongsId,mUser.orderNum,mUser.remarks, " +
        //                " mUser.createDate,cu.username createName, " +
        //                " mUser.updateDate,uu.userName updateName, " +
        //                " team.teamId teamId,team.teamName, " +
        //                " dpm.departmentId deptId,dpm.departmentName, " +
        //                " fgs.fgsId,fgs.fgsName, " +
        //                " zgs.zgsId,zgs.zgsName " +
        //                " from tb_Machine_user mUser  " +
        //                " left join sys_user cu on mUser.createUserId = cu.userId and cu.flag = 1 " +
        //                " left join sys_user uu on mUser.updateUserId = uu.userId and uu.flag = 1 " +
        //                " inner join public_team team on team.teamId = mUser.belongsId and team.flag = 1 " +
        //                " inner join public_department dpm on dpm.departmentId = team.belongsId and dpm.flag = 1 " +
        //                " inner join public_fgs fgs on dpm.belongsId = fgs.fgsId and fgs.flag = 1 " +
        //                " inner join public_zgs zgs on fgs.belongsId = zgs.zgsId and zgs.flag = 1 " +
        //                " where mUser.flag = 1 ";
        //        if (passJson != null)
        //        {
        //            JArray passSearchJarry = JArray.Parse(passJson["centerSearchArray"].ToString());
        //            for (var i = 0; i < passSearchJarry.Count; i++)
        //            {
        //                string key = passSearchJarry[i]["fieldName"].ToString();
        //                string op = passSearchJarry[i]["op"].ToString();
        //                string value = passSearchJarry[i]["fieldValue"].ToString(); ;
        //                if (!string.IsNullOrEmpty(key)
        //                    && !string.IsNullOrEmpty(op)
        //                    && !string.IsNullOrEmpty(value))
        //                {
        //                    sql += " and " + key + public_method.get_op_sql(op, value);
        //                }
        //            }
        //        }
        //        //这里把查询的语句记录到内存中
        //        sysSearchSql sss = new sysSearchSql();
        //        sss.loginInIp = public_method.GetIPAddress();
        //        sss.gridkey = "getUserList";//这里记录一下
        //        sss.sql = sql;
        //        MvcApplication.setsysSearchSql(sss);
        //        var list = db.SqlQueryable<object>(sql).ToList();
        //        return list;
        //    }
        //    catch (Exception ex)
        //    {
        //        return new List<object>();
        //    }
        //    finally
        //    {
        //        db.Close();
        //    }

        //}
        ///// <summary>
        ///// 增加员工信息
        ///// </summary>
        ///// <param name="passObj"></param>
        ///// <returns></returns>
        //[HttpPost]
        //public returnR addUser(JObject passObj)
        //{
        //    sqlHelper sh = new sqlHelper();
        //    ISqlSugarClient db = sh.dbClient();
        //    sysLoginInCls si = public_method.getLoginInObject();
        //    returnR r = new returnR();
        //    r.code = (int)sysEnum.还没有执行;
        //    if (passObj == null)
        //    {
        //        r.code = (int)sysEnum.参数必填;
        //        return r;
        //    }
        //    //这里执行
        //    try
        //    {
        //        #region 判断
        //        string userName = passObj["userName"].ToString();
        //        if (string.IsNullOrEmpty(userName))
        //        {
        //            r.code = (int)sysEnum.参数必填;
        //            r.msg = "员工名称必填";
        //            return r;
        //        }
        //        string belongsId = passObj["belongsId"].ToString();
        //        string cpuId = passObj["cpuId"].ToString();
        //        if (string.IsNullOrEmpty(cpuId))
        //        {
        //            r.code = (int)sysEnum.参数必填;
        //            r.msg = "cpuId必填";
        //            return r;
        //        }
        //        string machineName = passObj["machineName"].ToString();
        //        string accountName = passObj["accountName"].ToString();
        //        string orderNum = passObj["orderNum"].ToString();

        //        //存在性check
        //        var dataList1 = db.Queryable<tb_Machine_user>()
        //            .Where(it => it.flag == 1 && it.userName.ToString().Equals(userName)).ToList();
        //        if (dataList1.Count > 0)
        //        {
        //            r.code = (int)sysEnum.数据库中已经存在;
        //            r.msg = "该用户名称已经存在";
        //            return r;
        //        }
        //        string remarks = passObj["remarks"].ToString();

        //        #endregion

        //        tb_Machine_user tb_Machine_user = new tb_Machine_user();
        //        tb_Machine_user.userName = userName;
        //        tb_Machine_user.cpuId = cpuId;
        //        tb_Machine_user.machineName = machineName;
        //        tb_Machine_user.accountName = accountName;
        //        if (!string.IsNullOrEmpty(belongsId))
        //        {
        //            tb_Machine_user.belongsId = int.Parse(belongsId);
        //        }
        //        if (!string.IsNullOrEmpty(orderNum))
        //        {
        //            tb_Machine_user.orderNum = int.Parse(orderNum);
        //        }
        //        tb_Machine_user.createDate = System.DateTime.Now;
        //        tb_Machine_user.createUserId = si.loginUserId; //创建人的id
        //        tb_Machine_user.remarks = remarks;
        //        tb_Machine_user.flag = 1;//默认开启
        //        int ipersonId = db.Insertable(tb_Machine_user).ExecuteReturnIdentity();
        //        if (ipersonId > 0)
        //        {
        //            r.code = (int)sysEnum.操作成功;
        //            r.msg = "成功添加[" + userName + "]";
        //            #region //写日志
        //            sys_log sys_log = new sys_log();
        //            sys_log.logType = "新增";
        //            sys_log.logFunName = "addTeam";
        //            sys_log.logText = Newtonsoft.Json.JsonConvert.SerializeObject(tb_Machine_user);
        //            sys_log.createUserId = si.loginUserId;
        //            public_method.saveLog(sys_log);
        //            #endregion
        //            return r;
        //        }
        //        else
        //        {
        //            r.code = (int)sysEnum.执行数据库失败;
        //            r.msg = "添加[" + userName + "]失败";
        //            return r;
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        r.code = (int)sysEnum.发生异常;
        //        r.msg = ex.Message;
        //    }
        //    return r;

        //}
        //[HttpPost]
        //public returnR deleteUser(JObject passObj)
        //{
        //    returnR r = new returnR();
        //    try
        //    {
        //        sqlHelper sh = new sqlHelper();
        //        ISqlSugarClient db = sh.dbClient();
        //        sysLoginInCls si = public_method.getLoginInObject();
        //        if (passObj == null)
        //        {
        //            r.code = (int)sysEnum.参数必填;
        //            r.msg = "没有选择需要删除的id";
        //            return r;
        //        }
        //        string userIdList = passObj["userIdList"].ToString();
        //        if (string.IsNullOrEmpty(userIdList))
        //        {
        //            r.code = (int)sysEnum.参数必填;
        //            r.msg = "没有输入对应批量删除id";
        //            return r;
        //        }
        //        //这里执行
        //        string[] idArray = userIdList.Split(',');
        //        List<string> list = new List<string>();
        //        for (int i = 0; i < idArray.Length; i++)
        //        {
        //            list.Add(idArray[i]);
        //        }

        //        int iReturn = db.Updateable<tb_Machine_user>()
        //        .SetColumns(it => new tb_Machine_user()
        //        {
        //            flag = (int)sysEnum.数据被删除
        //            ,
        //            updateUserId = si.loginUserId
        //            ,
        //            updateDate = DateTime.Now
        //        })
        //        .Where(it => list.Contains(it.userId.ToString())).ExecuteCommand();
        //        if (iReturn > 0)
        //        {
        //            r.code = (int)sysEnum.操作成功;
        //            r.msg = "成功删除人员";
        //            #region //写日志
        //            sys_log sys_log = new sys_log();
        //            sys_log.logType = "删除";
        //            sys_log.logText = "删除人员id[" + userIdList + "]";
        //            sys_log.logFunName = "deleteUser";
        //            sys_log.createUserId = si.loginUserId;
        //            sys_log.createDate = System.DateTime.Now;
        //            public_method.saveLog(sys_log);
        //            #endregion
        //            return r;
        //        }
        //        else
        //        {
        //            r.code = (int)sysEnum.执行数据库失败;
        //            r.msg = "删除人员失败";
        //            return r;
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        r.code = (int)sysEnum.发生异常;
        //        r.msg = ex.Message;
        //    }
        //    return r;
        //}
        ///// <summary>
        ///// 更新小队信息
        ///// </summary>
        ///// <param name="passObj"></param>
        ///// <returns></returns>
        //[HttpPost]
        //public returnR updateUser(JObject passObj)
        //{
        //    sqlHelper sh = new sqlHelper();
        //    ISqlSugarClient db = sh.dbClient();
        //    sysLoginInCls si = public_method.getLoginInObject();
        //    returnR r = new returnR();
        //    r.code = (int)sysEnum.还没有执行;

        //    if (passObj == null)
        //    {
        //        r.code = (int)sysEnum.参数必填;
        //        return r;
        //    }
        //    //这里执行
        //    try
        //    {
        //        string userId = passObj["userId"].ToString();
        //        string accountName = passObj["accountName"].ToString();
        //        string cpuId = passObj["cpuId"].ToString();
        //        string machineName = passObj["machineName"].ToString();
        //        string userName = passObj["userName"].ToString();
        //        string orderNum = passObj["orderNum"].ToString();
        //        if (string.IsNullOrEmpty(userName))
        //        {
        //            r.code = (int)sysEnum.参数必填;
        //            r.msg = "用户名称必填";
        //            return r;
        //        }
        //        string remarks = passObj["remarks"].ToString();
        //        int belongsId = int.Parse(passObj["belongsId"].ToString());
        //        tb_Machine_user tb_Machine_user = new tb_Machine_user();

        //        if (!string.IsNullOrEmpty(userId))
        //        {
        //            tb_Machine_user.userId = int.Parse(userId);
        //        }
        //        if (!string.IsNullOrEmpty(orderNum))
        //        {
        //            tb_Machine_user.orderNum = int.Parse(orderNum);
        //        }
        //        tb_Machine_user.accountName = accountName;
        //        tb_Machine_user.machineName = machineName;
        //        tb_Machine_user.userName = userName;
        //        tb_Machine_user.cpuId = cpuId;
        //        tb_Machine_user.remarks = remarks;
        //        tb_Machine_user.belongsId = belongsId;
        //        tb_Machine_user.flag = 1;
        //        tb_Machine_user.updateDate = DateTime.Now;
        //        tb_Machine_user.updateUserId = si.loginUserId;
        //        int iReturn = db.Updateable(tb_Machine_user)
        //           .IgnoreColumns(it => new {
        //               it.sex
        //               ,
        //               it.createDate
        //               ,
        //               it.createUserId                   
        //           }).ExecuteCommand();

        //        if (iReturn > 0)
        //        {
        //            r.code = (int)sysEnum.操作成功;
        //            r.msg = "更新[" + userName + "]成功";
        //            #region //写日志
        //            sys_log sys_log = new sys_log();
        //            sys_log.logType = "更新";
        //            sys_log.logFunName = "updateTeam";
        //            sys_log.logText = Newtonsoft.Json.JsonConvert.SerializeObject(tb_Machine_user);
        //            sys_log.createUserId = si.loginUserId;
        //            sys_log.createDate = System.DateTime.Now;
        //            public_method.saveLog(sys_log);
        //            #endregion
        //            return r;
        //        }
        //        else
        //        {
        //            r.code = (int)sysEnum.执行数据库失败;
        //            r.msg = "更新[" + userName + "]失败";
        //            return r;
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        r.code = (int)sysEnum.发生异常;
        //        r.msg = ex.Message;
        //    }
        //    return r;
        //}
        //#endregion
        #endregion


        #region 组织架构维护相关方法
        /// <summary>
        /// 获取组织架构关系[{name: op: value }]
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        public List<object> getCombination(JObject passJson)
        {
            ISqlSugarClient db = null;
            try
            {
                sqlHelper sh = new sqlHelper();

                db = sh.dbClient();

                string sql = "";
                sql += " select departmentId as id,departmentName,belongsId as pid " +
                        " from public_department " +
                        " where flag = 1 ";

                //这里把查询的语句记录到内存中
                sysSearchSql sss = new sysSearchSql();
                sss.loginInIp = public_method.GetIPAddress();
                sss.gridkey = "getCombination";//这里记录一下
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
        /// 新增架构节点
        /// </summary>
        /// <param name="passObj"></param>
        /// <returns></returns>
        [HttpPost]
        public JObject addElement(JObject passObj)
        {
            sqlHelper sh = new sqlHelper();
            ISqlSugarClient db = sh.dbClient();
            sysLoginInCls si = public_method.getLoginInObject();
            returnR r = new returnR();
            r.code = (int)sysEnum.还没有执行;


            //这里执行
            try
            {
                string pId = passObj["pId"].ToString();
                if (string.IsNullOrEmpty(pId))
                {
                    r.code = (int)sysEnum.参数必填;
                    r.msg = "pId必填";
                    return passObj;
                }
                string departmentName = passObj["departmentName"].ToString();
                if (string.IsNullOrEmpty(departmentName))
                {
                    r.code = (int)sysEnum.参数必填;
                    r.msg = "departmentName必填";
                    return passObj;
                }

                public_department public_department = new public_department();
                public_department.departmentName = "";

                public_department.belongsId = int.Parse(pId); 
                public_department.departmentName = departmentName; 
                public_department.orderNum = 1;
                public_department.createDate = System.DateTime.Now;
                public_department.createUserId = si.loginUserId; //创建人的id
                public_department.flag = 1;//默认开启

                int iDepartmentId = db.Insertable(public_department).ExecuteReturnIdentity();
                if (iDepartmentId > 0)
                {
                    passObj.Add("id", iDepartmentId);
                    #region //写日志
                    sys_log sys_log = new sys_log();
                    sys_log.logType = "新增";
                    sys_log.logFunName = "addElement";
                    sys_log.logText = Newtonsoft.Json.JsonConvert.SerializeObject(public_department);
                    sys_log.createUserId = si.loginUserId;
                    public_method.saveLog(sys_log);
                    #endregion
                }
                else
                {

                }
            }
            catch (Exception ex)
            {

            }
            return passObj;

        }
        /// <summary>
        /// 更新架构
        /// </summary>
        /// <param name="passObj"></param>
        /// <returns></returns>
        [HttpPost]
        public returnR submitElement(JObject passObj)
        {
            sqlHelper sh = new sqlHelper();
            ISqlSugarClient db = sh.dbClient();
            sysLoginInCls si = public_method.getLoginInObject();
            returnR r = new returnR();
            r.code = (int)sysEnum.还没有执行;

            if (passObj == null)
            {
                r.code = (int)sysEnum.参数必填;
                return r;
            }

            //JArray org = JArray.Parse(passObj["org"].ToString());
            DataTable dt = public_method.ToDataTableTwo(passObj["org"].ToString());

            List<int> depIdListValid = new List<int>(); //用于存放当前有效的部门  作用：一会删除那些已经不存在的部门id
            //下面开始计算每个部门的层级
            dt.Columns.Add("level"); //首先增添一个列 记录层级
            for(int i = 0; i < dt.Rows.Count; i++)
            {
                for (int j = 0;j < dt.Rows.Count; j++) //在所有数据中遍历，寻找自己的父节点
                {
                    if(dt.Rows[i]["pId"].ToString() == dt.Rows[j]["id"].ToString())  //找到了父节点
                    {
                        dt.Rows[i]["level"] = int.Parse(dt.Rows[j]["level"].ToString()) + 1; //父节点的level + 1
                        break;
                    } 
                }
                if(dt.Rows[i]["level"].ToString().Length == 0) //若遍历后没有父节点
                {
                    dt.Rows[i]["level"] = 1;//则自己是第一层
                }
                depIdListValid.Add(int.Parse(dt.Rows[i]["id"].ToString())); //把这个部门id存到有效部门列表中
            }


            //这里执行
            try
            {
                int iReturn = 0;
                //循环更新前端传过来的最新结构，记得吧自己计算的层级也更新进去
                for (int i = 0; i< dt.Rows.Count; i++)
                {
                    iReturn += db.Updateable<public_department>()
                    .SetColumns(it => new public_department()
                    {
                        //departmentName = string.IsNullOrEmpty(org[i]["departmentName"].ToString()) ? it.departmentName : org[i]["departmentName"].ToString()
                        //,
                        belongsId = int.Parse(dt.Rows[i]["pId"].ToString())
                        ,
                        level = int.Parse(dt.Rows[i]["level"].ToString())
                        ,
                        flag = 1
                        ,
                        updateUserId = si.loginUserId
                        ,
                        updateDate = DateTime.Now
                    })
                    .Where(it => it.departmentId == int.Parse(dt.Rows[i]["id"].ToString())).ExecuteCommand();
                }

                //更新完成后没更新的数据就是已经被删除的，进行删除动作（要删除的数据已经存好了，在depIdListValid）
                iReturn += db.Updateable<public_department>()
                    .SetColumns(it => new public_department()
                    {
                        flag = (int)sysEnum.数据被删除
                        ,
                        updateUserId = si.loginUserId
                        ,
                        updateDate = DateTime.Now
                    })
                    .Where(it => !depIdListValid.Contains(it.departmentId)).ExecuteCommand();

                if (iReturn > 0)
                {
                    r.code = (int)sysEnum.操作成功;
                    r.msg = "更新" + iReturn + "个部门成功";
                    #region //写日志
                    sys_log sys_log = new sys_log();
                    sys_log.logType = "更新";
                    sys_log.logFunName = "editElement";
                    sys_log.createUserId = si.loginUserId;
                    sys_log.createDate = System.DateTime.Now;
                    public_method.saveLog(sys_log);
                    #endregion
                    return r;
                }
                else
                {
                    r.code = (int)sysEnum.执行数据库失败;
                    r.msg = "更新失败";
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
        #endregion

        #region //这里进行 修改密码
        /// <summary>
        /// {idList:"1,2,3",psw:"123"}
        /// </summary>
        /// <param name="passObj"></param>
        /// <returns></returns>
        [HttpPost]
        public returnR changePsw(JObject passObj)
        {

            returnR r = new returnR();
            r.code = (int)sysEnum.还没有执行;
            //这里执行
            try
            {

                string idList = passObj["idList"].ToString();
                if (string.IsNullOrEmpty(idList))
                {
                    r.code = (int)sysEnum.参数必填;
                    r.msg = "idList必填";
                    return r;
                }
                string psw = passObj["psw"].ToString();
                if (string.IsNullOrEmpty(psw))
                {
                    r.code = (int)sysEnum.参数必填;
                    r.msg = "psw必填";
                    return r;
                }

                psw = DES_En_De.UserMd5(psw);
                sqlHelper sh = new sqlHelper();
                ISqlSugarClient db = sh.dbClient();

                string sql = "update tb_Machine_user set psw='" + psw
                    + "',updateDate=GETDATE() where userId in(" + idList + ")";
                int iReturn = db.Ado.ExecuteCommand(sql);
                if (iReturn > 0)
                {
                    r.code = 100;
                    r.msg = "更新成功！";
                }
                else {
                    r.code = -1;
                    r.msg = "更新失败！";
                }


            }
            catch (Exception ex)
            {
                r.code = -5;
                r.msg = ex.Message;
            }
            return r;

        }

        /// <summary>
        /// vw_bs_Machine_user
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        public DataTable getUserList(JObject passJson) {

            DataTable dt = new DataTable();
            try
            {
                sqlHelper sh = new sqlHelper();

                SqlSugarClient db = sh.dbClient();

                string sql = " select * from vw_bs_Machine_user where 1=1";
                if (passJson != null)
                {
                    if (passJson["userIdList"].ToString() != "") {
                        sql += " and userId in(" + passJson["userIdList"].ToString() + ")";
                    }
                    if (passJson["cpuId"].ToString() != "")
                    {
                        sql += " and cpuId like '%" + passJson["cpuId"].ToString() + "%'";
                    }
                    if (passJson["account"].ToString() != "")
                    {
                        sql += " and account like '%" + passJson["account"].ToString() + "%'";
                    }
                    if (passJson["userName"].ToString() != "")
                    {
                        sql += " and userName like '%" + passJson["userName"].ToString() + "%'";
                    }

                }
                //这里把查询的语句记录到内存中
                sysSearchSql sss = new sysSearchSql();
                sss.loginInIp = public_method.GetIPAddress();
                sss.gridkey = "getUserList";//这里记录一下
                sss.sql = sql;
                MvcApplication.setsysSearchSql(sss);

                dt = db.SqlQueryable<object>(sql).ToDataTable();
            }
            catch (Exception ex)
            {
            }

            return dt;
        }
        #endregion

    }
}
