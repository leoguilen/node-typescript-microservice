import CustomerRequest from "../models/customerRequest";

interface ICustomerRepository {
  addAsync(data: CustomerRequest): Promise<void>
}

export { ICustomerRepository };
