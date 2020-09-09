using System;
using System.Linq;
using System.Text;
using SqlSugar;

namespace Sugar.Enties
{
    ///<summary>
    ///
    ///</summary>
    [SugarTable("Sys_rizhi")]
    public partial class Sys_rizhi
    {
           public Sys_rizhi(){


           }
           /// <summary>
           /// Desc:日志表
           /// Default:
           /// Nullable:False
           /// </summary>           
           [SugarColumn(IsPrimaryKey=true,IsIdentity=true)]
           public int ID {get;set;}

           /// <summary>
           /// Desc:唯一码 因为导入的时候是从明细开始导入，然后插入到总表里面
           /// Default:
           /// Nullable:True
           /// </summary>           
           public string KeyId {get;set;}

           /// <summary>
           /// Desc:日志操作人员id
           /// Default:0
           /// Nullable:False
           /// </summary>           
           public int User_id {get;set;}

           /// <summary>
           /// Desc:日志操作人员名称
           /// Default:
           /// Nullable:False
           /// </summary>           
           public string Real_name {get;set;}

           /// <summary>
           /// Desc:
           /// Default:
           /// Nullable:True
           /// </summary>           
           public int? House_id {get;set;}

           /// <summary>
           /// Desc:页面ID
           /// Default:
           /// Nullable:True
           /// </summary>           
           public int? Function_id {get;set;}

           /// <summary>
           /// Desc:操作日志时间
           /// Default:DateTime.Now
           /// Nullable:True
           /// </summary>           
           public DateTime? Op_time {get;set;}

           /// <summary>
           /// Desc:日志类型 ：用户信息 
           /// Default:
           /// Nullable:True
           /// </summary>           
           public string Rz_type {get;set;}

           /// <summary>
           /// Desc:日志内容 如 添加一条用户信息，导入10个用户信息等
           /// Default:
           /// Nullable:True
           /// </summary>           
           public string Rz_content {get;set;}

           /// <summary>
           /// Desc:备注
           /// Default:
           /// Nullable:True
           /// </summary>           
           public string BZ {get;set;}

           /// <summary>
           /// Desc:操作级别，有时候可能高级别的覆盖低级别的日志
           /// Default:
           /// Nullable:True
           /// </summary>           
           public string Op_level {get;set;}

    }
}
