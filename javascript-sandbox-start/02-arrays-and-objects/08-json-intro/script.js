const post = {
    id:1,
    title: 'Post One',
    body: 'This is the body',
}

// Conver to JSON string
const str = JSON.stringify(post);

// Parse JSON
const obj = JSON.parse(str);

console.log(JSON.parse(str).id);

const posts = [
    {
        id:1,
        title: 'Post One',
        body: 'This is the body',
    },
    {
        id:2,
        title: 'Post Two',
        body: 'This is the body',
    }
]

const str2 = JSON.stringify(posts);

console.log(posts);