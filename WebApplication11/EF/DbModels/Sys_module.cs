using System;
using System.Linq;
using System.Text;
using SqlSugar;

namespace Sugar.Enties
{
    ///<summary>
    ///
    ///</summary>
    [SugarTable("Sys_module")]
    public partial class Sys_module
    {
           public Sys_module(){


           }
           /// <summary>
           /// Desc:系统模块表
           /// Default:
           /// Nullable:False
           /// </summary>           
           [SugarColumn(IsPrimaryKey=true,IsIdentity=true)]
           public int Module_id {get;set;}

           /// <summary>
           /// Desc:模块名
           /// Default:
           /// Nullable:True
           /// </summary>           
           public string Module_name {get;set;}

           /// <summary>
           /// Desc:图片地址
           /// Default:
           /// Nullable:True
           /// </summary>           
           public string Ico_addr {get;set;}

           /// <summary>
           /// Desc:内部顺序号
           /// Default:1
           /// Nullable:True
           /// </summary>           
           public int? Order_no {get;set;}

           /// <summary>
           /// Desc:开放标志
           /// Default:1
           /// Nullable:True
           /// </summary>           
           public int? Open_mark {get;set;}

           /// <summary>
           /// Desc:备注
           /// Default:
           /// Nullable:True
           /// </summary>           
           public string Remarks {get;set;}

           /// <summary>
           /// Desc:
           /// Default:1
           /// Nullable:True
           /// </summary>           
           public int? flag {get;set;}

           /// <summary>
           /// Desc:
           /// Default:DateTime.Now
           /// Nullable:True
           /// </summary>           
           public DateTime? CreateDate {get;set;}

           /// <summary>
           /// Desc:
           /// Default:
           /// Nullable:True
           /// </summary>           
           public int? CreateUserId {get;set;}

           /// <summary>
           /// Desc:
           /// Default:DateTime.Now
           /// Nullable:True
           /// </summary>           
           public DateTime? UpdateDate {get;set;}

           /// <summary>
           /// Desc:
           /// Default:
           /// Nullable:True
           /// </summary>           
           public int? UpdateUserId {get;set;}

    }
}
