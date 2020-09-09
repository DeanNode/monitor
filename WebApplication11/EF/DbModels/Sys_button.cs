using System;
using System.Linq;
using System.Text;
using SqlSugar;

namespace Sugar.Enties
{
    ///<summary>
    ///
    ///</summary>
    [SugarTable("Sys_button")]
    public partial class Sys_button
    {
           public Sys_button(){


           }
           /// <summary>
           /// Desc:按钮信息表
           /// Default:
           /// Nullable:False
           /// </summary>           
           [SugarColumn(IsPrimaryKey=true,IsIdentity=true)]
           public int Button_id {get;set;}

           /// <summary>
           /// Desc:按钮名称
           /// Default:
           /// Nullable:True
           /// </summary>           
           public string Button_name {get;set;}

           /// <summary>
           /// Desc:按钮图标保存路径
           /// Default:
           /// Nullable:True
           /// </summary>           
           public string Ico_addr {get;set;}

           /// <summary>
           /// Desc:按钮绑定事件
           /// Default:
           /// Nullable:True
           /// </summary>           
           public string Button_event {get;set;}

           /// <summary>
           /// Desc:按钮所属页面ID
           /// Default:
           /// Nullable:True
           /// </summary>           
           public int? Function_id {get;set;}

           /// <summary>
           /// Desc:序号
           /// Default:
           /// Nullable:True
           /// </summary>           
           public int? Order_no {get;set;}

           /// <summary>
           /// Desc:是否启用
           /// Default:
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
           /// Desc:按钮归属类别  用于多个Grid
           /// Default:
           /// Nullable:True
           /// </summary>           
           public string Button_class {get;set;}

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
