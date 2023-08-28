function calculator(num1, num2, operator){
    switch(operator){
        case '+':
            return num1+num2;
        case '-':
            return num1-num2;
        case '*':
            return num1*num2;
        case '/':
            return num1/num2;
        default:
            return 'You did not enter a correct operator';
    }
}

console.log(calculator(5,2,'+'));
console.log(calculator(5,2,'-'));
console.log(calculator(5,2,'*'));
console.log(calculator(5,2,'/'));
console.log(calculator(5,2,'&'));