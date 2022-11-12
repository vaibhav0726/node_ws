console.log("hello world!!");

function add(a, b) {
  return a + b;
}
console.log(add(1, 3));

// to check all the files and paths in the current workspace
console.log(process.argv);
// terminal :- node index.js 1 2
// output:- [
//   '/home/vaibhav/.nvm/versions/node/v18.10.0/bin/node',
//   '/home/vaibhav/nodejs_codingNinjas/node_ws/index.js',
//   '1',
//   '2'
// ]

//  to print two numbers given in argument
var args = process.argv.slice(2); // from [index, string length)
console.log(args); // [ '1', '2' ]
// printing it to add them. Before that converting given string argument to int using parseINt
console.log("Adding two numbers:-", add(parseInt(args[0]), parseInt(args[1])));
