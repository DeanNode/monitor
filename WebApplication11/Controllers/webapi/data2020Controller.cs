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

namespace WebApplication11.Controllers.webapi
{
    public class data2020Controller : ApiController
    {

        [HttpGet]
        public DataTable  commonSql(string tableName)
        {

            DataTable dt = new DataTable();
            string sql = "select * from " + tableName;
            try
            {
                sqlHelper sh = new sqlHelper();
                dt = sh.dbClient().Ado.GetDataTable(sql);
            }
            catch {
            }
            

            return dt;
        }


        #region
        /// <summary>
        /// 获取我权限下所有的组织架构
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public List<dtTree_List> getUserTree()
        {
            List<dtTree_List> l_dtTree = new List<dtTree_List>();
            sqlHelper sh = new sqlHelper();
            sysLoginInCls si = public_method.getLoginInObject();

            string sql = "select * from vw_Bs_mySelectUserTree where 1=1";
           

            DataTable dt_all = new DataTable();
            try
            {
                dt_all = sh.dbClient().SqlQueryable<object>(sql).ToDataTable();
            }
            catch
            {

            }
            DataTable dt = new DataTable();
            if (si.loginIsAdmin == false)
            {
                if (si.managerFlag == "1")
                {
                    dt = dt_all.Clone();
                    var myDepartId = si.dataRoleId.ToString();//这里获取一下这个先所有的信息
                    for (var i = 0; i < dt_all.Rows.Count; i++)
                    {
                        if (myDepartId == dt_all.Rows[i]["id"].ToString().ToLower()
                            && dt_all.Rows[i]["type"].ToString() == "depart")
                        {
                            dt_all.Rows[i]["belongsId"] = "0";
                            dt.Rows.Add(dt_all.Rows[i].ItemArray);
                            break;
                        }
                    }
                    //递归找到所有属于这个部门的部门
                    for (var i = 0; i < dt_all.Rows.Count; i++)
                    {
                        if (dt_all.Rows[i]["type"].ToString() == "depart")
                        {
                            if (myDepartId == dt_all.Rows[i]["belongsId"].ToString()) {
                                dt.Rows.Add(dt_all.Rows[i].ItemArray);

                                getMyDepartSon(ref dt, dt_all.Rows[i]["id"].ToString(), dt_all);
                            }

                        }
                    }

                    //然后找到所有属于这个部门的人员
                    for (var i = 0; i < dt_all.Rows.Count; i++) {
                        if (dt_all.Rows[i]["type"].ToString() == "user") {
                            string belongsId = dt_all.Rows[i]["belongsId"].ToString();
                            for (var j = 0; j < dt.Rows.Count; j++) {
                                if (belongsId == dt.Rows[j]["id"].ToString()) {
                                    dt.Rows.Add(dt_all.Rows[i].ItemArray);
                                    break;
                                }
                            }

                        }
                    }

                    dt.DefaultView.Sort = "type desc ";
                    dt = dt.DefaultView.ToTable();
                }
                else {
                    dt = dt_all.Clone();
                    //只能看到他自己
                    var myUserId = "u" + si.loginUserId.ToString();
                    var myDepartId= si.dataRoleId.ToString();
                    for (var i = 0; i < dt_all.Rows.Count; i++) {
                        if (myUserId.ToLower() == dt_all.Rows[i]["id"].ToString().ToLower() 
                            && dt_all.Rows[i]["type"].ToString()== "user") {
                            dt.Rows.Add(dt_all.Rows[i].ItemArray);
                            break;
                        }
                    }
                    for (var i = 0; i < dt_all.Rows.Count; i++)
                    {
                        if (myDepartId == dt_all.Rows[i]["id"].ToString().ToLower()
                            && dt_all.Rows[i]["type"].ToString() == "depart")
                        {
                            dt_all.Rows[i]["belongsId"] = "0";
                            dt.Rows.Add(dt_all.Rows[i].ItemArray);
                            break;
                        }
                    }
                }

               

            }
            else {
                dt = dt_all.Clone();

                //这是是管理员登录的
                string data_role_id = si.dataRoleId.ToString();//这里获取的 登录人员的 数据权限id
                sql = "select teamId from sys_dataRole_user where roleId='"+data_role_id+"'and flag=1";
                DataTable dt_department = new DataTable();
                try
                {
                    dt_department = sh.dbClient().Ado.GetDataTable(sql);//这是我所有的部门权限
                }
                catch {
                }
                if (dt_department != null && dt_department.Rows.Count > 0) {
                    for (var i = 0; i < dt_department.Rows.Count; i++) {
                        string departId = dt_department.Rows[i]["teamId"].ToString();
                        getMyDepartFather(ref dt, departId, dt_all);
                    }
                }
                //dt = dt_all;
                //然后找到所有属于这个部门的人员
                for (var i = 0; i < dt_all.Rows.Count; i++)
                {
                    if (dt_all.Rows[i]["type"].ToString() == "user")
                    {
                        string belongsId = dt_all.Rows[i]["belongsId"].ToString();
                        for (var j = 0; j < dt_department.Rows.Count; j++)
                        {
                            if (belongsId == dt_department.Rows[j]["teamId"].ToString())
                            {
                                dt.Rows.Add(dt_all.Rows[i].ItemArray);
                                break;
                            }
                        }

                    }
                }

                dt.DefaultView.Sort = "type desc ";
                dt = dt.DefaultView.ToTable();
            }


            if (dt != null && dt.Rows.Count > 0) {
                for (var i = 0; i < dt.Rows.Count; i++) {

                    string id= dt.Rows[i]["id"].ToString();
                    
                    dtTree_List dtTree= new dtTree_List();
                    dtTree.id = id;
                    dtTree.type= dt.Rows[i]["type"].ToString();
                    dtTree.mylevel= dt.Rows[i]["mylevel"].ToString();
                    if (id.Length > 1)
                    {
                        if (id.Substring(0, 1).ToLower() == "u")
                        {
                            dtTree.iconClass = "dtree-icon-yonghu";
                        }
                        else {
                            dtTree.iconClass = "dtree-icon-fuxuankuang-banxuan";
                        }

                    }
                    dtTree.title = dt.Rows[i]["name"].ToString();
                    dtTree.checkArr = "0";
                    dtTree.parentId = dt.Rows[i]["belongsId"].ToString();
                    l_dtTree.Add(dtTree);
                }
            }
            return l_dtTree;
        }
        #endregion

        #region tb_machine_user 用到的方法
        

        [HttpPost]
        public returnR machineUserAdd(JObject passObj) {
            returnR rr = new returnR();

            string belongsId = passObj["belongsId"].ToString();
            string cpuId = passObj["cpuId"].ToString();
            string userName = passObj["userName"].ToString();
            string sex = passObj["sex"].ToString();
            string psw = passObj["psw"].ToString();
            psw = DES_En_De.UserMd5(psw);
            string machineName = passObj["machineName"].ToString();
            string account = passObj["account"].ToString();
            string remarks = "";
            if (passObj["remarks"] != null)
            {
                remarks = passObj["remarks"].ToString();
            }
            sqlHelper sh = new sqlHelper();

            string sql = "select * from tb_Machine_user where flag=1 and cpuId='" + cpuId + "'";
            DataTable dt = new DataTable();
            dt=sh.dbClient().Ado.GetDataTable(sql);
            if (dt != null && dt.Rows.Count > 0)
            {
                rr.code = 10;
                rr.msg = "该系统key【"+cpuId+"】已存在！";
            }
            else {
                sql = "insert into tb_Machine_user(account,psw,cpuId,userName,sex,machineName,belongsId,remarks,managerFlag,flag,createDate)";
                sql += " values('" + account + "','" + psw + "','" + cpuId + "','" + userName
                    + "','"+ sex + "','"+ machineName + "','" + belongsId + "','"+ remarks + "',0,1,getdate())";

                int iLen = 0;
                try
                {
                    iLen = sh.dbClient().Ado.ExecuteCommand(sql);
                    if (iLen > 0)
                    {
                        rr.code = 100;
                        rr.msg = "添加成功！";
                    }
                    else
                    {
                        rr.code = 0;
                        rr.msg = "添加失败！";
                    }
                }
                catch (Exception ex)
                {
                    rr.code = -5;
                    rr.msg = ex.Message;
                }
            }

            

            return rr;
        }
        [HttpPost]
        public returnR machineUserModify(JObject passObj)
        {
            returnR rr = new returnR();
            string userId = passObj["userId"].ToString();
            string belongsId = passObj["belongsId"].ToString();
            string cpuId = passObj["cpuId"].ToString();
            string userName = passObj["userName"].ToString();
            string sex = passObj["sex"].ToString();
            string psw = passObj["psw"].ToString();
            string machineName = passObj["machineName"].ToString();
            string account = passObj["account"].ToString();
            string remarks = "";
            if (passObj["remarks"] != null) {
                remarks=passObj["remarks"].ToString();
            }
            psw = DES_En_De.UserMd5(psw);
            string sql = "update tb_Machine_user set account='"+account
                +"',cpuId='"+cpuId+ "',machineName='"+machineName+"',userName='" + userName+ "',sex='"+sex+"',belongsId='" + belongsId
                +"',remarks='"+remarks+"',updateDate=GETDATE() where userId='"+userId+"'";
            sqlHelper sh = new sqlHelper();
            int iLen = 0;
            try
            {
                iLen = sh.dbClient().Ado.ExecuteCommand(sql);
                if (iLen > 0)
                {
                    rr.code = 100;
                    rr.msg = "修改成功！";
                }
                else
                {
                    rr.code = 0;
                    rr.msg = "修改失败！";
                }
            }
            catch (Exception ex)
            {
                rr.code = -5;
                rr.msg = ex.Message;
            }

            return rr;
        }
        [HttpPost]
        public returnR machineUserDel(JObject passObj)
        {
            returnR rr = new returnR();
            string idList = passObj["idList"].ToString();
            string sql = "delete tb_Machine_user where userid in("+ idList + ")";
            sqlHelper sh = new sqlHelper();
            int iLen = 0;
            try
            {
                iLen = sh.dbClient().Ado.ExecuteCommand(sql);
                if (iLen > 0)
                {
                    rr.code = 100;
                    rr.msg = "删除成功！";
                }
                else {
                    rr.code = 0;
                    rr.msg = "删除失败！";
                }
            }
            catch(Exception ex) {
                rr.code = -5;
                rr.msg = ex.Message;
            }
            return rr;
        }
        #endregion

        private void getMyDepartSon(ref DataTable dt, string departId,DataTable dt_all) {

            for (var i = 0; i < dt_all.Rows.Count; i++) {
                if (dt_all.Rows[i]["belongsId"].ToString() == departId 
                    && dt_all.Rows[i]["type"].ToString()== "depart") {

                    dt.Rows.Add(dt_all.Rows[i].ItemArray);
                    departId = dt_all.Rows[i]["id"].ToString();
                    getMyDepartSon(ref dt, departId, dt_all);
                }
            }

        }

        private void getMyDepartFather(ref DataTable dt, string departId, DataTable dt_all)
        {

            for (var i = 0; i < dt_all.Rows.Count; i++)
            {
                if (dt_all.Rows[i]["id"].ToString() == departId
                    && dt_all.Rows[i]["type"].ToString() == "depart")
                {
                    bool isHas = false;
                    for (var j = 0; j < dt.Rows.Count; j++) {
                        if (dt.Rows[j]["id"].ToString() == departId) {
                            isHas = true;
                            break;
                        }
                    }
                    if (isHas == false) {
                        dt.Rows.Add(dt_all.Rows[i].ItemArray);
                        departId = dt_all.Rows[i]["belongsId"].ToString();
                        getMyDepartFather(ref dt, departId, dt_all);
                    }
                    break;
                }
            }

        }

    }
}
