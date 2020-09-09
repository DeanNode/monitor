using Newtonsoft.Json.Linq;
using NPOI.HPSF;
using NPOI.HSSF.UserModel;
using NPOI.SS.UserModel;
using SqlSugar;
using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Web;
using System.Web.Http;
using WebApplication11.App_Start;

namespace WebApplication11.Controllers
{
    public class exportController : ApiController
    {

        /// <summary>
        /// jobject  { "keyName":"","columnArray":[] ,fileName:"测试"}
        /// </summary>
        /// <param name="jObject"></param>
        /// <returns></returns>
        [HttpPost]
        public HttpResponseMessage publicExport(JObject jObject) {


            HttpResponseMessage result = new HttpResponseMessage(HttpStatusCode.OK);
            returnR rr = ExcelStreamObject(jObject);
            String fileName = jObject["fileName"].ToString();
            if (rr.code == (int)sysEnum.操作成功)
            {
                result.StatusCode = HttpStatusCode.OK;
                result.Content = new StreamContent((Stream)rr.data);
                result.Content.Headers.ContentType = new MediaTypeHeaderValue("application/vnd.ms-excel");
                result.Content.Headers.ContentDisposition = new ContentDispositionHeaderValue("attachment");
                result.Content.Headers.ContentDisposition.FileName = fileName+"["+public_method.getCurrDateTime()+ "]"+".xls";
            }
            else {

                result.StatusCode = HttpStatusCode.OK;
                result.Content = new StringContent("下载失败："+rr.msg);
            }
            return result;
            
        }

        /// <summary>
        /// 得到execl流
        /// </summary>
        /// <returns></returns>
        private returnR ExcelStreamObject(JObject jObject) {

            returnR r = new returnR();
            r.code = (int)sysEnum.还没有执行;

            try
            {
                string fileName = "导出文件";

                HSSFWorkbook hssfworkbook = new HSSFWorkbook();
                ISheet sheet1 = hssfworkbook.CreateSheet(fileName);
                IRow rowHeader = sheet1.CreateRow(0);//生成标题
                JArray jColumnArray = JArray.Parse(jObject["columnArray"].ToString());
                for (var i = 0; i < jColumnArray.Count; i++) {
                    //写标题
                    string fileTitle = jColumnArray[i]["title"].ToString();
                    rowHeader.CreateCell(i).SetCellValue(fileTitle);

                }
                //开始写内容
                string keyName = jObject["keyName"].ToString();
                string ip = public_method.GetIPAddress();
                string sql = "";//从内存中过去对应的信息
                for (var i = 0; i < MvcApplication.l_sysSearchSql.Count; i++)
                {
                    if (MvcApplication.l_sysSearchSql[i].loginInIp == ip
                        && MvcApplication.l_sysSearchSql[i].gridkey == keyName)
                    {
                        sql = MvcApplication.l_sysSearchSql[i].sql;
                        break;
                    }
                }
                if (string.IsNullOrEmpty(sql)) {
                    r.code = (int)sysEnum.参数必填;
                    r.msg = "sql没有获取到";
                    return r;
                }
                sqlHelper sh = new sqlHelper();
                ISqlSugarClient db = sh.dbClient();
                DataTable dt = db.SqlQueryable<object>(sql).ToDataTable();
                if (dt == null) {
                    r.code = (int)sysEnum.执行数据库失败;
                    r.msg = "dt数据库失败";
                    return r;
                }

                #region 写入内容
                for (int i = 0; i < dt.Rows.Count; i++)
                {
                    IRow row = sheet1.CreateRow(i + 1);
                    for (int j = 0; j < jColumnArray.Count; j++)
                    {
                        string columnName = jColumnArray[j]["field"].ToString().Trim();//获取列名
                        if (checkColumnIndt(columnName, dt))
                        {
                            string str = dt.Rows[i][columnName].ToString();//获取到值
                            if (string.IsNullOrEmpty(str)) str = " ";
                            row.CreateCell(j).SetCellValue(str);//把值写进去
                        }
                    }
                }
                #endregion
                #region 写入内存中
                MemoryStream file = new MemoryStream();
                hssfworkbook.Write(file);
                file.Seek(0, SeekOrigin.Begin);
                r.code= (int)sysEnum.操作成功;
                r.data = file;
                //return file;
                #endregion

            }
            catch (Exception ex)
            {
                r.code = (int)sysEnum.发生异常;
                r.msg = ex.Message;
            }

            return r;
            
           



        }
        /// <summary>
        /// 检测列名是否存在dt中
        /// </summary>
        /// <param name="columnName"></param>
        /// <param name="dt"></param>
        /// <returns></returns>
        private bool checkColumnIndt(string columnName, DataTable dt)
        {
            bool bHas = false;
            if (dt != null)
            {
                if (dt.Columns.Count > 0)
                {
                    for (int i = 0; i < dt.Columns.Count; i++)
                    {
                        if (columnName == dt.Columns[i].ToString())
                        {
                            bHas = true;
                            break;
                        }
                    }
                }
            }
            return bHas;
        }
    }


}
