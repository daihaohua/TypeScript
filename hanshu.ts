//  function intersection(...intersectionArray:any[]):any{
//      let obj:any = {};
//     for(let item of  intersectionArray){
//         for(let item1 of item){
//             if( obj[item1]){
//                 obj[item1] ++;
//             }else{
//                 obj[item1] = 1;
//             }
//         }
//     }
//     for(let item2 in obj){
//         if(! (obj[item2]>=intersectionArray.length)){
//             delete obj[item2];
//         }
//     }
//     return Object.keys(obj);

// }
// console.log(intersection([2, 1], [4, 2,1], [1, 2]));
// [1,2]



// function drop(arr:any[],num:number){
//     let newArray:any[] = [];
//    for(let i =num,arrLength=arr.length;i<arrLength;i++){
//     newArray.push(arr[i]);
//    }
//    return newArray;
// }   

// console.log(drop([1,2,3,4,5,6],3));


function dropRight(arr:any[],num:number){
    let newArray:any[] = [];
   for(let i =0,arrLength=num;i<arrLength;i++){
    newArray.push(arr[i]);
   }
   return newArray;
} 


console.log(dropRight([1,2,3,4,5,6],3));


interface CreateArrayFunc {
    <T>(length: number, value: T): Array<T>;
}

let createArray1: CreateArrayFunc;
createArray1 = function<T>(length: number, value: T): Array<T> {
    let result: T[] = [];
    // for (let i = 0; i < length; i++) {
    //     result[i] = value;
    // }
    return []
    // return result;
}

createArray(3, 'x'); // ['x', 'x', 'x']


interface Info{
    name:string
    age:number
}
let obj12:Info = {
    name:"戴豪华",
    age:15
}



interface Innfo{
    name:string,
    age:number
}

let info2:Innfo ={
    name:"12",
    age:12,
    // info:"26"
} 




