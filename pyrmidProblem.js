let pyrmidPower = function(textFile) {
    let fs = require("fs");
    let encoded = fs.readFileSync(textFile).toString('utf-8').split("\n");;
    console.log(encoded);
    // let nums = new Set();
    let numbers = [];
    let numWrds = new Map();
    // let currNum = "";
    for (let i = 0; i < encoded.length; i++) {
        let mid = encoded[i].indexOf(" ");
        let num = encoded[i].substr(0, mid);
        let word = encoded[i].substr(mid + 1, encoded[i].length);
        numWrds.set(num, word);
        numbers.push(num);
    }
    newNumbers = numbers.sort((a,b) => a-b);
    // console.log(newNumbers);
    let x = 2;
    let n = 0;
    let currStr = "";
    let decoded = [];
    while(n < newNumbers.length) {
        currStr = numWrds.get(newNumbers[n]);
        currStr = currStr.replace(`\r`, '');
        // console.log(currStr, newNumbers[n]);
        decoded.push(currStr);
        n = n + x;
        x++;
    }
    console.log(decoded.join(" "));
    return(decoded.join(" "));
}

pyrmidPower("./coding_qual_input (3).txt")


