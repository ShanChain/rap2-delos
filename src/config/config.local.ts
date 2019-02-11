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
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '123456',
    database: 'rap2_delos_app',
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
    logging: false
  },
  redis: {},
  mail: {
    host: 'smtp-mail.outlook.com',
    port: 587,
    secure: false,
    auth: {
      user: '',
      pass: ''
    }
  },
  mailSender: '',
}

export default config