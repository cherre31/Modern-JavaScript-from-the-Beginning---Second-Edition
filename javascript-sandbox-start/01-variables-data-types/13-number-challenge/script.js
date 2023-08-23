const x = Math.floor(Math.random() * 101);
const y = Math.floor(Math.random() * 51);

let sumOutput = x +' + '+ y + ' = ' + (x+y);
let differenceOutput = x +' - '+ y + ' = ' + (x-y);
let productOutput = x +' * '+ y + ' = ' + (x*y);
let quotientOutput = x +' / '+ y + ' = ' + (x/y);
let rmOutput = x +' % '+ y + ' = ' + (x%y);

console.log(sumOutput);
console.log(differenceOutput);
console.log(productOutput);
console.log(quotientOutput);
console.log(rmOutput);