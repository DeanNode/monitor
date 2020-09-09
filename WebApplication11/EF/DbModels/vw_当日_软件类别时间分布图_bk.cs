using System;
using System.Linq;
using System.Text;
using SqlSugar;

namespace Sugar.Enties
{
    ///<summary>
    ///
    ///</summary>
    [SugarTable("vw_当日_软件类别时间分布图_bk")]
    public partial class vw_当日_软件类别时间分布图_bk
    {
           public vw_当日_软件类别时间分布图_bk(){


           }
           /// <summary>
           /// Desc:
           /// Default:
           /// Nullable:True
           /// </summary>           
           public string appName {get;set;}

           /// <summary>
           /// Desc:
           /// Default:
           /// Nullable:True
           /// </summary>           
           public decimal? mins {get;set;}

    }
}
