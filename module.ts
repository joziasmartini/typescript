// IShowDetails.ts
export interface IShowDetails { 
   display(); 
}

// Student.ts
import showDetails = require("./IShowDetails"); 
export class Student implements showDetails.IShowDetails { 
   public display() { 
      console.log("Student Details"); 
   } 
}
