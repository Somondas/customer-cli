#!/usr/bin/env node
import { program } from "commander";
import {
  addCustomer,
  findCustomer,
  listCustomers,
  removeCustomer,
  updateCustomer,
} from "./index.js";
import inquirer from "inquirer";

// >>Customer Questions________________________
const questions = [
  {
    type: "input",
    name: "firstname",
    message: "Customer First Name",
  },
  {
    type: "input",
    name: "lastname",
    message: "Customer Last Name",
  },
  {
    type: "input",
    name: "phone",
    message: "Customer Phone Number",
  },
  {
    type: "input",
    name: "email",
    message: "Customer Email",
  },
];

// ?Version___________________________________
program.version("1.0.0").description("Customer Management System");

// >> commands
// program
//   .command("add <firstname> <lastname> <phone> <email>")
//   .alias("a")
//   .description("Add a customer")
//   .action((firstname, lastname, phone, email) => {
//     addCustomer({ firstname, lastname, phone, email });
//   });

program
  .command("add")
  .alias("a")
  .description("Add a customer")
  .action(() => {
    inquirer.prompt(questions).then((answers) => addCustomer(answers));
  });

// >>Find Customer
program
  .command("find <name>")
  .alias("f")
  .description("Find a customer")
  .action((name) => {
    findCustomer(name);
  });

// >>Update Customer
program
  .command("update <_id>")
  .alias("u")
  .description("Update a customer")
  .action((_id) => {
    inquirer.prompt(questions).then((answers) => updateCustomer(_id, answers));
  });

// >>Remove Customer
program
  .command("remove <_id>")
  .alias("r")
  .description("Remove a customer")
  .action((_id) => {
    removeCustomer(_id);
    // console.log("Customer Removed");
  });

// >>List Customers
program
  .command("list")
  .alias("l")
  .description("List all customers")
  .action(() => {
    listCustomers();
  });

program.parse(process.argv);
