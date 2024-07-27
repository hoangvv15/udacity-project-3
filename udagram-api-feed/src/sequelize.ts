import {Sequelize} from 'sequelize-typescript';
import {config} from './config/config';

console.debug(config.username)
console.debug(config.password)
console.debug(config.database)
console.debug(config.host)
export const sequelize = new Sequelize({
  'username': config.username,
  'password': config.password,
  'database': config.database,
  'host': config.host,

  'dialect': config.dialect,
  'storage': ':memory:',
});
