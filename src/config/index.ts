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
};

export const rabbitmq = {
  connectionString: process.env.RABBITMQ_URI || '',
  queueName: process.env.RABBITMQ_QUEUENAME || '',
};
