import { inject, injectable } from "inversify";
import { ICustomerRepository } from "src/core/abstractions/IcustomerRepository";
import customerRequest from "src/core/models/customerRequest";
import TYPES from "src/ioc/Types";
import { IMongoContext } from "../context/ImongoContext";
import Customer from "../schemas/Customer";

@injectable()
export class CustomerRepository implements ICustomerRepository {
  private readonly _mongoContext: IMongoContext;

  constructor(
    @inject(TYPES.IMongoContext) mongoContext: IMongoContext
  ) {
    this._mongoContext = mongoContext;
  }

  async addAsync(data: customerRequest): Promise<void> {
    await this._mongoContext.openConnectionAsync();

    const customerDocument = {
      name: data.name,
      email: data.email,
      age: data.age,
      documentIdentifier: data.documentIdentifier,
    };
    const customerSchema = new Customer(customerDocument);

    await customerSchema.save();
  }
}
