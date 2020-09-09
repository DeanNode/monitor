using System;
using System.Linq;
using System.Text;
using SqlSugar;

namespace Sugar.Enties
{
    ///<summary>
    ///
    ///</summary>
    [SugarTable("Sys_function")]
    public partial class Sys_function
    {
           public Sys_function(){


           }
           /// <summary>
           /// Desc:系统页面功能表
           /// Default:
           /// Nullable:False
           /// </summary>           
           [SugarColumn(IsPrimaryKey=true)]
           public int Function_id {get;set;}

           /// <summary>
           /// Desc:页面名称
           /// Default:
           /// Nullable:True
           /// </summary>           
           public string Function_name {get;set;}

           /// <summary>
           /// Desc:页面图标保存路径
           /// Default:
           /// Nullable:True
           /// </summary>           
           public string Ico_addr {get;set;}

           /// <summary>
           /// Desc:页面代码保存路径
           /// Default:
           /// Nullable:True
           /// </summary>           
           public string Function_addr {get;set;}

           /// <summary>
           /// Desc:页面所属模块ID
           /// Default:0
           /// Nullable:True
           /// </summary>           
           public int? Module_id {get;set;}

           /// <summary>
           /// Desc:打开方式
           /// Default:openNew
           /// Nullable:True
           /// </summary>           
           public string Open_mode {get;set;}

           /// <summary>
           /// Desc:序号
           /// Default:1
           /// Nullable:True
           /// </summary>           
           public int? Order_no {get;set;}

           /// <summary>
           /// Desc:是否显示
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
           /// Desc:所属 tab  id  =0 的时候是个单独的页面，=1 的时候 就是所属一个页面
           /// Default:0
           /// Nullable:True
           /// </summary>           
           public int? BelongsTabId {get;set;}

           /// <summary>
           /// Desc:
           /// Default:1
           /// Nullable:True
           /// </summary>           
           public int? Flag {get;set;}

           /// <summary>
           /// Desc:
           /// Default:
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
