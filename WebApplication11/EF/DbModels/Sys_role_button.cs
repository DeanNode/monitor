using System;
using System.Linq;
using System.Text;
using SqlSugar;

namespace Sugar.Enties
{
    ///<summary>
    ///
    ///</summary>
    [SugarTable("Sys_role_button")]
    public partial class Sys_role_button
    {
           public Sys_role_button(){


           }
           /// <summary>
           /// Desc:角色按钮表
           /// Default:
           /// Nullable:True
           /// </summary>           
           public int? Role_id {get;set;}

           /// <summary>
           /// Desc:按钮ID
           /// Default:
           /// Nullable:True
           /// </summary>           
           public int? Button_id {get;set;}

           /// <summary>
           /// Desc:标识为：1 为有效 -100标识删除
           /// Default:1
           /// Nullable:True
           /// </summary>           
           public int? Flag {get;set;}

           /// <summary>
           /// Desc:创建时间
           /// Default:
           /// Nullable:True
           /// </summary>           
           public DateTime? CreateDate {get;set;}

           /// <summary>
           /// Desc:创建人
           /// Default:
           /// Nullable:True
           /// </summary>           
           public int? CreateUserId {get;set;}

           /// <summary>
           /// Desc:更新时间
           /// Default:DateTime.Now
           /// Nullable:True
           /// </summary>           
           public DateTime? UpdateDate {get;set;}

           /// <summary>
           /// Desc:更新人
           /// Default:
           /// Nullable:True
           /// </summary>           
           public int? UpdateUserId {get;set;}

    }
}
