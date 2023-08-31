function removeClearButton(){
    document.querySelector('#clear').remove();
}

function removeFirstItem(){
    const ul = document.querySelector('ul');
    const li = document.querySelector('li:first-Child');
    
    ul.removeChild(li);
}

// function removeItem(itemNumber) {
//     const ul = document.querySelector('ul');
//     const li = document.querySelector(`li:nth-Child(${itemNumber})`)

//     ul.removeChild(li);
// }

// function removeItem(itemNumber) {
//     const ul = document.querySelector('ul');
//     const li = document.querySelectorAll('li')[itemNumber-1];

//     ul.removeChild(li);
// }

// function removeItem(itemNumber){
//     const li = document.querySelectorAll('li');
//     li[itemNumber - 1].remove();
// }

const removeItem = (itemNumber) => document.querySelectorAll('li')[itemNumber - 1].remove();

removeClearButton();
// removeFirstItem();
removeItem(2);