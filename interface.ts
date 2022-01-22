interface IPerson { 
   firstName: string, 
   lastName: string, 
   sayHi: ()=>string 
} 
 
var customer:IPerson = { 
   firstName: "Victor",
   lastName: "Smith", 
   sayHi: ():string =>{return "Hi"} 
} 
 
console.log("Customer object details: ");
console.log(customer.sayHi()); 
console.log(customer.firstName); 
console.log(customer.lastName); 
 
 
var employee:IPerson = { 
   firstName: "Miguel",
   lastName: "Smith", 
   sayHi: ():string =>{return "Hello"} 
} 
 
console.log("Employee object details: );
console.log(employee.sayHi());
console.log(employee.firstName);
console.log(employee.lastName);
