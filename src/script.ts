//* Basic types
import './part-2/src/v1-module-config.js'
import './part-2/src/v2-union.js'
import './part-2/src/v3-type-vs-interface.js'
import './part-2/src/v5-special-types.js'
import './part-2/src/v6-type-assertion.js'
import './part-2/src/v7-narrowing.js'
import './part-2/src/v8-narrowing-cont.js'
import './part-2/src/v9-generic.js'
import './part-2/src/v10-promises.js'


let myString    : string    = "Ahmad Said";
let myNumber    : number    = 23501;
let myBoolean   : boolean   = true;
let mySymbol    : symbol    = Symbol();
let myBigInt    : bigint    = 2350n;
let myUndefined : undefined = undefined ;
let myNull      :null       = null;
let myEtc     : string  = "void,never,unknown,any";


//* Type safe function

const addTow = (a : number,b : number) : number => {
    return a + b

}
console.log(addTow(200,501));


//* Array and Tuple and readonly modifier

// const arr : Array<string> = ["Programming", "Hero"]



const array         : string   []              = ["Ahmad","Said"];
const numArray      : number   []              = [23501,23];
const dhakalatlLong : readonly [number,number] = [23.8103, 90.4125];



//* Optional Default and rest parameters (...args)

const concatName = (firstName: string, lastName?: string) => {
if (!lastName) {
    return firstName;
}
return firstName + " " + lastName;
};


const greetings = (fullName: string, greeting = "Hello") => {
console.log(greeting + " " + fullName);
};

greetings("Mir");

//* rest parameters (...args)

const sum = (...numbers: number[]) => {
return numbers.reduce((total, sum) => total + sum, 0);
};

sum(1, 2, 3, 4, 5, 6);

const logUserAction = (
...args: [name: string, age: number, isActive: boolean]
) => {
const [name, age] = args;

console.log(name + " is " + age);
};

logUserAction("Mir", 192, false);

//* Object type, type alias and interface

type Address = {
streetName: string;
holdingNumber: number;
};

type TUser = {
name: string;
age: number;
isActive: boolean;
action: () => void;
badges: string[];
address: Address;
};

interface IUser {
name: string;
age: number;
isActive: boolean;
action: () => void;
badges: string[];
}

const user: TUser = {
name: "Mir",
age: 123,
isActive: true,
action: () => console.log("Hello"),
badges: ["abc", "def"],
address: {
holdingNumber: 123,
streetName: "ABC",
},
};

// user.email = "mir@gmail.com";
// console.log(user.address);














