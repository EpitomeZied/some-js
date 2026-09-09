const n = Number(require('fs').readFileSync(0, 'utf-8').trim());
// Print FizzBuzz / Fizz / Buzz / n based on divisibility.
if(n%5 === 0 && n%3 === 0){
    console.log("FizzBuzz")
}

else if(n%3 === 0 ) {
    console.log("Fizz")
}
else if(n%5 === 0){
    console.log("Buzz")
}
else {
    console.log(n)
}