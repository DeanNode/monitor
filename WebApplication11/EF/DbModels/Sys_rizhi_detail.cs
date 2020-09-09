using System;
using System.Linq;
using System.Text;
using SqlSugar;

namespace Sugar.Enties
{
    ///<summary>
    ///
    ///</summary>
    [SugarTable("Sys_rizhi_detail")]
    public partial class Sys_rizhi_detail
    {
           public Sys_rizhi_detail(){


           }
           /// <summary>
           /// Desc:日志明细表
           /// Default:
           /// Nullable:False
           /// </summary>           
           [SugarColumn(IsPrimaryKey=true,IsIdentity=true)]
           public decimal ID {get;set;}

           /// <summary>
           /// Desc:和Sys_rizhi相互关联
           /// Default:
           /// Nullable:True
           /// </summary>           
           public string KeyId {get;set;}

           /// <summary>
           /// Desc:日志类型
           /// Default:
           /// Nullable:True
           /// </summary>           
           public string Rz_type {get;set;}

           /// <summary>
           /// Desc:日志内容
           /// Default:
           /// Nullable:True
           /// </summary>           
           public string Rz_content {get;set;}

           /// <summary>
           /// Desc:表名称用于后期 展示数据接口
           /// Default:
           /// Nullable:True
           /// </summary>           
           public string tablename {get;set;}

           /// <summary>
           /// Desc:列名称：例如meter_id house_id等
           /// Default:
           /// Nullable:True
           /// </summary>           
           public string fieldName {get;set;}

           /// <summary>
           /// Desc:对应fieldName 的 值
           /// Default:
           /// Nullable:True
           /// </summary>           
           public string fieldValue {get;set;}

           /// <summary>
           /// Desc:备注
           /// Default:
           /// Nullable:True
           /// </summary>           
           public string bk {get;set;}

           /// <summary>
           /// Desc:创建时间
           /// Default:
           /// Nullable:True
           /// </summary>           
           public DateTime? createDate {get;set;}

    }
}
