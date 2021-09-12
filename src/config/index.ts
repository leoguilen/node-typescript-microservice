import dotenv from 'dotenv';

const envFound = dotenv.config();
if (envFound.error) {
  throw new Error("⚠️ Couldn't find .env file ⚠️");
}

export const environment = process.env.NODE_ENV || 'development';
export const port = parseInt(process.env.PORT, 10);

export const logs = {
  level: process.env.LOG_LEVEL || 'silly',
};

export const api = {
  prefix: '/api',
};

export const mongoDb = {
  connectionString: process.env.MONGODB_URI || '',
  connectionStringLocal: process.env.MONGODB_URI_LOCAL || '',
};

export const redis = {
  connectionString: process.env.REDIS_URI || '',
  connectionStringLocal: process.env.REDIS_URI_LOCAL || '',
};
