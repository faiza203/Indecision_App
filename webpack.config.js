const path = require("path");
console.log(module.exports.output);
module.exports ={
    entry : "./JS/app.js",
    output: {
        path: path.join(__dirname , "JS/Src"),
        filename : "bundle.js"
    }
}