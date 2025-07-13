const args = process.argv.slice(2);
function add(a, b) {return Number(a) + Number(b);} ; 

const result = add(args[0], args[1]);
console.log(result)

