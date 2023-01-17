import { Pool } from 'pg';
import dbInfo from './config';

const { host, envDB, user, password, port, testDB, env } = dbInfo;

let client;

if (env === 'dev') {
  client = new Pool({
    host: host,
    user: user,
    database: envDB,
    password: password,
    port: port
  });
} else {
  client = new Pool({
    host: host,
    user: user,
    database: testDB,
    password: password,
    port: port
  });
}

export default client as Pool;
