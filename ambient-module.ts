// Ambient declaration files are saved with .d.ts extension

// CalcSum.js
var TestVar;  
(function (TestVar) {  
   var Calc = (function () { 
      function Calc() { 
      } 
      Calc.prototype.doSum = function (num1, num2) {
         return num1 + num2;
      }
   }
}

// Calc.d.ts
declare module TestVar { 
   export class Calc { 
      doSum(num1:number, num2:number) : number; 
   }
}

// CalcTest.ts
/// <reference path = "Calc.d.ts" /> 
var obj = new TestVar.Calc(); 
console.log(obj.doSum(10,20));
