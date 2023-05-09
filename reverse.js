//reverse muss mit array 
//so string to array = split("")
const str = "ich habe mein daday sehr vermist";

function myFunction(input){
    
    
    const myArray= input.split(" ");
    const result =  myArray.map(d => {
        return d.split("").reverse().join("");
    });
    console.log(result.join(" "));

}

console.log(myFunction(str));