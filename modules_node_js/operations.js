// using it in index.js file

// export is just an object with functions such as add, sub, multiply and divide
// this also provides functions outside of this file as well
module.exports.add = function(a,b){
    return a + b;
}

module.exports.multiply = function(a,b){
    return a * b;
}
// it does not work outside of the file
// var multiply = function(a,b){
//     return a * b;
// }