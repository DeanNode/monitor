using System;
using System.Linq;
using System.Text;
using SqlSugar;

namespace Sugar.Enties
{
    ///<summary>
    ///
    ///</summary>
    [SugarTable("tb_position")]
    public partial class tb_position
    {
           public tb_position(){


           }
           /// <summary>
           /// Desc:职位id
           /// Default:
           /// Nullable:False
           /// </summary>           
           [SugarColumn(IsPrimaryKey=true,IsIdentity=true)]
           public int positionId {get;set;}

           /// <summary>
           /// Desc:职位名称
           /// Default:NULL
           /// Nullable:True
           /// </summary>           
           public string positionName {get;set;}

           /// <summary>
           /// Desc:直属上级
           /// Default:NULL
           /// Nullable:True
           /// </summary>           
           public int? fatherPositionId {get;set;}

           /// <summary>
           /// Desc:1则可跨组查看全部下级，默认0
           /// Default:0
           /// Nullable:True
           /// </summary>           
           public int? shenheFlag {get;set;}

           /// <summary>
           /// Desc:描述
           /// Default:NULL
           /// Nullable:True
           /// </summary>           
           public string describe {get;set;}

           /// <summary>
           /// Desc:
           /// Default:
           /// Nullable:True
           /// </summary>           
           public int? orderNo {get;set;}

           /// <summary>
           /// Desc:
           /// Default:
           /// Nullable:True
           /// </summary>           
           public int? belongZhiwuId {get;set;}

           /// <summary>
           /// Desc:
           /// Default:
           /// Nullable:True
           /// </summary>           
           public int? projectId {get;set;}

           /// <summary>
           /// Desc:
           /// Default:1
           /// Nullable:True
           /// </summary>           
           public int? flag {get;set;}

           /// <summary>
           /// Desc:
           /// Default:
           /// Nullable:True
           /// </summary>           
           public DateTime? createDate {get;set;}

           /// <summary>
           /// Desc:
           /// Default:NULL
           /// Nullable:True
           /// </summary>           
           public int? createUserId {get;set;}

           /// <summary>
           /// Desc:
           /// Default:DateTime.Now
           /// Nullable:True
           /// </summary>           
           public DateTime? updateDate {get;set;}

           /// <summary>
           /// Desc:
           /// Default:NULL
           /// Nullable:True
           /// </summary>           
           public int? updateUserId {get;set;}

    }
}
