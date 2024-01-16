
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
            if (mapS1.get(arr[0]) != mapS2.get(arr[0])) {
                return false;
            }
        }
        return true;
    }

    for (let i = 0; i < s1.length; i++) {
        if (mapS1.has(s1[i])) {
            mapS1.set(s1[i], mapS1.get(s1[i]) + 1);
        } else {
            mapS1.set(s1[i], 1);
        }
    }

    for (let j = 0; j < s2.length; j++) {
        if (j + 1 > s1.length) {
            console.log(j, s1.length)
            console.log(mapS2)
            if (mapsEqual()) {
                return true;
            }
            let curr = s2[j - s1.length];
            if (mapS2.get(curr) > 1) {
                mapS2.set(curr, mapS2.get(curr) - 1);
            } else {
                mapS2.delete(curr)
            }
        }

        if (mapS2.has(s2[j])) {
            mapS2.set(s2[j], mapS2.get(s2[j]) + 1);
        } else {
            mapS2.set(s2[j], 1);
        }
    }
    console.log(mapS2)
    if (mapsEqual()) {
        return true;
    }
    return false;

}

// Given a string expression of numbers and operators, return all possible results from computing all the different possible ways to group numbers and operators.You may return the answer in any order.

// The test cases are generated such that the output values fit in a 32 - bit integer and the number of different results does not exceed 104.


var diffWaysToCompute = function (expression) {
    let operand = new Set();
    operand.add("*")
    operand.add("-")
    operand.add("+")
    let pairs = 0;
    for (let i = 0; i < expression.length; i++) {
        if (operand.has(expression[i])) {
            pairs++;
        }
    }

    let combos = [];

    function addParen(parenExpr, j, left, right, opCount) {
        console.log(parenExpr, j, left, right, opCount);
        if (operand.has(expression[j])) {
            opCount++;
            addParen(parenExpr + expression[j], j + 1, left, right, opCount);
        }

        if (left === pairs && right === pairs) {
            combos.push(eval(parenExpr));
            return;
        }

        if (!operand.has(expression[j]) && left < pairs) {
            while (left < pairs) {
                parenExpr = parenExpr + "("
                left++;
                addParen(parenExpr + expression[j], j + 1, left, right, opCount);
            }
        }

        if (!operand.has(expression[j]) && expression[j] && right < left) {
            let curr = ""
            while (right < left && opCount > 0) {
                curr = curr + ")"
                right++;
                opCount--;
                addParen(parenExpr + expression[j] + curr, j + 1, left, right, opCount);
            }
        }
    }
    addParen("", 0, 0, 0, 0);
    console.log(combos);
    return combos;
}; 



var minJumps = function (arr) {
    let min = 0;
    let dupes = new Map();
    for (let i = 0; i < arr.length; i++) {
        if (dupes.has(arr[i])) {
            let curr = dupes.get(arr[i]);
            curr.push(i);
            dupes.set(arr[i], curr)
        } else {
            dupes.set(arr[i], [i])
        }
    }
    let trav = new Set();


    let cloner = function (i, j) {
        let curr = dupes.get(arr[i]);
        if (i === arr.length - 1) {
            min = Math.min(j, min)
            return;
        }
        if (!trav.has(i)) {
            trav.add(i)
        } else {
            return;
        }
        cloner(i + 1, j + 1);
        cloner(i - 1, j + 1);

        if (curr.length > 1) {

            for (let k = 0; k < curr.length;) {
                if (i !== curr[k]) {
                    cloner(curr[k], j + 1)
                }
            }
            dupes.set(arr[i], []);
        }

    }
    cloner(0, 0)

};