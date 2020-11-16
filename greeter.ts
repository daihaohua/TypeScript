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

//第二种写法数组泛型
let boolArray:Array<boolean> = [true,false];
// console.log(stringArray,stringstring,boolArray);

//元祖
    //1
    let allArray:[number,string,number,boolean];
    allArray = [10.2035000,"上海",15,false];
    //2
    let tom: [string, number];
    tom = ['Tom', 25];
    tom.push('male');
    tom.push(30);
    console.log(tom);
    // 可以向里面添加string和number的值;

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
// console.log(ColorName);

 //常数枚举与普通枚举的区别是，它会在编译阶段被删除，并且不能包含计算成员。
 const enum Directions {
    Up,
    Down,
    Left,
    Right
}

let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];
console.log(directions);

// const enum Color {Red, Green, Blue = "blue".length};//Blue = "blue".length属于计算成员








//any  任意类型
let stre:any;
stre ="213";
stre = 123;
stre = true;

//asy  任意数组
let arr:any[]


//void  任意类型
// void和any正好相反,他代表的是没有任何类型,一般用在函数上面,代表没有返回值；
//声明一个void的变量只能给他设置为null何undefined;
// let und:number = undefined;
function logMag():void{
    console.log("我是void");
}
logMag();

//null和undefined
// 1.他是所有类型的子级，可以赋值给所有
// 2.
// let str10:string = null;


//never
    // 1.never类型表示那些用不存在的值的类型
        // a.抛出异常函数
        // b.不会有返回值的函数表达式
        // c.箭头函数表达式的返回值类型
    // 2.never是所有类型的子类型，也可以赋值给任何的类型
    // 3.没有类型是never的子类型，任何类型也不可以赋值给'never'类型(除了never本身之外)




//object
    //除了number ,string ,boolean ,symbol之外的其他类型；
    //可以接受null和undefined这两种数据类型



//类型断言
    let obj:any = "linkesdkajdl";

    //1.(<类型>变量)这就是类型断言格式
    //2.变量 as 类型
        // 好处是:自己给他固定是什么类型，就可以调用某个类型下面的方法;
    let str2:string =  (<string>obj).substr(0,3);
        //但是如果他是字符串你给他数字类型并调用数字的方法，编辑器不会报错，但编译时就会报错;
    // let str3:string =  (<number>obj).toFixed(2);




//var和let和const 的区别和js的语法一样;
//   注意传进来的形参名不能再函数中再次定义会报错;



//解构
    //定义枚举
    enum Sex{
        Nan,
        Nv
    }

    //定义接口
    interface Person{
        personName:string,
        personAge:number,
        personSex:Sex
    }

    //解构
    let person:Person = {personName:"豪华",personAge:15,personSex:10}

    let {personName,personAge,personSex} = person;
    console.log(personName,personAge,personSex)

    // let u: undefined = undefined;




    // function swap<T, U>(tuple: [T, U]):void {
    //     let num:number = tuple[0];
    //     console.log(num);
    // }
    
    // swap([7, 'seven']); // ['seven', 7

 function swap<T, U>(num10:T,str:U):void {
            let num15:T = num10
            
    }
    
    swap<number,string>(7,"15"); // ['seven', 7]



    function createArray<T>(length: number, value: T): Array<T> {
        let result: T[] = [];
        for (let i = 0; i < length; i++) {
            result[i] = value;
        }
        return result;
    }
    
    createArray<string>(3, 'x'); // ['x', 'x', 'x']



   





