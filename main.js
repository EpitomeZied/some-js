const n = Number(require('fs').readFileSync(0, 'utf-8').trim());
// Print FizzBuzz / Fizz / Buzz / n based on divisibility.
console.log(n * (n + 1) / 2)