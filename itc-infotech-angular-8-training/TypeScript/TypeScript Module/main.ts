import {dis1, display as obj1} from "./a";
import {dis2, display as obj2} from "./b";
import * as obj from './c';

dis1();
dis2();
obj1();
obj2();

obj.display1();
obj.display2();
obj.display3();
console.log(obj.a);
let emp = new obj.Employee();
emp.dis();