
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



/**
 * @param {string} queryIP
 * @return {string}
 */
var validIPAddress = function (queryIP) {
    let nums = new Set();
    let v6 = new Set();
    nums.add("0"); nums.add("1"); nums.add("2"); nums.add("3"); nums.add("4"); nums.add("5"); nums.add("6"); nums.add("7");
    nums.add("8"); nums.add("9");

    v6.add("a"); v6.add("b"); v6.add("c"); v6.add("d"); v6.add("e"); v6.add("f"); v6.add("g"); v6.add("h"); v6.add("i"); v6.add("j");
    v6.add("k"); v6.add("l"); v6.add("m"); v6.add("n"); v6.add("o"); v6.add("p"); v6.add("q"); v6.add("r"); v6.add("s"); v6.add("t");
    v6.add("u"); v6.add("v"); v6.add("w"); v6.add("x"); v6.add("y"); v6.add("z"); v6.add("A"); v6.add("B"); v6.add("C"); v6.add("D");
    v6.add("E"); v6.add("F"); v6.add("G"); v6.add("H"); v6.add("I"); v6.add("J"); v6.add("K"); v6.add("L"); v6.add("M"); v6.add("N");
    v6.add("O"); v6.add("P"); v6.add("Q"); v6.add("R"); v6.add("S"); v6.add("T"); v6.add("U"); v6.add("V"); v6.add("W"); v6.add("X");
    v6.add("Y"); v6.add("Z");

    function valid4(text) {
        let count = 0;
        let i = 0;
        while (i < text.length) {
            console.log(i, "hi");
            let curr = "";
            if (text[i] === "0" && text[i + 1] !== "." && text[i + 1]) {
                console.log("yeet")
                i = text.length;
                return "Neither"
            }
            while (text[i] !== "." && text[i]) {
                if (!nums.has(text[i]) && text[i]) {
                    console.log("meat")
                    i = text.length;
                    return "Neither";
                }
                curr = curr + text[i]
                i++;
            }
            count++;
            if (text[i + 1]) {
                i++;
            }
            curr = Number(curr);
            if (curr > 255 && curr >= 1) {
                console.log("2")
                i = text.length;
                return "Neither";
            }
            console.log(i, text[i] === ".", !text[i + 1])
            if (text[i] === "." && !text[i + 1]) {
                i++;
                return "Neither";
            }
            if (i === text.length - 1) {
                i++;
            }
        }
        if (!count === 4) {
            return "Neither";
        }
        return "IPv4"
    }

    function valid6(text) {
        let count = 0;
        let i = 0;
        while (i < text.length) {
            let curr = "";
            while (text[i] !== ":" && text[i]) {
                console.log(i);
                if (!nums.has(text[i]) && !v6.has(text[i]) && text[i]) {
                    console.log("hit1");
                    i = text.length;
                    return "Neither";
                }
                if (text[i]) {
                    curr = curr + text[i]
                }

                if (curr.length > 4) {
                    console.log("hit2", curr)
                    i = text.length;
                    return 'Neither';
                }
                i++;
            }
            count++

            if (text[i] !== ":" && text[i]) {
                console.log("hit3");
                i = text.length;
                return "Neither"
            } else if (text[i] === ":" && text[i + 1]) {
                i++;
            } else if (text[i] === ":" && !text[i + 1]) {
                i++;
                return "Neither";
            }
        }
        if (!count === 8) {
            return "Neither";
        }
        console.log(count)
        return "IPv6"
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