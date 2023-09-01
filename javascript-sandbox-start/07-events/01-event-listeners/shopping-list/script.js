const clearBtn = document.querySelector('#clear');

function onClear() {
    const itemList = document.querySelector('ul');
    const items = itemList.querySelectorAll('li');

    // itemList.innerHTML = '';

    // items.forEach((item) => item.remove());

    while(itemList.firstChild){
        itemList.removeChild(itemList.firstChild)
    }
}

// adding events to javascript in the HTML file is not recommened

// JavaScript Event Listener

// clearBtn.onclick = function(){
//     alert('Clear Items');
// }

// clearBtn.onclick = function(){
//     console.log('Clear Items');
// }

// addEventListener() you can use as many addEventListeners as you want with the same name as long as they do different things
// you should also make sure not to use parentheis when calling a function because it will execute immediately
// clearBtn.addEventListener('click', () => alert('Clear Items'));
clearBtn.addEventListener('click', onClear);

// setTimeout(() => clearBtn.removeEventListener('click', onClear), 5000);

// setTimeout(()=> clearBtn.click(), 5000);

