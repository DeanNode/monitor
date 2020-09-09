using System;
using System.Linq;
using System.Text;
using SqlSugar;

namespace Sugar.Enties
{
    ///<summary>
    ///
    ///</summary>
    [SugarTable("public_doorlock")]
    public partial class public_doorlock
    {
           public public_doorlock(){


           }
           /// <summary>
           /// Desc:门锁ID
           /// Default:
           /// Nullable:False
           /// </summary>           
           [SugarColumn(IsPrimaryKey=true,IsIdentity=true)]
           public int doorlockId {get;set;}

           /// <summary>
           /// Desc:所属房间
           /// Default:
           /// Nullable:True
           /// </summary>           
           public int? belongsHubId {get;set;}

           /// <summary>
           /// Desc:设备序号（物理地址）
           /// Default:
           /// Nullable:True
           /// </summary>           
           public int? number {get;set;}

           /// <summary>
           /// Desc:门锁别名
           /// Default:
           /// Nullable:True
           /// </summary>           
           public string doorlockName {get;set;}

           /// <summary>
           /// Desc:排序规则
           /// Default:
           /// Nullable:True
           /// </summary>           
           public int? magnetismOrderNo {get;set;}

           /// <summary>
           /// Desc:开关状态 0关 1开 -1故障
           /// Default:
           /// Nullable:True
           /// </summary>           
           public int? openFlag {get;set;}

           /// <summary>
           /// Desc:备注
           /// Default:
           /// Nullable:True
           /// </summary>           
           public string remarks {get;set;}

           /// <summary>
           /// Desc:坐标x
           /// Default:
           /// Nullable:True
           /// </summary>           
           public float? mapX {get;set;}

           /// <summary>
           /// Desc:坐标y
           /// Default:
           /// Nullable:True
           /// </summary>           
           public float? mapY {get;set;}

           /// <summary>
           /// Desc:状态标识 1有效 -1删除
           /// Default:
           /// Nullable:True
           /// </summary>           
           public int? flag {get;set;}

           /// <summary>
           /// Desc:创建时间
           /// Default:CURRENT_TIMESTAMP
           /// Nullable:True
           /// </summary>           
           public DateTime? createDate {get;set;}

           /// <summary>
           /// Desc:创建人
           /// Default:
           /// Nullable:True
           /// </summary>           
           public int? createId {get;set;}

           /// <summary>
           /// Desc:更新时间
           /// Default:
           /// Nullable:True
           /// </summary>           
           public DateTime? updateData {get;set;}

           /// <summary>
           /// Desc:更新人
           /// Default:
           /// Nullable:True
           /// </summary>           
           public int? updateUserId {get;set;}

    }
}
