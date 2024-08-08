import mongoose, { mongo } from "mongoose";
import Customer from "./models/customer.js";

mongoose.Promise = global.Promise;

// >>Connect to MongoDB
const db = mongoose.connect("mongodb://localhost:27017/customercli");

// >>Add Customer
const addCustomer = (customer) => {
  Customer.create(customer).then((customer) => {
    console.info("New Customer Added");
    // db.close();
  });
};

// >>Find Customer
const findCustomer = (name) => {
  // Make case insensitive
  const search = new RegExp(name, "i");
  Customer.find({ $or: [{ firstname: search }, { lastname: search }] }).then(
    (customer) => {
      console.info(customer);
      console.info(`${customer.length} matches`);
    }
  );
  //   db.close();
};

// ? Export All Methods
export { addCustomer, findCustomer };
