const args = process.argv.slice(2);
function factorial(n) {
  if (n === isNaN ){
    return 1
  } else if ( n === 0 || n === 1) {
    return 1
  }
  else {
    return n * factorial(n - 1);
  }
}
const result = factorial(Number(args[0]));
console.log(result)