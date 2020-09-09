using NPOI.HSSF.UserModel;
using NPOI.SS.UserModel;
using SqlSugar;
using Sugar.Enties;
using System; 
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Web;
using System.Web.Http;
using WebApplication11.App_Start;

namespace WebApplication11.Controllers.webapi
{

    public class excelInController : ApiController
    {
        HSSFWorkbook hssfworkbook;

        void InitializeWorkbook(string path)
        {

            using (FileStream file = new FileStream(path, FileMode.Open, FileAccess.Read))
            {
                hssfworkbook = new HSSFWorkbook(file);
            }
        }
        private excelInReturnInfo ImportToDataBase()
        {
            string pl_no = public_method.getRadNum("dr");
            int isheet = 0;
            string msg = "";
            string sql = "";
            List<string> l_distinct_hrz = new List<string>();
            excelInReturnInfo ri = new excelInReturnInfo();
            DataTable dt_public_moduelDt = new DataTable();
            sqlHelper sh = new sqlHelper();
            SqlSugarClient db = sh.dbClient();
            int iAllCount = 0;
            int iExportSuccessCount = 0;//成功导入的条数
            string defaultPsw = System.Configuration.ConfigurationManager.AppSettings["defaultPsw"];
            if (string.IsNullOrEmpty(defaultPsw))
            {
                defaultPsw = "123456";
            }
            defaultPsw = DES_En_De.UserMd5(defaultPsw);
            foreach (ISheet sheet in hssfworkbook)
            {
                if (isheet > 0)
                {
                    msg = "请上传正确模板，必须是12列";
                    break;
                }
                isheet++;
                System.Collections.IEnumerator rows = sheet.GetRowEnumerator();
                while (rows.MoveNext())
                {
                    IRow row = (HSSFRow)rows.Current;
                    if (row.RowNum == 0)//行数大于1行
                    {
                        if (row.Cells.Count != 7)
                        {
                            msg = "请上传正确模板，必须是7列!";
                            break;
                        }
                    }
                    else
                    {
                        //这里做循环 //第一列和第二列都为空的时候不起作用 row.GetCell(0).ToString().Trim()
                        //这里进行导入
                        iAllCount++;
                        try
                        {
                            string level1 = row.GetCell(0).ToString().Trim();
                            string level2 = row.GetCell(1).ToString().Trim();
                            string level3 = row.GetCell(2).ToString().Trim();
                            string departName = "";
                            if (!string.IsNullOrEmpty(level1))
                            {
                                departName = level1;
                            }
                            if (!string.IsNullOrEmpty(level2))
                            {
                                departName = level2;
                            }
                            if (!string.IsNullOrEmpty(level3))
                            {
                                departName = level3;
                            }
                            string departId = "";
                            //通过这个查询de
                            sql = "select departmentId from public_department where departmentName='" + departName + "' and flag=1";
                            DataTable dt = db.Ado.GetDataTable(sql);
                            if (dt != null && dt.Rows.Count > 0)
                            {
                                departId = dt.Rows[0]["departmentId"].ToString();
                            }
                            if (string.IsNullOrEmpty(departId))
                            {
                                msg = "所属部门必填!"; continue;
                            }
                            string managerFlag = row.GetCell(3).ToString().Trim();
                            if (string.IsNullOrEmpty(managerFlag))
                            {
                                msg = "负责人必填!"; continue;
                            }
                            if (managerFlag == "是")
                            {
                                managerFlag = "1";
                            }
                            else
                            {
                                managerFlag = "0";
                            }
                            string userName = row.GetCell(4).ToString().Trim();
                            if (string.IsNullOrEmpty(userName)) { msg = "姓名必填!"; continue; }
                            string account = row.GetCell(5).ToString().Trim();
                            if (string.IsNullOrEmpty(account)) { msg = "登录账号必填!"; continue; }
                            string biaoshi = row.GetCell(6).ToString().Trim();
                            if (string.IsNullOrEmpty(biaoshi)) { msg = "机器标识必填!"; continue; }
                            //这里导入到数据库中
                            sql = " if(select COUNT(*) from tb_Machine_user where flag=1 and account='" + account + "')>0 begin";
                            sql += " update tb_Machine_user set userName='" + userName
                                + "',cpuId='" + biaoshi + "',managerFlag='" + managerFlag + "',belongsId='" + departId + "',updateDate=GETDATE() where account='" + account + "' end";
                            sql += " else begin";
                            sql += " insert into tb_Machine_user(account,psw,cpuId,userName,managerFlag,belongsId,flag,createDate)values('" + account
                                + "','" + defaultPsw + "','" + biaoshi + "','" + userName + "','" + managerFlag + "','" + departId + "',1,GETDATE()) end";
                            int iReturn = db.Ado.ExecuteCommand(sql);
                            if (iReturn > 0)
                            {
                                iExportSuccessCount++;
                            }
                        }
                        catch (Exception ex)
                        {
                            msg = "发生异常:" + ex.Message;
                        }
                    }
                }
            }
            if (iAllCount > 0)
            {
                if (iExportSuccessCount > 0)
                {
                    ri.code = 100;
                    ri.allCount = iAllCount;
                    ri.msg = "共有[" + iAllCount + "]条数据，共影响[" + iExportSuccessCount + "]条数据！";
                }
                else
                {
                    ri.code = 0;
                    ri.allCount = iAllCount;
                    ri.msg = "共有[" + iAllCount + "]条,没有影响到数据！";
                }

            }
            else
            {
                ri.code = -10;
                ri.allCount = iAllCount;
                ri.msg = "没有数据可以导入！";
            }

            return ri;
        }   
        private excelInReturnInfo importExcels()
        {
            string pl_no = public_method.getRadNum("dr");
            int isheet = 0;
            string msg = "";
            string sql = "";
            List<string> l_distinct_hrz = new List<string>();
            string loginPersonId = public_method.getLoginInObject().personId.ToString(); //获取获取到当前登录人的personId
            excelInReturnInfo ri = new excelInReturnInfo();
            DataTable dt_public_moduelDt = new DataTable();
            sqlHelper sh = new sqlHelper();
            SqlSugarClient db = sh.dbClient();
            int iAllCount = 0;
            int iExportSuccessCount = 0;//成功导入的条数
            string defaultPsw = System.Configuration.ConfigurationManager.AppSettings["defaultPsw"];
            if (string.IsNullOrEmpty(defaultPsw)){
                defaultPsw = "123456";
            }
            defaultPsw = DES_En_De.UserMd5(defaultPsw);
            int count = 0;//授权的cout
            int departmentCount = 0; //当前公司的人员数量
            string tempSql = "select (select listen_count from sys_listen) as listen_count,count(1) as deoartment_count  from public_department";
            DataTable table = db.SqlQueryable<object>(tempSql).ToDataTable();
            count = int.Parse(DES_En_De.DesDecrypt(table.Rows[0]["listen_count"].ToString()));
            departmentCount = int.Parse(table.Rows[0]["deoartment_count"].ToString());
            foreach (ISheet sheet in hssfworkbook)
            {
                if (isheet > 0)
                {
                    msg = "请上传正确模板，必须是7列";
                    break;
                }
                isheet++;
                System.Collections.IEnumerator rows = sheet.GetRowEnumerator();
                while(rows.MoveNext())
                {
                    IRow row = (HSSFRow)rows.Current;
                    if (row.RowNum == 0)//行数大于1行
                    {
                        if (row.Cells.Count != 7)
                        {
                            msg = "请上传正确模板，必须是7列!";
                            break;
                        }
                    }else{
                        //这里做循环 //第一列和第二列都为空的时候不起作用 row.GetCell(0).ToString().Trim()
                        //这里进行导入                    
                        try
                        {
                            importExcelTempPojo tempPojo = new importExcelTempPojo(row);
                            if (string.IsNullOrEmpty(tempPojo.department)) { msg = "部门名称必填！"; continue; }
                            if (string.IsNullOrEmpty(tempPojo.leadingCadre)) { msg = "负责状态必填！"; continue; }
                            if ((!"1".Equals(tempPojo.leadingCadre))&&(!"0".Equals(tempPojo.leadingCadre))) { msg = "负责状态不合法：请检查：1是负责人，0不是负责人！"; continue; }
                            if (string.IsNullOrEmpty(tempPojo.loginAccount)) { msg = "登录帐号必填！"; continue; }
                            if (string.IsNullOrEmpty(tempPojo.identifying)) { msg = "机器标识必填！"; continue; }
                            if ((!"1".Equals(tempPojo.sex)) && (!"0".Equals(tempPojo.sex))) { msg = "性别不合法：请检查：1是男，0是女！"; continue; }
                            string departId = ""; //当前的部门id
                            string parentId = "0";//父级的部门id默认为0 如果为空的情况下
                            sql = "select departmentId,isnull((select departmentId from public_department where departmentName='" +
                            tempPojo.superiorDepartment + "' and flag =1),'0') as parentId from public_department where departmentName='" + tempPojo.department + "' and flag=1";
                            DataTable dt = db.Ado.GetDataTable(sql);
                            if (dt != null && dt.Rows.Count > 0){
                                departId = dt.Rows[0]["departmentId"].ToString();
                                parentId = dt.Rows[0]["parentId"].ToString();
                            }
                            //如果部门id不存在与对应的部门当中
                            public_department pdtt = new public_department();
                            pdtt.belongsId = int.Parse(parentId);
                            pdtt.departmentName = tempPojo.department;
                            pdtt.createDate = DateTime.Now;
                            pdtt.updateDate = DateTime.Now;
                            pdtt.updateUserId = int.Parse(loginPersonId);
                            pdtt.flag = 1;
                            pdtt.createUserId = int.Parse(loginPersonId);
                            if (string.IsNullOrEmpty(departId))
                            {
                                departId = db.Insertable(pdtt).IgnoreColumns(it => new { it.updateUserId, it.updateDate }).ExecuteReturnIdentity().ToString(); //执行插入并且返回对应的当前部门id
                            }
                            else
                            {
                                pdtt.belongsId = int.Parse(parentId);
                                db.Updateable(pdtt).IgnoreColumns(it => new { it.createDate, it.createUserId, it.remarks }).Where(it => it.departmentId == int.Parse(departId)).ExecuteCommand();
                            }
                            string findLeadingCadreSql = " select count(1) rownumber from tb_machine_user where account = '" + tempPojo.loginAccount + "'";
                            DataTable machineUserList = db.SqlQueryable<object>(findLeadingCadreSql).ToDataTable(); //如果当前人员存在的情况下
                            tb_Machine_user tempMachineUser = new tb_Machine_user();
                            tempMachineUser.updateDate = DateTime.Now;
                            tempMachineUser.updateUserId = int.Parse(loginPersonId);
                            tempMachineUser.createUserId = int.Parse(loginPersonId);
                            tempMachineUser.createDate = DateTime.Now;
                            tempMachineUser.userName = tempPojo.name;
                            tempMachineUser.flag =1;
                            tempMachineUser.managerFlag = int.Parse(tempPojo.leadingCadre);
                            tempMachineUser.belongsId = int.Parse(departId);
                            tempMachineUser.cpuId = tempPojo.identifying;
                            tempMachineUser.psw = defaultPsw;
                            tempMachineUser.sex = int.Parse(tempPojo.sex);
                            tempMachineUser.account = tempPojo.loginAccount;
                            if (int.Parse(machineUserList.Rows[0]["rownumber"].ToString())>0){
                                db.Updateable(tempMachineUser).UpdateColumns(it => new { it.updateUserId, it.updateDate, it.userName, it.managerFlag, it.cpuId, it.belongsId }).Where(it => tempPojo.loginAccount.Equals(it.account)).ExecuteCommand();
                                iExportSuccessCount++;
                            }
                            else
                            {
                                db.Insertable(tempMachineUser).ExecuteCommand();
                                departmentCount++;
                                iExportSuccessCount++;
                            }
                        }
                        catch (Exception ex)
                        {
                            msg = "发生异常:" + ex.Message;
                        }
                        iAllCount++;
                    }
                }
            }
            /**
             * 将所有的部门登记全部进行筛选然后将部门等级全部更改掉
             * */
            var departmentLeveDataTable = db.Ado.UseStoredProcedure().GetDataTable("eve_department_leve");
            List<public_department> departmentLeveList = new List<public_department>();
            for (int i = 0; i < departmentLeveDataTable.Rows.Count; i++)
            {
                public_department pd = new public_department();
                pd.departmentId = int.Parse(departmentLeveDataTable.Rows[i]["departmentId"].ToString());
                pd.level = int.Parse(departmentLeveDataTable.Rows[i]["departmentLevel"].ToString());
                departmentLeveList.Add(pd);
            }
            db.Updateable(departmentLeveList).UpdateColumns(it => new { it.level }).ExecuteCommand();
            if (iAllCount > 0)
            {
                if (iExportSuccessCount > 0)
                {
                    ri.code = 100;
                    ri.allCount = iAllCount;
                    ri.msg = "共有[" + iAllCount + "]条数据，共影响[" + iExportSuccessCount + "]条数据！";                 
                }
                else
                {
                    ri.code = 0;
                    ri.allCount = iAllCount;
                    ri.msg = "共有[" + iAllCount + "]条,没有影响到数据！";
                }
            }
            else
            {
                ri.code = -10;
                ri.allCount = iAllCount;
                ri.msg = "没有数据可以导入！";
            }
            return ri;
        }

        [HttpPost]
        public excelInReturnInfo upload()
        {
            excelInReturnInfo returnR = new excelInReturnInfo();
            try
            {
                HttpPostedFile file = HttpContext.Current.Request.Files["file"];
                string uploadpath = HttpContext.Current.Server.MapPath("system\\excelExportIn\\");
                string strSuiji = System.DateTime.Now.ToString("yyyyMMddHHmmss") + "_";//随机数
                if (file != null)
                {
                    if (!Directory.Exists(uploadpath))
                    {
                        Directory.CreateDirectory(uploadpath);
                    }
                    Random r = new Random();
                    int i = r.Next();
                    file.SaveAs(uploadpath + strSuiji + file.FileName);
                    InitializeWorkbook(uploadpath + strSuiji + file.FileName);
                    returnR = ImportToDataBase();
                }
            }
            catch (Exception ex)
            {
            }
            return returnR;
        }

        /**
        *   修改对应的移动信息
        * */
        [HttpPost]
        public excelInReturnInfo modifications()
        {
            excelInReturnInfo returnR = new excelInReturnInfo();
            try
            {
                HttpPostedFile file = HttpContext.Current.Request.Files["file"];
                string uploadpath = HttpContext.Current.Server.MapPath("system\\excelExportIn\\");
                string strSuiji = System.DateTime.Now.ToString("yyyyMMddHHmmss") + "_";//随机数
                if (file != null)
                {
                    if (!Directory.Exists(uploadpath))
                    {
                        Directory.CreateDirectory(uploadpath);
                    }
                    Random r = new Random();
                    int i = r.Next();
                    file.SaveAs(uploadpath + strSuiji + file.FileName);
                    InitializeWorkbook(uploadpath + strSuiji + file.FileName);
                    returnR = importExcels();
                }
            }
            catch (Exception ex)
            {
            }
            return returnR;
        }
    }
}

public class excelInReturnInfo
{
    public int code { get; set; }
    public string msg { get; set; }
    public int allCount { get; set; }
    public int successCount { get; set; }
    public int ErrCount { get; set; }
    public string pl_no { get; set; }
    public string type { get; set; }
}
public class importExcelTempPojo
{
    public string superiorDepartment { get; set; }//上级部门
    public string department { get; set; } //部门
    public string leadingCadre { get; set; } //负责人
    public string name { get; set; } //姓名
    public string loginAccount { get; set; }  //登录帐号（手机号）
    public string identifying { get; set; } //机器标识
    public string sex { get; set; } //性别 1为男，0为女
    public importExcelTempPojo()
    {
    }
    /**
     * 由于部分情况下保存值会出现为空的情况所以。
     */
    public importExcelTempPojo(IRow row)
    {
        this.superiorDepartment = row.GetCell(0)==null?"":row.GetCell(0).ToString().Trim(); //上级部门
        this.department = row.GetCell(1)==null?"":row.GetCell(1).ToString().Trim(); //部门
        this.leadingCadre = row.GetCell(2)==null?"":row.GetCell(2).ToString().Trim(); //负责人
        this.name = row.GetCell(3)==null?"":row.GetCell(3).ToString().Trim(); //姓名
        this.loginAccount = row.GetCell(4)==null?"":row.GetCell(4).ToString().Trim(); //登录帐号（手机号）
        this.identifying = row.GetCell(5)==null?"":row.GetCell(5).ToString().Trim(); //机器标识
        this.sex = row.GetCell(6) == null ?"" :row.GetCell(6).ToString().Trim(); //获取当前的性别列
    }

}