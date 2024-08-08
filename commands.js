import { program } from "commander";
import { addCustomer, findCustomer } from "./index.js";

program.version("1.0.0").description("Customer Management System");

program
  .command("add <firstname> <lastname> <phone> <email>")
  .alias("a")
  .description("Add a customer")
  .action((firstname, lastname, phone, email) => {
    addCustomer({ firstname, lastname, phone, email });
  });

program
  .command("find <name>")
  .alias("f")
  .description("Find a customer")
  .action((name) => {
    findCustomer(name);
  });

program.parse(process.argv);
