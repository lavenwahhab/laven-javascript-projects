//sorting string
//sorting mus mit Array
const str = "I MISS MY DADY";

function myfunction(input){

    const myArray=input.split(" ");
 myArray.sort((a,b) => {
    return a.length-b.length;
});
return myArray.join(" ");
}
console.log(myfunction(str));