class Person { 
   name:string; 
 
   constructor(name:string) { 
      this.name = name; 
   }  
 
   display():void { 
      console.log("Person name: "+this.name);
   } 
} 
 
var obj = new Person("Amelia");
console.log("Person name: "+obj.name);  
obj.display();
