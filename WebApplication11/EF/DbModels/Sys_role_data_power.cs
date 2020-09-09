using System;
using System.Linq;
using System.Text;
using SqlSugar;

namespace Sugar.Enties
{
    ///<summary>
    ///
    ///</summary>
    [SugarTable("Sys_role_data_power")]
    public partial class Sys_role_data_power
    {
           public Sys_role_data_power(){


           }
           /// <summary>
           /// Desc:数据权限角色换热站表
           /// Default:
           /// Nullable:True
           /// </summary>           
           public int? Role_id {get;set;}

           /// <summary>
           /// Desc:楼号ID 小区id 换热站id等 主要是看lv_no 
           /// Default:
           /// Nullable:True
           /// </summary>           
           public int? Org_id {get;set;}

           /// <summary>
           /// Desc:级别 1是集团 2 总公司 依次类推
           /// Default:
           /// Nullable:True
           /// </summary>           
           public int? Org_level {get;set;}

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
