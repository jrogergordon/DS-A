
// Given a roman numeral, convert it to an integer.
var romanToInt = function (s) {
    let num = 0;
    let values = new Map();
    values.set("I", 1);
    values.set("V", 5);
    values.set("X", 10);
    values.set("L", 50);
    values.set("C", 100);
    values.set("D", 500);
    values.set("M", 1000);
    for (let i = 0; i < s.length; i++) {
        if (i < s.length - 1) {
            if (s[i] === "I" && (s[i + 1] === "V" || s[i + 1] === "X")) {
                if (s[i + 1] === "V") {
                    num = num + 4;
                }
                if (s[i + 1] === "X") {
                    num = num + 9;
                }
                console.log("1", i)
                i++;
                continue;
            }
            if (s[i] === "X" && (s[i + 1] === "L" || s[i + 1] === "C")) {
                if (s[i + 1] === "L") {
                    num = num + 40;
                }
                if (s[i + 1] === "C") {
                    num = num + 90;
                }
                console.log("2", s[i])
                i++;
                continue;
            }
            if (s[i] === "C" && (s[i + 1] === "D" || s[i + 1] === "M")) {
                if (s[i + 1] === "D") {
                    num = num + 400;
                }
                if (s[i + 1] === "M") {
                    num = num + 900;
                }
                console.log("3", i)
                i++;
                continue;
            }
        }
        num = num + values.get(s[i]);
        // console.log("new");
        // console.log(i)
        // console.log(values.get(s[i]))
        // console.log(num);
    }
    return num;
};


//243 x 441

// Given two non - negative integers num1 and num2 represented as strings,
//  return the product of num1 and num2, also represented as a string.

//     Note: You must not use any built -in BigInteger library or convert the inputs to
//  integer directly.
var multiply = function (num1, num2) {
    if (num1 === '0' || num2 === '0') {
        return '0';
    }
    let nums = new Map();
    nums.set("0", 0);
    nums.set("1", 1);
    nums.set("2", 2);
    nums.set("3", 3);
    nums.set("4", 4);
    nums.set("5", 5);
    nums.set("6", 6);
    nums.set("7", 7);
    nums.set("8", 8);
    nums.set("9", 9);

    let mult = new Array(num1.length + num2.length).fill(0);
    for (let i = num1.length - 1; i >= 0; i--) {
        for (let j = num2.length - 1; j >= 0; j--) {
            let currSpot = i + j + 1;
            let tenCurrSpot = i + j;
            let curr = mult[currSpot] + (nums.get(num1[i]) * nums.get(num2[j]));
            // console.log(nums.get(num1[i]), nums.get(num2[j]), curr)            
            mult[currSpot] = curr % 10;
            mult[tenCurrSpot] += Math.floor(curr / 10);
            // console.log(mult);
            // console.log('break')
        }
    }
    if (mult[0] === 0) {
        mult.shift();
    }
    return mult.join('');
};




// Given an integer, convert it to a roman numeral.


var intToRoman = function (N) {
    let num = "";

    let transOne = function (x) {
        if (x === 4) {
            num = "IV" + num;
            x = x - 4;
        }
        if (x === 9) {
            num = "IX" + num;
            x = x - 9;
        }
        while (x > 0) {
            if (x === 5) {
                num = "V" + num;
                x = x - 5;
            } else {
                num = "I" + num;
                x = x - 1;
            }
        }
    }

    let transTen = function (x) {
        if (x === 4) {
            num = "XL" + num;
            x = x - 4;
        }
        if (x === 9) {
            num = "XC" + num;
            x = x - 9;
        }
        while (x > 0) {
            if (x === 5) {
                num = "L" + num;
                x = x - 5;
            } else {
                num = "X" + num;
                x = x - 1;
            }
        }
    }

    let transHun = function (x) {
        if (x === 4) {
            num = "CD" + num;
            x = x - 4;
        }
        if (x === 9) {
            num = "CM" + num;
            x = x - 9;
        }
        while (x > 0) {
            if (x === 5) {
                num = "D" + num;
                x = x - 5;
            } else {
                num = "C" + num;
                x = x - 1;
            }
        }
    }

    let transThou = function (x) {
        while (x > 0) {
            num = "M" + num;
            x = x - 1;
        }
    }
    let count = 0;
    while (N > 0) {
        let curr = N % 10;
        // console.log(curr);
        switch (count) {
            case 0:
                // console.log("1")
                transOne(curr)
                break;
            case 1:
                console.log("2")
                transTen(curr)
                break;
            case 2:
                // console.log("3")
                transHun(curr)
                break;
            case 3:
                transThou(curr);
                break;
        }
        count++;
        N = Math.floor(N / 10);
    }
    return num;
};


// The DNA sequence is composed of a series of nucleotides abbreviated as 'A', 'C', 'G', and 'T'.

// For example, "ACGAATTCCG" is a DNA sequence.
// When studying DNA, it is useful to identify repeated sequences within the DNA.

// Given a string s that represents a DNA sequence, return all the 10 - letter - long sequences(substrings) that occur more than once in a DNA molecule.You may return the answer in any order.



var findRepeatedDnaSequences = function (s) {
    let seq = new Map();
    let curr = "";
    let repeated = [];

    for (let i = 0; i <= s.length; i++) {
        if (curr.length < 10) {
            console.log(curr);
            curr = curr + s[i];
        } else {
            console.log("hit");
            if (seq.has(curr) && seq.get(curr) === 1) {
                seq.set(curr, 2);
                repeated.push(curr);
            } else if (!seq.has(curr)) {
                seq.set(curr, 1);
            }
            curr = curr.slice(1) + s[i];
        }
    }
    return repeated;
};


// Given a string queryIP, return "IPv4" if IP is a valid IPv4 address, "IPv6" if IP is a valid IPv6 address or "Neither" if IP is not a correct IP of any type.

// A valid IPv4 address is an IP in the form "x1.x2.x3.x4" where 0 <= xi <= 255 and xi 
// cannot contain leading zeros.For example, "192.168.1.1" and "192.168.1.0" 
// are valid IPv4 addresses while "192.168.01.1", "192.168.1.00", and "192.168@1.1" 
// are invalid IPv4 addresses.
var validIPAddress = function (queryIP) {
    let nums = new Set();
    let v6 = new Set();
    nums.add("0"); nums.add("1"); nums.add("2"); nums.add("3"); nums.add("4"); nums.add("5"); nums.add("6"); nums.add("7");
    nums.add("8"); nums.add("9");

    v6.add("a"); v6.add("b"); v6.add("c"); v6.add("d"); v6.add("e"); v6.add("f"); v6.add("A"); v6.add("B"); v6.add("C"); v6.add("D");
    v6.add("E"); v6.add("F");; v6.add("0"); v6.add("1"); v6.add("2"); v6.add("3"); v6.add("4"); v6.add("5"); v6.add("6");
    v6.add("7"); v6.add("8"); v6.add("9");

    function valid4(text) {
        let count = 0;
        let i = 0;
        let curr = ""
        for (let i = 0; i < text.length; i++) {
            if (text[i] === ".") {
                count++;
                if (Number(curr) > 255) return "Neither";
                curr = ""
                i++;
            }
            if (curr === "" && text[i] === "0" && nums.has(text[i + 1])) return "Neither";
            if (!nums.has(text[i])) return "Neither";
            curr = curr + text[i];
        }
        if (count === 3 && Number(curr) < 256) return "IPv4"
        return "Neither"
    }

    function valid6(text) {
        let count = 0;
        let i = 0;
        let curr = ""
        for (let i = 0; i < text.length; i++) {
            if (text[i] === ":") {
                count++;
                if (curr.length > 4) return "Neither"
                curr = ""
                i++;
            }
            if (!v6.has(text[i])) return "Neither";
            curr = curr + text[i];
        }
        if (count === 7 && curr.length <= 4) return "IPv6"
        return "Neither"
    }

    let check = false;
    for (let i = 0; i < queryIP.length; i++) {
        if (queryIP[i] === ":") {
            check = "IPv4";
            return valid6(queryIP);
        }
    };
    if (!check) {
        return valid4(queryIP)
    }
};

// // Given an encoded string, return its decoded string.

// // The encoding rule is: k[encoded_string], where 
// the encoded_string inside the square brackets is being repeated exactly k times.
// Note that k is guaranteed to be a positive integer.

// // You may assume that the input string is always valid; there are no extra white spaces, 
// square brackets are well - formed, etc.Furthermore, you may assume that the original data 
// does not contain any digits and that digits are only for those repeat numbers, k.
// For example, 
// there will not be input like 3a or 2[4].

// // The test cases are generated so that the length of the output will never exceed 105.

var decodeString = function(s) {
    console.log(s)
    let decoded = "";
    let nums = new Set();
    nums.add("0")
    nums.add("1")
    nums.add("2")
    nums.add("3")
    nums.add("4")
    nums.add("5")
    nums.add("6")
    nums.add("7")
    nums.add("8")
    nums.add("9")
    let wrds = [];
    let rep = [];
    let solve = function(strArr, numArr) {
        console.log(numArr, strArr)
        let currNum;
        let currStr;
        let curr = "";
        while(strArr.length) {
            if(!numArr.length) {
                currNum = 1;               
            } else {
                currNum = numArr.pop();
            }
            currStr =  strArr.pop() + curr;
            curr = currStr;
            while(currNum > 1) {
                curr = curr + currStr;
                currNum--;
            }
        }
        return curr;
    }
    let openClose = 0;
    let opClo = new Map();
    opClo.set("[", 1);
    opClo.set("]", -1);
    for(let i = 0; i < s.length; i++) {
        if(opClo.has(s[i])) {
            openClose = openClose + opClo.get(s[i])
        };
        if(nums.has(s[i])) {
            let numCurr = "";
            while(nums.has(s[i])) {           
                numCurr = numCurr + s[i];
                i++;
            }
            i--;
            rep.push(parseInt(numCurr));
            continue;
        }
        if(!nums.has(s[i]) && !opClo.has(s[i])) {
            let wrdCurr = "";
            while(!nums.has(s[i]) && !opClo.has(s[i]) && i < s.length) {
                wrdCurr = wrdCurr + s[i];
                i++;
            }
            i--;
            wrds.push(wrdCurr);
            continue;
        }
        if(openClose === 0 && wrds.length) {
            decoded = decoded + (solve(wrds, rep));
            rep = [];
            wrds = [];

        }
    }
    if(wrds.length) {
        decoded = decoded + (solve(wrds, rep));
    }
    return decoded
};