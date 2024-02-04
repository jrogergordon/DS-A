let decode = function(code) {
    var fs = require("fs");
    var text = fs.readFileSync(code).toString('utf-8').split("\n");;
    let ans = [];
    for(let i = 0; i < text.length; i++) {
        text[i] = text[i].replace(`\r`, ''); 
        text[i] = (Buffer.from(text[i], 'base64').toString()); 
        ans.push(text[i]);
    }
    return ans.join(" ")
}
let p = decode("./encoded.txt");
console.log(p); 