#! /usr/bin/env node

// imported inquirer and chalk packages

import inquirer from "inquirer";
import chalk from "chalk"

// Display a coloreful welcome message
console.log(chalk.bold.cyanBright("\n\t\tCode with Aurangzaib Mughal- Word Counter"));
console.log("=".repeat(70));

// prompt the user to enter a sentence
let answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message:"Enter a Sentence",
    }
]);
// trim the sentence and split use it into words bases on "speces"

let words = answer.sentence.trim().split(" ");
// Analysis of user input sentence
console.log("=".repeat(70));
console.log(chalk.bold("sentence word:"));
console.log(words);
console.log(chalk.bold(`\n word count: ${chalk.bold.red(words.length)}`));
console.log("=".repeat(70));