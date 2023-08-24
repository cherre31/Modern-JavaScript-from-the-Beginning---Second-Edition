const firstName = 'John';
const lastName = 'Doe';
const age = 30;

const person = {
    firstName,
    lastName,
    age,
}

console.log(person.age)

// Destructuring

const todo ={
    id:1,
    title: 'Take out trash',
    user:{
        name: 'John'
    },
}

const {id: todoID, title, user: {name}} = todo;

console.log(todoID);

// Destructuring arrays 
const numbers = [23,67,33, 49, 52];

const [first, second, ...rest] = numbers;

console.log(first, second, rest);

