import { connect, ConnectOptions } from 'mongoose';
import { injectable } from 'inversify';

import { IMongoContext } from "../ImongoContext";
import { mongoDb } from "src/config";
import Logger from 'src/infrastructure/logger';

@injectable()
export class MongoContext implements IMongoContext {
  async openConnectionAsync(): Promise<void> {
    const mongoUri: string = mongoDb.connectionString;
    const options: ConnectOptions = {
      connectTimeoutMS: 1000,
      autoCreate: true,
      autoIndex: true,
    };

    try {
      await connect(mongoUri, options);
    } catch (error) {
      Logger.error(error);
      throw new Error('Mongo connection failed.');
    }
  }
}
