#! /usr/bin/env node
import inquirer from "inquirer"

let myBalance = 20000; // In dollar
let myPin = 11444;
console.log("Here is your EIDI");
let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    message: "Agr EIDI chahiye tw pin code tw dalo:",
    type: "number",
  },
]);
if (pinAnswer.pin === myPin) {
  console.log("Correct, Ab kuch dair mei ap k samny apki EIDI ho gii");
  let operationAnswer = await inquirer.prompt([
    {
      name: "operation",
      message: "Select any one:",
      type: "list",
      choices: ["Your Eidi", "Mine Eidi'from your side'"],
    },
  ]);
  if (operationAnswer.operation === "Your Eidi") {
    let amountAnswer = await inquirer.prompt([
      {
        name: "amount",
        message: "Choose an amount for your eidi",
        type: "list",
        choices: ["10000", "5000", "2000", "1000"],
      },
    ]);
    if (amountAnswer.amount > myBalance) {
      console.log("insufficient balance");
    } else {
      myBalance = amountAnswer.amount;
      console.log("Bas ab cash khud karana: " + myBalance);
      console.log("\nHAPPY,\n");
      console.log(
        "Don't say thanks just give me mine EIDI,\nNow go and select second option."
      );
    }
  } else if (operationAnswer.operation === "Mine Eidi'from your side'") {
    console.log("Give me this amount in cash: " + myBalance);
    console.log("\nAnd don't say: khud cash karana...");
  }
} else {
  console.log("Incorrect, Kia EIDI nahi chahiye");
  console.log("Pin code is: " + myPin);
}
