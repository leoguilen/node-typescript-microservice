import { Channel, connect, Connection } from "amqplib";
import { injectable } from "inversify";

import { IRabbitMqClient } from "../IrabbitmqClient";
import Logger from "src/infrastructure/logger";
import { rabbitmq } from "src/config";

@injectable()
export class RabbitMqClient implements IRabbitMqClient {
  private readonly _connectionString: string;
  private _connection: Connection;

  constructor() {
    this._connectionString = rabbitmq.connectionString;
  }

  public channel: Channel;

  async startAsync(): Promise<void> {
    try {
      this._connection = await connect(this._connectionString);
      this.channel = await this._connection.createChannel();
    }
    catch (ex) {
      Logger.error(ex);
      throw new Error("RabbitMQ connection failed.");
    }
  }
}
