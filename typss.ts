// console.log('Hello from ts');

let myString:string;

let myNum:number;

let myBool:boolean;
let myVar:any;

myString='Hello World';

myNum=22;

myBool=true;

myVar=5;

// let strArr:string[];
// let numArr:number[];
// let boolArr:boolean[];


let strArr:Array<string>;
let numArr:Array<number>;
let boolArr:Array<boolean>;

let strNumTuple:[string,number];

console.log(myBool);

console.log(myNum);

console.log(myString);
console.log(myVar);
strArr=['Hello','World'];
numArr=[1,2,3]
boolArr=[true,false,true];
console.log(numArr);
console.log(boolArr);

strNumTuple=['Hello',23];
console.log(strNumTuple);

let myVoid:void=undefined;
let myNull:null=null;
let myUndefined:undefined=null;

console.log(myVoid);