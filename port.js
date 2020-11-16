"use strict";
//接口
// 1.对数据格式的一种约束;
// 2.接口的作用就是为了这些类型命名和为你的代码或第三方代码定义的契约
//使用      使用定义的规范来设置参数
// let persons:Persons = {
//     Width:50,
//     Height:50,
//     Color:"white",
//     firstName:"豪华"
// }
// persons.firstName = "豪华1"; //再次改变只读属性就会报错
// TS ReadonlyArray<T> Array<T>
// let arr10:number[] = [1,2,3,4];
// 设置数组只读
// let ra:ReadonlyArray<number> = arr10;
// ra.push(10)  数组设置只读就不可以调用数组方法了，不能改变数组的值了;
// console.log(ra);
//额外的属性检查
// 1.第一种方法使用类型断言
//定义接口 相当于定义规范
// interface Persons1{
//     Width:number,//这是必传的
//     Height?:number,//加问号就是可选的,可传可不传
//     Color:string,
//     readonly firstName:string,// readonly是设置只读属性,第一次可以赋值,第二次就不可以改变了；
//     // [propName : string]:any //  表示定义了任意属性取string 类型的值(key是string类型,value是任意类型)
//     // 注意:一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集;否侧报错
// }
//使用      使用定义的规范来设置参数
// let persons1:Persons = {
//     Width:50,
//     Height:50,
//     Color:"white",
//     firstName:"豪华",
//     lastName:"新加的"//设置接口中里面没有的属性就会报错。
// } as Persons1; //使用类型断言直接告诉他他就是这个接口不需要检查;
// 2.第二种方法使用字符串的索引签名
// 任意属性 [ propName : 类型 ] : any 表示定义了任意属性取string 类型的值
// let persons2:Persons1 = {
//     Width:50,
//     Height:50,
//     Color:"white",
//     firstName:"豪华",
//     lastNames:"新加的"
// }
// 3.对象赋值
// TypeScript的类型检查是只检查一层的,他不会深入到第二层去检查的,所有可以用通过对象赋值的方式来解决;
// let  persons2open = {
//     Width:50,
//     Height:50,
//     Color:"white",
//     firstName:"豪华",
//     lastNames:"新加的"
// }
//  let persons2:Persons1 = persons2open;  
//  //函数类型
//     //定义函数接口
//     interface CompareFunc{
//         (first:number,last:number):boolean
//     }
//使用1
// let myCompare:CompareFunc = function(first:number,last:number):boolean{
//     return first>last;
// }
//使用2
// let myCompare:CompareFunc = function(a:number,b:number):boolean{
//     return a>b;
// }
//使用3
// let myCompare:CompareFunc = function(a,b):boolean{
//     return a>b;
// }
// myCompare(10,20)
//4.类类型(对es6的class的约束)
// interface Alarm {
//     alert(): void;//定义函数的返回类型
//     lightOn(): void;
//     lightOff(): void;
//     // color?:string
// }
// class Door {
// }
// class SecurityDoor extends Door implements Alarm {//遵守Alarm规范约束
//     alert() {
//         console.log('SecurityDoor alert');
//     }
//     lightOn(){
//         console.log('定义多个函数接口');
//     }
//     lightOff(){
//     }
// }
// class Car implements Alarm {  //遵守Alarm规范约束
//     alert() {
//         console.log('Car alert');
//     }
//     lightOn(){
//     }
//     lightOff(){
//     }
// }
// interface Hezi{
//     color:string,
//     width:number,
//     height:number
// }
// // let hezi:Hezi = {color:"red",width:10,height:10};//设置初始值;
// let hezi = {} as Hezi;//不需要设置初始值;
// interface Person {
//     name: string;
//     age: any;
//     sname:any;
//     [propName: string]: string | number;
// }
// let tom: Person = {
//     name: 'Tom',
//     age: 25,
//     gender: 'male',
//     sname:"131"
// };
// function reverse(x: number): number;
// function reverse(x: string): string;
// function reverse(x: number | string): number | string {
//     if (typeof x === 'number') {
//         return Number(x.toString().split('').reverse().join(''));
//     } else if (typeof x === 'string') {
//         return x.split('').reverse().join('');
//     }
// }
// function lastIndexOf(arr:any[], searchValue:number, begin:number) {
//     let beginNum:number = begin ? arr.length -1 - begin : arr.length-1;
//     for (var i:number = beginNum; i >= 0; i--) {
//         if (arr[i] === searchValue) {
//             return i;
//         }
//     }
//     return -1;
// }
// console.log(lastIndexOf([1, 2, 3, 4, 6], 2,3));
