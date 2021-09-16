import { Channel } from "amqplib";

interface IRabbitMqClient {
  channel: Channel;
}

export { IRabbitMqClient };
