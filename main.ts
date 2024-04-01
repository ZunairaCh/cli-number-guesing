#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([])

const randomNumber = Math.floor(Math.random()* 6 + 1);

const answers=await inquirer.prompt([
    {
        name: "userGuessedNumber" ,
        type: "number" ,
        message: "please guess a number between 1-8: ",
    }
])
if(answers.userGuessedNumber === randomNumber){
    console.log("Congragulations!You gussed a right number.");
}else
    console.log("You guessed wrong number")