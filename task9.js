// Call, Apply and Bind methods


// Deliverable

// 1.Write a function and use 'call' to call the function

// object creation
let obj = {
    fname: "Rajat",
    lname: "Baudh",
   
}
let fullname= function (hometown,state){
    console.log(this.fname + " "+ this.lname +" from "+ hometown+ ", "+state)
}

// call Method
fullname.call(obj, "Panipat", "Haryana");

let obj2 = {
    fname: "Rahul",
    lname: "Kripa",
}


// 2.Write a program using apply
// Apply method
fullname.apply(obj2, ["Sarai-kaalekhan", "Delhi"]);


// 3.Write a program using Bind method
// Bind method
let myName = fullname.bind(obj, "gurgaon", "Haryana");
console.log(myName);
myName();


// Create a new object called Student with age 20 , write a function which prints the age of the student from the student object.
// Dont pass in args. Read from 'this' and use BIND
let Student = {
    fname: "Rudra",
    lname: "Poriya",
    Age: 5 
}

let printFullname = function (){
    console.log(this.fname +" "+ this.lname +" and age is "+ this.Age)
}
let newboy = printFullname.bind(Student);
newboy();




