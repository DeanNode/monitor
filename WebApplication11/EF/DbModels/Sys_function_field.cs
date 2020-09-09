using System;
using System.Linq;
using System.Text;
using SqlSugar;

namespace Sugar.Enties
{
    ///<summary>
    ///
    ///</summary>
    [SugarTable("Sys_function_field")]
    public partial class Sys_function_field
    {
           public Sys_function_field(){


           }
           /// <summary>
           /// Desc:页面字段表
           /// Default:
           /// Nullable:False
           /// </summary>           
           [SugarColumn(IsPrimaryKey=true)]
           public int Field_id {get;set;}

           /// <summary>
           /// Desc:列表标题名
           /// Default:
           /// Nullable:True
           /// </summary>           
           public string Field_display {get;set;}

           /// <summary>
           /// Desc:字段名
           /// Default:
           /// Nullable:True
           /// </summary>           
           public string Field_name {get;set;}

           /// <summary>
           /// Desc:默认宽度
           /// Default:100
           /// Nullable:True
           /// </summary>           
           public int? Field_width {get;set;}

           /// <summary>
           /// Desc:类型
           /// Default:text
           /// Nullable:True
           /// </summary>           
           public string Field_type {get;set;}

           /// <summary>
           /// Desc:对齐
           /// Default:center
           /// Nullable:True
           /// </summary>           
           public string Field_align {get;set;}

           /// <summary>
           /// Desc:字段排序号
           /// Default:01
           /// Nullable:True
           /// </summary>           
           public int? Field_order {get;set;}

           /// <summary>
           /// Desc:
           /// Default:
           /// Nullable:True
           /// </summary>           
           public int? Field_export_locked {get;set;}

           /// <summary>
           /// Desc:默认是否显示
           /// Default:1
           /// Nullable:True
           /// </summary>           
           public int? Field_show {get;set;}

           /// <summary>
           /// Desc:所属页面ID
           /// Default:
           /// Nullable:False
           /// </summary>           
           public int Function_id {get;set;}

           /// <summary>
           /// Desc:参与动态级别的编号，不参与为Null，1集团2总公司3分公司4科
           /// Default:
           /// Nullable:True
           /// </summary>           
           public int? Lv_no {get;set;}

           /// <summary>
           /// Desc:一个界面多个grid的情况，与按钮一样处理
           /// Default:
           /// Nullable:True
           /// </summary>           
           public string Field_class {get;set;}

           /// <summary>
           /// Desc:
           /// Default:1
           /// Nullable:True
           /// </summary>           
           public int? Field_pl {get;set;}

           /// <summary>
           /// Desc:
           /// Default:
           /// Nullable:True
           /// </summary>           
           public int? pl_field_type {get;set;}

           /// <summary>
           /// Desc:
           /// Default:
           /// Nullable:True
           /// </summary>           
           public string pl_field_name {get;set;}

           /// <summary>
           /// Desc:
           /// Default:
           /// Nullable:True
           /// </summary>           
           public string pl_field_belongsTable {get;set;}

           /// <summary>
           /// Desc:
           /// Default:
           /// Nullable:True
           /// </summary>           
           public string field_url {get;set;}

    }
}
