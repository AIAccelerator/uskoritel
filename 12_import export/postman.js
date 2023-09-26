import { Letter, Package } from "./mailbox.js";

let myLetter = new Letter();
let anotherLetter = new Letter();
let myPackage = new Package();

class Postman {

    constructor(letters, packages) {
        this.letters = letters;
        this.packages = packages;
    }

    deliver() {
       for (let myLetter of this.letters) {
            myLetter.deliver();
       }

       for (let myPackage of this.packages) {
            myPackage.deliver();
       }
    }
}

let postman = new Postman([myLetter, anotherLetter], [myPackage]);

postman.deliver();