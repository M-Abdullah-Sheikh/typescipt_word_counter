#! /usr/bin/env node

import inquirer from "inquirer";

import chalk from "chalk";
console.log(chalk.redBright("Welcome to Paragraph Count App"));
type wordCount = (str: string) => void;

const wordCount: wordCount = (string) => {
    const words = string.trim().split(/\s+/g);

    console.log(chalk.redBright("Total Words in the Para Are: " + words.length));
}

const getInput =async () => {
    const userInput = await inquirer.prompt([
        {
            type: "input",
            name: "para",
            message: "Enter Your Para: "
        }
    ]);

   await wordCount(userInput.para);
}

await getInput();