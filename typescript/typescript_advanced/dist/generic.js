"use strict";
const cars = ["Ford", "Audi"];
const carsSecond = ["Ford", "Audi"];
const promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Promise resolved!');
    }, 2000);
});
const promiseSecond = new Promise((resolve) => {
    setTimeout(() => {
        resolve(23.456);
    });
});
promise.then((data) => {
    console.log(data.toLowerCase().trim().toUpperCase());
});
promiseSecond.then((data) => {
    console.log(data.toFixed(2));
});
function mergeObjects(a, b) {
    return Object.assign({}, a, b);
}
const mergeObject = mergeObjects({ name: "Nick" }, { age: 22 });
console.log(mergeObject);
function mergeObjectsGeneric(a, b) {
    return Object.assign({}, a, b);
}
const mergeObjectGeneric = mergeObjectsGeneric({ name: "Nick" }, { age: 22 });
const mergeObjectGeneric2 = mergeObjectsGeneric({ model: "Ford" }, { year: 2010 });
console.log(mergeObjectGeneric.name);
console.log(mergeObjectGeneric2);
//# sourceMappingURL=generic.js.map