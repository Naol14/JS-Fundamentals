const args = Process.argv.slice(2)
if (args.length === 0) {
  console.log('Hello, who are you?');
} else {
  const name = args[0];
  console.log(`Nice to meet you, ${name}!`);
}