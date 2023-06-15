

function findSmalllest(input){
    let smallest = input[2]
    for(let i = 0; i<input.length; i++){
        if(smallest > input[i]){ //12 > 12 false , 12>28 false, 12>33 false,12>8 true so 8>2 true so 2>4 false , 2>99 false
            smallest = input[i]
        }
    }
console.log(smallest);
}
findSmalllest([12,28,33,8,2,4,99])



