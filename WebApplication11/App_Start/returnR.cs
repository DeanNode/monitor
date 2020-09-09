using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication11.App_Start
{
    public class returnR
    {

        public int code { get; set; }
        public string msg { get; set; }
        public object data { get; set; }
        /// <summary>
        /// 总数量
        /// </summary>
        public int iallCount { get; set; }
        /// <summary>
        /// 总页数
        /// </summary>
        public int iallPages { get; set; }
        /// <summary>
        /// 第几页
        /// </summary>
        public int ipageIndex { get; set; }
    }
}