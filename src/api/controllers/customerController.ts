import 'reflect-metadata';
import { Request, Response } from "express";
import CustomerRequest from "src/core/models/customerRequest";
import { ICustomerService } from "src/core/services/IcustomerService";
import bootstrapper from "src/ioc/BootStrapper";
import TYPES from "src/ioc/Types";

export class CustomerController {
  private readonly _customerService: ICustomerService;

  constructor() {
    this._customerService = bootstrapper
      .get<ICustomerService>(TYPES.ICustomerService);
  }

  async createAsync(req: Request, res: Response): Promise<void> {
    const customer: CustomerRequest = req.body;
    res.json(await this._customerService.executeAsync(customer));
  }
}
