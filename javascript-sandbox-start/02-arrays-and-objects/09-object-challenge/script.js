// Step 1
const library = [
    {title: 'Book1', author: 'Christian', status:{own: true, reading: false, read: false}},
    {title: 'Book2', author: 'Jason', status:{own: true, reading: false, read: false}},
    {title: 'Book3', author: 'Bob', status:{own: true, reading: false, read: false}}
]

// Step 2
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

// Step 3
const {title: firstBook} = library[0];

// Step 4
const libraryJSON =  JSON.stringify(library);

console.log(libraryJSON);
