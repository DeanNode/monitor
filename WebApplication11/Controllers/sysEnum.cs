using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication11.Controllers
{
    public enum sysEnum
    {
        数据被删除 = -1,
        发生异常 = -50,
        还没有执行 =-20,
        执行数据库失败 = -5,
        参数必填 =-2,

        数据不存在 = 0,
        验证码不正确 = 5,
        数据库中已经存在 = 2,
        sim卡激活 = 1,

        操作成功 = 100,

        默认加油阈值 = 100,
    }

    public enum sysKey
    {
        默认加油阈值 = 100
    }

    public enum taskIssueType
    {

        按月执行 = 10,
        按周执行 = 20,
        间隔日执行 = 30,
        临时执行 = 40,
    }

}