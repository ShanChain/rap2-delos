import { IConfigOptions } from "../types";

// 先从环境变量取配置
let config: IConfigOptions = {
    version: '2.3',
    serve: {
        port: (process.env.EXPOSE_PORT && parseInt(process.env.EXPOSE_PORT)) || 8081,
    },
    keys: ['qianqianshijierap2'],
    session: {
        key: 'qianqianshijie:rap2:sess',
    },
    db: {
        dialect: 'mysql',
        host: process.env.MYSQL_URL || 'rm-uf6jah9153cl6ywgw.mysql.rds.aliyuncs.com',
        port: (process.env.MYSQL_PORT && parseInt(process.env.MYSQL_PORT)) || 3306,
        username: process.env.MYSQL_USERNAME || 'shanchain',
        password: process.env.MYSQL_PASSWD || '9876Yuio!',
        database: process.env.MYSQL_SCHEMA || 'rap2_dellos_app',
        pool: {
            max: 80,
            min: 0,
            idle: 20000,
            acquire: 20000,
        },
        logging: false,
    },
    redis: {
        host: process.env.REDIS_URL || 'r-uf6406e0b88f71e4.redis.rds.aliyuncs.com',
        port: (process.env.REDIS_PORT && parseInt(process.env.REDIS_PORT)) || 6379,
        password: (process.env.REDIS_PASSWORD ) || '9876Yuio'
    },
    mail: {
      host: 'smtp-mail.outlook.com',
      port: 587,
      secure: false,
      auth: {
          user: 'rap2_notify@outlook.com',
          pass: ''
      }
    },
    mailSender: 'rap2_notify@outlook.com',
}

export default config
