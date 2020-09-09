using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication11.EF.mySysClass
{
    public class sysLoginInCls
    {
        public bool loginIsAdmin {
            get;set;
        }
        public string loginInIp { get; set; }
        public int loginUserId { get; set; }//登录进来的userid

        public string userName { get; set; }//登录进来的userid
        public string belongsId { get; set; }//belongsId
        public string managerFlag { get; set; }//belongsId
        public string roleId { get; set; }//登录进来的userid
        public string dataRoleId { get; set; }//登录进来的userid

        public DateTime loginTime { get; set; }

        public int iactionMinitures { get; set; }

        public string mySubordinateList { get; set; }

        //phone用户登录用begin
        public int personId { get; set; }
        public string personName { get; set; }
        public string tel { get; set; }
        public string address { get; set; }
        public string workNum { get; set; }
        public int? workCardId { get; set; }
        public int? fatherPersonId { get; set; }
        public int? positionId { get; set; }
        public int? teamId { get; set; }
        public int? workTypeId { get; set; }
        public string idCard { get; set; }
        //phone用户登录用end
        /// <summary>
        /// 登录进来后选择的项目
        /// </summary>
        public string projectId { get; set; }
        public string projectName { get; set; }
    }

    public class sysSearchSql {

        public string loginInIp { get; set; }
        public string sql { get; set; }
        /// <summary>
        /// 表明是哪个grid的的查询语句
        /// </summary>
        public string gridkey { get; set; }

    }
}