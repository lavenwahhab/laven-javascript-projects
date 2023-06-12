const array = [
    {title: 'Post One', body: 'This is post One'},
    {title: 'Post Two', body: 'This is post two'}
]

let output = ''
function getPosts(){
    setTimeout( () => {
        array.forEach((x) => {
            output += `<li>${x.title}</li>`
        })
        document.body.innerHTML = output
    }, 1000)
}
function createPost(y, cb){
    setTimeout( () => {
        array.push(y)
        cb();
    }, 2000)
}

//getPosts()
createPost({title: 'Post Three', body: 'This is post three'},getPosts)

//To Use two function inside each other we use callback
//callback is relationship between two functions.
//but if we have too many relationship between functions,it will make a hell ..
//thats why we use Promises

//another simple example of callback
function one(cb){
    console.log("'step one'");
    cb() //our function run according to this call
}

function two(){
    console.log("step Two");
}
one(two)