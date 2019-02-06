#!/usr/bin/env node

const program = require("commander");

program
  .option("-e, --encode")
  .option("-d, --decode");

program
  .command("base64")
  .action((value) => {
    if (program.encode) {
      console.log(Buffer.from(value).toString("base64"));
    } else if (program.decode) {
      console.log(Buffer.from(value, "base64").toString("ascii"));
    }
  });

program
  .command("unix")
  .action((value) => {
    if (program.encode) {
      console.log(new Date(value).getTime() / 1000);
    } else if (program.decode) {
      console.log(new Date(parseInt(value, 10) * 1000).toISOString());
    }
  });

program.parse(process.argv);
