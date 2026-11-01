"use strict";
//* Basic types
let myString = "Ahmad Said";
let myNumber = 23501;
let myBoolean = true;
let mySymbol = Symbol();
let myBigInt = 2350n;
let myUndefined = undefined;
let myNull = null;
let myEtc = "void,never,unknown,any";
//* Type safe function
const addTow = (a, b) => {
    return a + b;
};
console.log(addTow(200, 501));
