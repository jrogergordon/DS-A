
// We build a table of n rows(1 - indexed).We start by writing 0 in the 1st row.
// Now in every subsequent row, 
// we look at the previous row and replace each occurrence of 0 with 01, 
// and each occurrence of 1 with 10.

var kthGrammar = function (n, k) {

    let findKth = (x, str) => {
        let bigStr = [];
        if (k === 1) {
            return '0';
        } else {
            if (x === 1) {
                bigStr.push('0');
            } else {
                for (i = 0; i < str.length; i++) {
                    if (str[i] === '0') {
                        bigStr.push('0');
                        bigStr.push('1');

                    } else {
                        bigStr.push('1');
                        bigStr.push('0');
                    }

                }
            }
        }

        if (x === n) {
            ;
            return bigStr[k - 1];
        }
        return findKth(x + 1, bigStr);
    }
    return findKth(1, [])
}

var kthGrammar = function (n, k) {
    if (n === 1) return 0;
    let length = 1 << (n - 2);
    if (k <= length) return kthGrammar(n - 1, k);
    else return 1 - kthGrammar(n - 1, k - length);
};



// Given a string expression of numbers and operators, 
// return all possible results from computing all the different 
// possible ways to group numbers and operators.
// You may return the answer in any order.

// The test cases are generated such that 
// the output values fit in a 32 - bit integer and 
// the number of different results does not exceed 104.


var diffWaysToCompute = function (expression) {
    let results = [];
    let arrangeParen = (expr, i, left, right) => {
        if (i === expression.length) {
            expr = expr + ")";
            results.push(eval(expr));
            return;
        } else {
            if (operators.has(expression[i])) {
                expr = expr + expression[i];
                arrangeParen(expr, i + 1, left, right);
            } else {
                if (left > 0) {
                    left--
                    epxr = expr + "(";
                }
            }
        }

    }
    let operators = new Set();
    operators.add("+");
    operators.add("-");
    operators.add("*");
    opCount = 0;
    for (let i = 0; i < expression.length; i++) {
        if (operators.has(expression[i])) {
            opCount++;
        }
    }
    letfCt = opCount;
    rightCt = 0;
    let crossedCt = 0;
    arrangeParen("(", 0, leftCt, rightCt)

    console.log(eval("(5+6) * 3"))
    console.log(!isNaN('1'))
    return results;
};




// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

// In other words, return true if one of s1's permutations is the substring of s2.

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    let mapS1 = new Map();
    let mapS2 = new Map();

    let mapsEqual = function () {
        if (mapS1.size !== mapS2.size) {
            return false;
        }
        for (arr of mapS1) {
            if (mapS1.get(arr[1]) !== mapS2.get(arr[1])) {
                return false;
            }
            return true;
        }

    }

    for (let i = 0; i < s1.length; i++) {
        if (mapS1.has(s1[i])) {
            mapS1.set(s1[i], mapS1.get(s1[i]) + 1);
        } else {
            mapS1.set(s1[i], 1);
        }
    }
    for (let j = 0; j < s2.length; j++) {
        if (mapS1.has(s2[j])) {
            if (mapS2.has(s2[j])) {
                mapS2.set(s2[j], mapS1.get(s2[j]) + 1)
            } else {
                mapS2.set(s2[j], 1)
            }
        } else {
            if (mapsEqual()) {
                return true;
            } else {
                mapS2 = new Map();
            }
        }

    }
    if (mapsEqual()) {
        console.log(mapS1, mapS2)
        console.log("hi")
        return true;
    }
    return false;

}