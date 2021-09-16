const TYPES = {
  // Broker
  IRabbitMqClient: Symbol.for('IRabbitMqClient'),
  IMessagePublisher: Symbol.for('IMessagePublisher'),

  // Data
  IMongoContext: Symbol.for('IMongoContext'),
  ICustomerRepository: Symbol.for('ICustomerRepository'),

  // Services
  ICustomerService: Symbol.for('ICustomerService'),
};

export default TYPES;
