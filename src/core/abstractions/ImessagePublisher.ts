import CustomerRequest from "../models/customerRequest";

interface IMessagePublisher {
  publishAsync(data: CustomerRequest): Promise<void>;
}

export { IMessagePublisher };
