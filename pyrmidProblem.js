let pyrmidPower = function(textFile) {
    var fs = require("fs");
    var text = fs.readFileSync(textFile).toString('utf-8').split("\n");;
    let nums = new Set();
    nums.add("0");
    nums.add("1");
    nums.add("2");
    nums.add("3");
    nums.add("4");
    nums.add("5");
    nums.add("6");
    nums.add("7");
    nums.add("8");
    nums.add("9");
    let numbers = [];
    let numWrds = new Map();
    let currNum = "";
    for (let i = 0; i < text.length; i++) {
        let mid = text[i].indexOf(" ");
        let num = text[i].substr(0, mid);
        let sting = text[i].substr(mid, text[i].length);
        numWrds.set(num, sting);
        numbers.push(num);
        // if (nums.has(text[i])) {
        //     currNum = "";
        //     while (nums.has(text[i])) {
        //         currNum = currNum + text[i];
        //         i++;
        //     }
        //     currNum = parseInt(currNum);
        // } else if(text[i] !== " ") {
        //     let currWrd = "";
        //     while(text[i] !== " " && !nums.has(text[i])) {
        //         currWrd = currWrd + text[i];
        //         i++;
        //     }
        //     console.log(currNum);
        //     numWrds.set(currNum, currWrd);
        //     numbers.push(currNum);
        // }
    }
    newNumbers = numbers.sort((a,b) => a-b);
    let x = 2;
    let n = 0;
    let str2 = "";
    let decoded = [];
    while(n < newNumbers.length) {
        str2 = numWrds.get(newNumbers[n]);
        str2 = str2.replace(`\r`, ''); 
        if (str2 !== undefined) decoded.push(str2);
        n = n + x;
        x++;
    }
    // newNumbers = numbers.sort((a, b) => a - b)
    // console.log(newNumbers)
    console.log(decoded.join(" "));
}

pyrmidPower("./coding_qual_input (1).txt")


