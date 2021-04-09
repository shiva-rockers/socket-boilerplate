/* eslint-disable no-var */
/* eslint-disable no-use-before-define */
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
process.env.HOST = process.env.HOST || '127.0.0.1';
process.env.PORT = 3000;

const oEnv = {};

oEnv.dev = {
    BASE_URL: `http://127.0.0.1:3000`,
    DB_URL: 'mongodb://localhost:27017',
};

oEnv.stag = {
    BASE_URL: 'http://13.127.54.61:3000',
    DB_URL: 'mongodb://localhost:27017',
};

oEnv.prod = {
    BASE_URL: 'http://127.0.0.1:3000',
    DB_URL: 'mongodb://localhost:27017',
};

process.env.JWT_SECRET = 'jwt-secret';
process.env.DB_URL = oEnv[process.env.NODE_ENV].DB_URL;
process.env.AUTH_CODE_VALIDITY = '5m';

console.log(process.env.NODE_ENV, process.env.HOST, 'configured');
