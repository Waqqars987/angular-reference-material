var a = 10;
let b = 10;
let num: number = 100;
let stdNames: any[] = ["a", "b", 11];

let abc: Array<number> = [1, 2, 3, 4];

for (let i in abc) {
    console.log("Index " + i);
}

for (let i of abc) {
    console.log("Value " + i);
}

abc.forEach((i: number) => console.log(i));

function empInfo(id: number, fname: string, salary: number = 20000, age: number = 24): string {
    return "Welcome " + fname;
}
console.log(empInfo(5, "Waqqar"));
console.log(empInfo(5, "Waqqar", 23333, 25));

function stdInfo(sId: number, sName: string, ...skill: string[]) {
    console.log(sId, sName);
    for (let i of skill) {
        console.log(i)
    }
}

stdInfo(1, "Ron", "C");
stdInfo(2, "Jon", "Java, C#");

let skillInfo: string[] = ["C", "Java", "JS"];
stdInfo(3, "W", ...skillInfo);

function fun1() {
    console.log("fun1()");
}
fun1();

let fun2 = () => {
    console.log("fun2()");
}
fun2();

function addNumber(a: number, b: number) {
    return a + b;
}
console.log(addNumber(10, 2));

let addNumber1 = (a: number, b: number) => a + b;
console.log(addNumber1(13, 4));
let numData: number[] = [1, 2, 3, 4, 5, 6];
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
    constructor(public pId: number, private pName: string) {
        // this.pId = pId;
        // this.pName = pName;
        console.log("object created!");
    }
    disInfo(): void {
        console.log("person function");
        console.log(this.pId, this.pName);
    }
}
let p1 = new Person(2, "Waz");
p1.disInfo();

// class Employee{
//     constructor(private _empId: number, private _fName: string, private _salary: number) { }
//     set empId(empId: number) {
//         this._empId = empId;
//     }
//     set fName(_fName: string) {
//         this._fName = _fName;
//     }
//     set salary(salary: number) {
//         this._salary = salary;
//     }

//     get empId():number {
//         return this._empId;
//     }
//     get fName():string {
//         return this._fName;
//     }
//     get salary():number {
//         return this._salary;
//     }

// }
// let emp1 = new Employee(100, "Waz", 20000);
// emp1.empId = 200;
// console.log(emp1.empId,emp1.fName,emp1.salary);

// Single Inheritance
class Employee {
    constructor(private empId: number, private empName: string, private empSalary: number) { }
    dis1(): void {
        console.log("dis1()-Employee method", this.empId, this.empName, this.empSalary);
    }
}
class Manager extends Employee {
    constructor(empId: number, empName: string, empSalary: number, private numberOfEmp: number) {
        super(empId, empName, empSalary);
    }

    dis2(): void {
        console.log("dis2()-Manager method", this.numberOfEmp);
    }
}
let m1 = new Manager(1, "Was", 12121, 3);
m1.dis1();
m1.dis2();

// Inheritance with method overriding...
// class Bike{
//     speed(): void{
//         console.log("60 km/hr");
//     }
// }
// class Pulsar extends Bike{
//     speed(): void{
//         console.log("90 km/hr");
//     }
//     color(): void {
//         console.log("Black");
//     }
// }
// let pu = new Pulsar();
// pu.color();
// pu.speed();

// Abstract class...
// abstract class Bike{
//     abstract speed(): void;
// }
// class Pulsar extends Bike{
//     speed(): void{
//         console.log("90 km/hr");
//     }
//     color(): void {
//         console.log("Black");
//     }
// }
// let pu = new Pulsar();
// pu.color();
// pu.speed();

// interface Abc{
//     empId: number;
//     dis1(): void;
// }
// class Xyz implements Abc{
//     empId: number = 10; //redeclaration is mandated as well as function override
//     dis1(): void{
//         console.log("Hello");
//     }
// }
// let ob = new Xyz();
// ob.dis1();

let emp1 = {
    "id": 100,
    "name": "Ravi",
    "salary": 20000,
    "address": {
        "city": "Kolkata"
    },
    "Skillset": ["C", "Java"]
};
console.log(emp1.id, emp1.name, emp1.salary);

interface EmpInfo {
    id: number,
    name: string,
    salary: number,
    age?: number
}
let emp2: EmpInfo = {
    "id": 100,
    "name": "Ravi",
    "salary": 20000
}
console.log(emp2);

let emp3: EmpInfo = {
    "id": 100,
    "name": "Ravi",
    "salary": 20000,
    "age": 25
}
console.log(emp3);

let myName: string = "Waqqar";
let info: string = `
Welcome ${myName}
`;
console.log(info);