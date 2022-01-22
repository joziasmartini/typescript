namespace Validation {
    export interface StringValidator {
        isValid(s: string): boolean;
    }
 
    const lettersRegexp = /^[A-Za-z]+$/;
    const numberRegexp = /^[0-9]+$/;
 
    export class LettersOnlyValidator implements StringValidator {
        isValid(s: string) {
            return lettersRegexp.test(s);
        }
    }
 
    export class ZipCodeValidator implements StringValidator {
        isValid(s: string) {
            return s.length === 5 && numberRegexp.test(s);
        }
    }
}

let strings = ["You", "53454", "Hello"];
 
let validators: { [s: string]: Validation.StringValidator; } = {};
validators["ZIP code"] = new Validation.ZipCodeValidator();
validators["Letters only"] = new Validation.LettersOnlyValidator();

for (let s of strings) {
    for (let name in validators) {
        console.log(`"${ s }" - ${ validators[name].isValid(s) ? "Valid" : "Invalid" } ${ name }`);
    }
}
