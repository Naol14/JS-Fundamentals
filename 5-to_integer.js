const arg = process.argv[2];
const intArgs = parseInt(arg, 10);
if (isNaN(intArgs)) {
  console.log('Not a number');
} else {
  console.log(`My number: ${intArgs}`);
}

