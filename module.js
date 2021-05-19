const fs = require("fs");

const textMessage = fs.readFile("./portfolio-generator/message.txt","utf8", (err, data) => {
    if(err) {
        console.log(err);
    }
    console.log(textMessage);
});