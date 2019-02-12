import { IConfigOptions } from "../types";

let config: IConfigOptions = {
  version: '2.3',
  serve: {
    port: 8081,
  },
  keys: ['qianqianshijierap2'],
  session: {
    key: 'qianqianshijie:rap2:sess',
  },
  db: {
    dialect: 'mysql',
    host: 'rm-uf6jah9153cl6ywgwo.mysql.rds.aliyuncs.com',
    port: 3306,
    username: 'shanchain',
    password: '9876Yuio!',
    database: 'rap2_dellos_app',
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
    logging: false,
  },
  redis: {
      host: 'r-uf6406e0b88f71e4.redis.rds.aliyuncs.com',
      port: 6379,
      password: '9876Yuio'
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
