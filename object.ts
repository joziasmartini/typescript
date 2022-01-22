class Employee { 
   name:string; 
   empId:string;  
} 

var display = function(obj: {name:string, empId:string}) { 
  console.log("Employee Name: "+obj.name);
  console.log("Employee EmpId: "+obj.empId);
} 

var obj:Employee = {name:"Jai", empId:"EMP024"};
display(obj);
