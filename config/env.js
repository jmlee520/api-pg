'use strict';

const env = {
  PORT: process.env.PORT || 3000,
  DATABASE_URL: process.env.DATABASE_URL || 'postgresql://api:qwe][p@192.168.0.109:5432/api',
  DATABASE_NAME: process.env.DATABASE_NAME || 'api',
  DATABASE_HOST: process.env.DATABASE_HOST || '192.168.0.109',
  DATABASE_USERNAME: process.env.DATABASE_USERNAME || 'api',
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD || 'qwe[po',
  DATABASE_PORT: process.env.DATABASE_PORT || 5432,
  DATABASE_DIALECT: process.env.DATABASE_DIALECT || 'postgres',
// 
//   NODE_ENV: process.env.NODE_ENV || 'development',
};

module.exports = env;