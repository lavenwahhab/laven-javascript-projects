//inorder to write better way than promises we use Async

let stocks = {
    Fruites: ["strawberry", "banana", "apple", "bluberry"],
    Liquid: ["water", "ice"],
    holder: ["cone" , "cup", "stick"],
    toppings: ["chocolate", "mango"]

}
let is_shop_open = true
//in this example we create a function just for setting time
function time(ms){
    return new Promise((resolve, reject) => {
       if(is_shop_open){
        setTimeout(resolve , ms)
       }
       else
       reject(console.log('shop is closed'))
    })
}

async function kitchen() {
    try {
        await time(2000)
        console.log(`${stocks.Fruites[0]} was selected`);

        await time(0000)
        console.log('start the production');

        await time(2000)
        console.log('cut the fruites');
    } catch (error) {
        console.log('customer left', error)
    }
    finally {
        console.log('day ended, shop is closed');
    }
}
kitchen()

//another example when u need to call somthing outside kitchen
// let outside_kitchen = () => {
//     return new Promise((resolve, reject) => {
//     setTimeout(() => {
//     resolve(console.log("please tell me your order"))
// },3000)
//     })
// }

// async function kitchen(){
//     console.log('task1');
//     console.log('task 2');
//     await outside_kitchen()
//     console.log('task 3');
// }
// kitchen()
// console.log('ofcourse, there is alot of athor works');