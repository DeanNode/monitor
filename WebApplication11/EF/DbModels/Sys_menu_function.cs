using System;
using System.Linq;
using System.Text;
using SqlSugar;

namespace Sugar.Enties
{
    ///<summary>
    ///
    ///</summary>
    [SugarTable("Sys_menu_function")]
    public partial class Sys_menu_function
    {
           public Sys_menu_function(){


           }
           /// <summary>
           /// Desc:系统菜单界面对应关系表
           /// Default:
           /// Nullable:True
           /// </summary>           
           public int? Sys_id {get;set;}

           /// <summary>
           /// Desc:页面ID
           /// Default:
           /// Nullable:True
           /// </summary>           
           public int? Function_id {get;set;}

    }
}
