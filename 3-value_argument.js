const args = process.argv.slice(2);
if (args === 0) {
  console.log('No arguments');
} else {
  console.log(`${args[0]}`);
}