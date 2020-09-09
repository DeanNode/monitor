using SqlSugar;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication11.App_Start
{
    public class sqlHelper
    {
        public SqlSugarClient dbClient() {
            SqlSugarClient db = new SqlSugarClient(
            new ConnectionConfig()
            {
                ConnectionString =System.Configuration.ConfigurationManager.AppSettings["dbSoureConnectStr"],
                DbType = DbType.SqlServer,//设置数据库类型
                IsAutoCloseConnection = true,//自动释放数据务，如果存在事务，在事务结束后释放
                InitKeyType = InitKeyType.Attribute //从实体特性中读取主键自增列信息
            });
            return db;
        }
    }
}