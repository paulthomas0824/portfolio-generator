const fs = require('fs');
// Install the `inquirer` dependency HERE

// Prompt the user for their name, preferred method of communication, and known languages
// YOUR CODE HERE
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  readline.question('Who are you?', name => {
    console.log(`Hey there ${name}!`);
    readline.close();
  });
