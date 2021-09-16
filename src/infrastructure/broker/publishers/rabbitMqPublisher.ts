import { Channel } from "amqplib";
import { inject, injectable } from "inversify";
import { IMessagePublisher } from "src/core/abstractions/ImessagePublisher";
import { IRabbitMqClient } from "../clients/IrabbitmqClient";
import customerRequest from "src/core/models/customerRequest";
import { rabbitmq } from "src/config";
import TYPES from "src/ioc/Types";

@injectable()
export class RabbitMqPublisher implements IMessagePublisher {
  private readonly _channel: Channel;

  constructor(
    @inject(TYPES.IRabbitMqClient) rabbitClient: IRabbitMqClient
  ) {
    this._channel = rabbitClient.channel;
  }

  async publishAsync(data: customerRequest): Promise<void> {
    const bufferedData = Buffer.from(JSON.stringify(data));
    this._channel.sendToQueue(rabbitmq.queueName, bufferedData);
  }
}
