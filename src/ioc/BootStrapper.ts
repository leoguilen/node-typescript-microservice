import "reflect-metadata";
import { Container } from "inversify";

import TYPES from "./Types";
import { IRabbitMqClient } from "src/infrastructure/broker/clients/IrabbitmqClient";
import { RabbitMqClient } from "src/infrastructure/broker/clients/impl/rabbitmqClient";
import { IMessagePublisher } from "src/core/abstractions/ImessagePublisher";
import { RabbitMqPublisher } from "src/infrastructure/broker/publishers/rabbitMqPublisher";
import { IMongoContext } from "src/infrastructure/data/context/ImongoContext";
import { MongoContext } from "src/infrastructure/data/context/impl/mongoContext";
import { ICustomerRepository } from "src/core/abstractions/IcustomerRepository";
import { CustomerRepository } from "src/infrastructure/data/repositories/customerRepository";
import { ICustomerService } from "src/core/services/IcustomerService";
import { CustomerService } from "src/core/services/impl/customerService";

const bootstrapper = new Container();

// Broker
bootstrapper.bind<IRabbitMqClient>(TYPES.IRabbitMqClient).to(RabbitMqClient);
bootstrapper.bind<IMessagePublisher>(TYPES.IMessagePublisher).to(RabbitMqPublisher);

//Repository
bootstrapper.bind<IMongoContext>(TYPES.IMongoContext).to(MongoContext);
bootstrapper.bind<ICustomerRepository>(TYPES.ICustomerRepository).to(CustomerRepository);

//Service
bootstrapper.bind<ICustomerService>(TYPES.ICustomerService).to(CustomerService);

export default bootstrapper;
