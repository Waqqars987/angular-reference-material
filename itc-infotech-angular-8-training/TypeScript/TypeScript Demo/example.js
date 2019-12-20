"use strict";
var a = 10;
let b = 10;
let num = 100;
let stdNames = ["a", "b", 11];
let abc = [1, 2, 3, 4];
for (let i in abc) {
    console.log("Index " + i);
}
for (let i of abc) {
    console.log("Value " + i);
}
abc.forEach((i) => console.log(i));
function empInfo(id, fname, salary = 20000, age = 24) {
    return "Welcome " + fname;
}
console.log(empInfo(5, "Waqqar"));
console.log(empInfo(5, "Waqqar", 23333, 25));
function stdInfo(sId, sName, ...skill) {
    console.log(sId, sName);
    for (let i of skill) {
        console.log(i);
    }
}
stdInfo(1, "Ron", "C");
stdInfo(2, "Jon", "Java, C#");
let skillInfo = ["C", "Java", "JS"];
stdInfo(3, "W", ...skillInfo);
function fun1() {
    console.log("fun1()");
}
fun1();
let fun2 = () => {
    console.log("fun2()");
};
fun2();
function addNumber(a, b) {
    return a + b;
}
console.log(addNumber(10, 2));
let addNumber1 = (a, b) => a + b;
console.log(addNumber1(13, 4));
let numData = [1, 2, 3, 4, 5, 6];
numData.forEach((val) => val > 5 ? console.log(val) : null);
/* Javascript */
// function Person() {
//     this.pid = 100;
//     this.pName = "Ravi";
//     this.disInfo = function(){
//         console.log(this.pid, this.pName);
//     }
// }
// let p1 = new Person();
// p1.disInfo();
/*******************************************/
// class Person{
//     pId: number;
//     pName: string = "Waz";
//     constructor() {
//         this.pId = 0;
//         console.log("object created!");
//     }
//     disInfo(): void{
//         console.log("person function");
//         console.log(this.pId);
//         console.log(this.pName);
//     }
// }
// let p1 = new Person();
// p1.disInfo();
class Person {
    // pId: number;
    // pName: string;
    //constructor overloading isn't possible in TS
    constructor(pId, pName) {
        this.pId = pId;
        this.pName = pName;
        // this.pId = pId;
        // this.pName = pName;
        console.log("object created!");
    }
    disInfo() {
        console.log("person function");
        console.log(this.pId, this.pName);
    }
}
let p1 = new Person(2, "Waz");
p1.disInfo();
class Employee {
    constructor(_empId, _fName, _salary) {
        this._empId = _empId;
        this._fName = _fName;
        this._salary = _salary;
    }
    set empId(empId) {
        this._empId = empId;
    }
    set fName(_fName) {
        this._fName = _fName;
    }
    set salary(salary) {
        this._salary = salary;
    }
    get empId() {
        return this._empId;
    }
    get fName() {
        return this._fName;
    }
    get salary() {
        return this._salary;
    }
}
let emp1 = new Employee(100, "Waz", 20000);
emp1.empId = 200;
console.log(emp1.empId, emp1.fName, emp1.salary);
