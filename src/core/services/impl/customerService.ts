import { inject, injectable } from 'inversify';
import { ICustomerRepository } from 'src/core/abstractions/IcustomerRepository';
import { IMessagePublisher } from 'src/core/abstractions/ImessagePublisher';
import customerRequest from "src/core/models/customerRequest";
import Logger from 'src/infrastructure/logger';
import TYPES from 'src/ioc/Types';
import { ICustomerService } from "../IcustomerService";

@injectable()
export class CustomerService implements ICustomerService {
  private readonly _customerRepository: ICustomerRepository;
  private readonly _messagePublisher: IMessagePublisher;

  constructor(
    @inject(TYPES.ICustomerRepository) customerRepository: ICustomerRepository,
    @inject(TYPES.IMessagePublisher) messagePublisher: IMessagePublisher,
  ) {
    this._customerRepository = customerRepository;
    this._messagePublisher = messagePublisher;
  }

  async executeAsync(request: customerRequest): Promise<any> {
    try {
      console.log(request);
      return {
        title: "success",
        description: "customer created with successfully",
        statusCode: 201,
      }
    } catch (error) {
      Logger.error(error);
      return {
        title: "unexpected error",
        description: error.message,
        statusCode: 500,
      }
    }
  }
}
