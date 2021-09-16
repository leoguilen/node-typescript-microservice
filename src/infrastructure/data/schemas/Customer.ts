import { Document, Model, model, Schema } from "mongoose";

export interface ICustomerDocument extends Document {
  name: string;
  email: string;
  age: number;
  documentIdentifier: string;
}

const customerSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    maxlength: 100,
  },
  age: {
    type: Number,
    required: true,
  },
  documentIdentifier: {
    type: String,
    required: true,
    unique: true,
    maxlength: 40,
  }
});

const Customer: Model<ICustomerDocument> = model("Customer", customerSchema);

export default Customer;
