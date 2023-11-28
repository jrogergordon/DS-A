
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

// Given two non - negative integers num1 and num2 represented as strings,
//  return the product of num1 and num2, also represented as a string.

//     Note: You must not use any built -in BigInteger library or convert the inputs to
//  integer directly.
var multiply = function (num1, num2) {
    if (num1 === 0 || num2 === 0) {
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

    let num1Arr = [];
    let num2Arr = [];


    for (let k = 0; k < num1.length; k++) {
        num1Arr.push(num1[k]);
    }

    for (let l = 0; l < num2.length; l++) {
        num2Arr.push(num2[l]);
    }


    let count1 = 1;
    let num = 0;
    console.log(num1Arr);
    console.log(num2Arr);
    for (let i = num1Arr.length - 1; i >= 0; i--) {
        let count2 = 1;
        let curr1 = num1Arr[i] * count1;
        for (let j = num2Arr.length - 1; j >= 0; j--) {
            let curr2 = num2Arr[j] * count2;
            num = num + (curr2 * curr1);
            console.log(num);
            count2 = count2 * 10;
        }
        count1 = count1 * 10;
    }
    return `${num}`;

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