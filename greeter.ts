// function greeter(person) {
//     return "Hello, " + person;
// }

// let user = "Jane User";
// //定义数据类型
// let isDone: boolean = false;
// document.body.innerHTML = greeter(user);
// function alertNum():void{
//     console.log("我是一个空函数");
// } 
// let unusable: void = alertNum;
// let u: void;
// let anyThing: any = 'hello';
// console.log(anyThing.myName);
// console.log(anyThing.myName.firstName);
// let something;
// something = 'seven';
// something = 7;

// something.setName('Tom');


//定义数组
//第一种写法
let stringArray:number[] = [1,2,3];
let stringstring:string[] = ["1","2","3"];

//第二种写法
let boolArray:Array<boolean> = [true,false];
// console.log(stringArray,stringstring,boolArray);

//元祖
let allArray:[number,string,number,boolean];
allArray = [10.2035000,"上海",15,false];

// allArray[0]这样可以直接知道他是什么类型并直接调用这个类型的方法;
let str = allArray[0].toFixed(2);
console.log(allArray,str)


//定义枚举
// 相对于定义一个对象从对象中取值
enum Color{
    Red = 10,
    Greeter,
    Black,
    White
}
//使用枚举
let color:Color = Color.Black;
let color1:Color = Color.Red;
// console.log(color,color1);//2  0因为不给值的话就是从0 1 2 3 4 ....来给值的;
// console.log(color,color1);//12 10

//枚举通过值拿到名字
let ColorName:string = Color[12];
console.log(ColorName);


