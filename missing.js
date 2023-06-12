 function myFunction(arr){

     let newArray = [];

     let minNum = Math.min(...arr);
     let maxNum = Math.max(...arr);

     for(let i = minNum ; i < maxNum; i++)
     {
         if(arr.indexOf(i) < 0){ //indexOf return its possition,in this case return -1 when value not exsit so the condition will be true.
             newArray.push(i);
         }
    
     }
     return newArray;
 }

 //console.log([1,2,5,4,8,9,10]);
 console.log(myFunction([1,2,5,4,8,9,10]));
//this way only between (1-10)
// function missingNums(arr) {
// 	arr.sort();
// 	for(i = 1; i <= 10; i++) {
// 		if (!arr.includes(i)) {
// 			return i
// 		}
// 	}
// 	return i
// }
