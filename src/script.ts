//* Basic types

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











