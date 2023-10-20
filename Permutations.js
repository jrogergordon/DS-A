var letterCombinations = function (D) {
    if (D === "") {
        return [];
    }
    let combos = [];
    let phone = new Map();
    phone.set("2", "abc");
    phone.set("3", "def");
    phone.set("4", "ghi");
    phone.set("5", "jkl");
    phone.set("6", "mno");
    phone.set("7", "pqrs");
    phone.set("8", "tuv");
    phone.set("9", "wxyz");


    let digitsToLett = function (str, x) {
        if (str.length === D.length) {
            combos.push(str);
        } else {
            for (let i = 0; i < phone.get(D[x]).length; i++) {
                let curr = str + phone.get(D[x])[i];
                digitsToLett(curr, x + 1);
            }
        }
    }
    digitsToLett("", 0);
    return combos
};