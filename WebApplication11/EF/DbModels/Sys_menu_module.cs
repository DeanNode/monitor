using System;
using System.Linq;
using System.Text;
using SqlSugar;

namespace Sugar.Enties
{
    ///<summary>
    ///
    ///</summary>
    [SugarTable("Sys_menu_module")]
    public partial class Sys_menu_module
    {
           public Sys_menu_module(){


           }
           /// <summary>
           /// Desc:系统菜单模块对应表
           /// Default:
           /// Nullable:True
           /// </summary>           
           public int? Sys_id {get;set;}

           /// <summary>
           /// Desc:模块ID
           /// Default:
           /// Nullable:True
           /// </summary>           
           public int? Module_id {get;set;}

    }
}
