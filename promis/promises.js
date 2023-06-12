let stocks = {
    Fruites: ["strawberry", "banana", "apple", "bluberry"],
    Liquid: ["water", "ice"],
    holder: ["cone" , "cup", "stick"],
    toppings: ["chocolate", "mango"]

}
let is_shop_open = false //here we mean our shopping is open to get orders
function orderIce(time, work){
//here inorder to get both time and work we dont need to write two function,
//so we will use Promis
    return new Promise( (resolve , reject) => {
        if(is_shop_open){
            setTimeout( () => {
                resolve(work())
            }, time)
           
        }
        else{
            reject(console.log("our shop is closed"))
        }
    })
}
orderIce(2000, ()=>console.log(`${stocks.Fruites[0]} was selected`))
//in order to add some more orders
    .then(() => { return orderIce(0000, () => console.log("Production has started"))})
    .then(() => { return orderIce(0000, () => console.log("let i scut it"))})
    .then(() => { return orderIce(1000, () => console.log(`${stocks.toppings[0]} was selected`))})
    
    .catch(() => { console.log("customer left"); })//in case our shop is false

    .finally(() => { console.log("day end it");})//in both case will work