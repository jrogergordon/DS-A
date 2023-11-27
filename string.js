
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