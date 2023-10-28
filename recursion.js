
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
    let arrangeParen = (expr, i, leftCt, rightCt) => {
        if (i === expression.length) {
            results.push(eval(expr));
            return;
        } else {
            expr = expr + expression[i];
        }

    }
    let operators = new Set();
    operators.add("+");
    operators.add("-");
    operators.add("*");

    console.log(eval("(5+6) * 3"))
    console.log(!isNaN('1'))
};