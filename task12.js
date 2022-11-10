// 'this' keyword in JS

// Different usage of 'this' keyword 

// 1. Use of this for acessing global items.
// 2. Use of this inside an object.
// 3. Use of this inside a method.
// 4. Use of this inside a function.
// 5. call funcion to rescue.
// 6. Use of this inside a constructor.
// 7. Use of this inside a class.

'use strict';
// // 1. Use of this for acessing global items.
// this.table = 'window table';
// console.log(window.table);

// // 2. Use of this inside an object.
// this.garage = {
//     table: 'garage table',
//     cleanTable() {
//         console.log(`cleaning ${this.table}`)
//     }
// };

// // 3. Use of this inside a method.
// let johnRoom = {
//     table: 'johns table',
//     cleanTable() {
//         console.log(`cleaning ${this.table}`)
//     }
// };

// console.log(johnRoom.table);

// johnRoom.cleanTable();
// this.garage.cleanTable();



// //____________________________________
// // 4. Use of this inside a function.
// const cleanTable = function(soap) {
//     console.log(`cleaning ${this.table} using ${soap}`);
// }
// // 5. call funcion to rescue.
// cleanTable.call(this, 'some soap.');
// cleanTable.call(this.garage, 'some soap.');
// cleanTable.call(johnRoom, 'some soap.');


// // ____________________________________
// // 6. Use of this inside a constructor.

// let createRoom = function(name){
//     this.table = `${name} table`;
// }

// createRoom.prototype.cleanTable = function(soap) {
//     console.log(`cleaning ${this.table} using ${soap}`);
// }

// const jillsRoom = new createRoom('jill');
// const johnsRoom = new createRoom('john');

// jillsRoom.cleanTable('some soap');
// johnsRoom.cleanTable('some soap');


// // ____________________________________
// // 7. Use of this inside a class.


// class creteRoom {
//     constructor(name) {
//         this.table = `${name}s table`;
//     }
//     cleanTable(soap) {
//         console.log(`cleaning ${this.table} using ${soap}`);
//     }
// }

// const JillsRoom = new creteRoom('JILL');
// const JohnsRoom = new creteRoom('JOHN');

// JillsRoom.cleanTable('some soap');
// JohnsRoom.cleanTable('some soap');







// 3. Design pattern problem - How will you design a Student class which stores the name , age , phone number, 
// board marks of each student. Make a constructor to initialize the values.
class Student {
    static count=0;  // static variable to call 
    constructor(name, age, phone, marks) {
        this.name = name;
        this.age = age;
        this.phone = phone;
        this.marks = marks;
        this.cnt++;
        Student.countStudents();
    }

    eligibleOrNot(){
        if(this.marks >= 40){
            console.log(` ${this.name} is eligible for admission at YMCAUST.`)
        }
        else {
            console.log(` ${this.name} is not Eligible.`)
        }
    }

    static countStudents() {
        return (Student.count++); //this is how u access static variable
    }
}
// objects
const s1 =  new Student('Rajat', 26, 9541485420, 65.7);

// 4.Write a function to check whether the student is egligible or not for college. 
// If board marks > 40 -> egligible , if less than 40 -> not egligible.Write a function to check this
s1.eligibleOrNot();

// 5. Create 5 students with different names and age.
const s2 =  new Student('Rishi', 23, 9041485478, 30.7);
const s3 =  new Student('Shweta', 22,8936437923, 80.7);
const s4 =  new Student('Sumit', 25, 9148548739, 70.7);
const s5 =  new Student('Anjali', 23, 9036286382, 95.7);

// 6. Write a function which keep track of the number of students created. 
// Have you heard of static variables. Leverage that now.

console.log(Student.countStudents());
