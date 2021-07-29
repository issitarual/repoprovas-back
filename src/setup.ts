import dotenv from 'dotenv';

const envFile = process.env.NODE_ENV === 'test' ? '.env.test' : process.env.DB_URL;

dotenv.config({
  path: envFile
});