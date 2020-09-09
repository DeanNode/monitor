using System;
using System.Linq;
using System.Text;
using SqlSugar;

namespace Sugar.Enties
{
    ///<summary>
    ///
    ///</summary>
    [SugarTable("Sys_menu")]
    public partial class Sys_menu
    {
           public Sys_menu(){


           }
           /// <summary>
           /// Desc:系统菜单
           /// Default:
           /// Nullable:False
           /// </summary>           
           public int Sys_id {get;set;}

           /// <summary>
           /// Desc:系统名称
           /// Default:
           /// Nullable:True
           /// </summary>           
           public string Sys_name {get;set;}

           /// <summary>
           /// Desc:是否启用
           /// Default:
           /// Nullable:True
           /// </summary>           
           public int? Is_open_sys {get;set;}

           /// <summary>
           /// Desc:系统图标保存路径
           /// Default:
           /// Nullable:True
           /// </summary>           
           public string Ico_addr {get;set;}

           /// <summary>
           /// Desc:
           /// Default:
           /// Nullable:True
           /// </summary>           
           public string Open_mode {get;set;}

           /// <summary>
           /// Desc:
           /// Default:
           /// Nullable:True
           /// </summary>           
           public string Link_addr {get;set;}

           /// <summary>
           /// Desc:
           /// Default:
           /// Nullable:True
           /// </summary>           
           public string Open_mark {get;set;}

           /// <summary>
           /// Desc:
           /// Default:
           /// Nullable:True
           /// </summary>           
           public int? Order_no {get;set;}

           /// <summary>
           /// Desc:
           /// Default:
           /// Nullable:True
           /// </summary>           
           public string Sys_code {get;set;}

           /// <summary>
           /// Desc:备注
           /// Default:
           /// Nullable:True
           /// </summary>           
           public string Remarks {get;set;}

    }
}
