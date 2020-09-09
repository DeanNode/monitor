using WebApplication11.App_Start;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Text;

namespace WebApplication11.Controllers
{
    public class updateImageReturnR
    {
        public int code { get; set; }
        public string msg { get; set; }
        public updateImageReturnR_Date data { get; set; }
    }
    public class updateImageReturnR_Date
    {
        public string src { get; set; }
        public string title { get; set; }
    }


    public class imageUploadController : ApiController
    {
        [HttpPost]
        public updateImageReturnR uploadImages()
        {

            updateImageReturnR rr = new updateImageReturnR();
            string uploadpath = HttpContext.Current.Server.MapPath("image\\upload\\");

            try
            {
                HttpPostedFile file = HttpContext.Current.Request.Files["file"];
                if (file != null)
                {
                    if (!Directory.Exists(uploadpath))
                    {
                        Directory.CreateDirectory(uploadpath);
                    }
                    string strfilename = file.FileName;
                    Random r = new Random();
                    int i = r.Next();
                    string strSuiji = System.DateTime.Now.ToString("yyyyMMddHHmmss") + "_" + r.Next(9999999);//随机数//实际的名称
                    string fileTrueName = "UploadFile_" + strSuiji + strfilename.Substring(strfilename.LastIndexOf('.'));

                    string path = uploadpath + fileTrueName;
                    file.SaveAs(uploadpath + fileTrueName);

                    string httpUrl = "http://"+HttpContext.Current.Request.Url.Authority; 

                    updateImageReturnR_Date urd = new updateImageReturnR_Date();
                    urd.src = httpUrl + "/api/imageUpload/image/upload/" + fileTrueName;
                    urd.title = strfilename;
                    rr.code = 0;//上传成功
                    rr.msg = "上传成功";
                    rr.data = urd;

                }
                else
                {
                    rr.code = -10;
                    rr.msg = "没有有效数据";
                }
            }
            catch (Exception ex)
            {
                rr.code = -20;
                rr.msg = ex.Message;
            }

            return rr;
        }

        [HttpPost]
        public returnR uploadImagesWithBase64()
        {

            var request = HttpContext.Current.Request;
            Stream resStream = request.InputStream;
            int len = (int)resStream.Length;//post数据长度
            string base64Data = string.Empty;
            byte[] inputByts = new byte[len];//字节数据,用于存储post数据
            resStream.Read(inputByts, 0, len);//将post数据写入byte数组中s
            resStream.Close();
            base64Data = Encoding.UTF8.GetString(inputByts);//转为UTF8编码


            returnR rr = new returnR();


            string uploadpath = HttpContext.Current.Server.MapPath("image\\upload\\");

            try
            {
                if (!Directory.Exists(uploadpath))
                {
                    Directory.CreateDirectory(uploadpath);
                }

                String base64 = base64Data.Substring(base64Data.IndexOf(",") + 1);      //将‘，’以前的多余字符串删除
                base64 = base64.Replace(" ", "+");
                //string base64 = base64Data;
                base64 = base64.Trim().Replace("%", "").Replace(",", "").Replace(" ", "+");
                if (base64.Length % 4 > 0)
                {
                    base64 = base64.PadRight(base64.Length + 4 - base64.Length % 4, '=');
                }

                System.Drawing.Bitmap bitmap = null;//定义一个Bitmap对象，接收转换完成的图片

                byte[] arr = Convert.FromBase64String(base64);//将纯净资源Base64转换成等效的8位无符号整形数组
                System.IO.MemoryStream ms = new System.IO.MemoryStream(arr);//转换成无法调整大小的MemoryStream对象
                bitmap = new System.Drawing.Bitmap(ms);//将MemoryStream对象转换成Bitmap对象

                Random r = new Random();
                int i = r.Next();
                string strSuiji = System.DateTime.Now.ToString("yyyyMMddHHmmss") + "_" + r.Next(9999999);//随机数//实际的名称

                string filename = "H5_" + strSuiji + ".jpg";//所要保存的相对路径及名字

                string imagesurl2 = uploadpath + filename; //转换成绝对路径 
                bitmap.Save(imagesurl2, System.Drawing.Imaging.ImageFormat.Jpeg);//保存到服务器路径
                ms.Close();//关闭当前流，并释放所有与之关联的资源
                bitmap.Dispose();

                string httpUrl = HttpContext.Current.Request.Url.Authority;
                rr.code = 100;
                rr.msg= httpUrl + "/api/imageUpload/image/upload/" + filename;

            }
            catch (Exception ex)
            {
                rr.code = -20;
                rr.msg = ex.Message;
            }

            return rr;
        }

    }
}