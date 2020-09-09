using System;
using System.Linq;
using System.Text;
using SqlSugar;

namespace Sugar.Enties
{
    ///<summary>
    ///
    ///</summary>
    [SugarTable("Sys_function_Grid")]
    public partial class Sys_function_Grid
    {
           public Sys_function_Grid(){


           }
           /// <summary>
           /// Desc:页面grid配置界面
           /// Default:
           /// Nullable:True
           /// </summary>           
           public int? Function_id {get;set;}

           /// <summary>
           /// Desc:grid的名称
           /// Default:
           /// Nullable:True
           /// </summary>           
           public string GridName {get;set;}

           /// <summary>
           /// Desc:grid的标头
           /// Default:
           /// Nullable:True
           /// </summary>           
           public string GridTitle {get;set;}

           /// <summary>
           /// Desc:数据源 表 视图  存储过程
           /// Default:
           /// Nullable:True
           /// </summary>           
           public string Table_name {get;set;}

           /// <summary>
           /// Desc:数据源 表 视图  存储过程
           /// Default:
           /// Nullable:True
           /// </summary>           
           public string Data_table {get;set;}

           /// <summary>
           /// Desc:宽度
           /// Default:
           /// Nullable:True
           /// </summary>           
           public double? width {get;set;}

           /// <summary>
           /// Desc:高度
           /// Default:
           /// Nullable:True
           /// </summary>           
           public double? height {get;set;}

           /// <summary>
           /// Desc:排序字段
           /// Default:
           /// Nullable:True
           /// </summary>           
           public string sortName {get;set;}

           /// <summary>
           /// Desc:ASC DESC
           /// Default:
           /// Nullable:True
           /// </summary>           
           public string sortorder {get;set;}

           /// <summary>
           /// Desc:每页显示条数
           /// Default:
           /// Nullable:True
           /// </summary>           
           public int? pageSize {get;set;}

           /// <summary>
           /// Desc:可选每页显示条数
           /// Default:
           /// Nullable:True
           /// </summary>           
           public string pageSizeOptions {get;set;}

           /// <summary>
           /// Desc:
           /// Default:
           /// Nullable:True
           /// </summary>           
           public string Remarks {get;set;}

           /// <summary>
           /// Desc:是否显示
           /// Default:
           /// Nullable:True
           /// </summary>           
           public string open_mark {get;set;}

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
