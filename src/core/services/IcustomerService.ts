import CustomerRequest from "../models/customerRequest";

interface ICustomerService {
  executeAsync(request: CustomerRequest): Promise<any>;
}

export { ICustomerService };
