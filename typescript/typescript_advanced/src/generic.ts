const cars: string[] = ["Ford", "Audi"];
const carsSecond: Array<string> = ["Ford", "Audi"];

// ==================

const promise = new Promise<string>((resolve) => {
    setTimeout(() => {
        resolve('Promise resolved!');
    }, 2000);
});

const promiseSecond: Promise<number> = new Promise((resolve) => {
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

// ==================

function mergeObjects(a: object, b: object) {
    return Object.assign({}, a, b);
}

const mergeObject = mergeObjects({ name: "Nick" }, { age: 22 });
console.log(mergeObject);

// ===>

function mergeObjectsGeneric<T extends object, R extends object>(a: T, b: R): T & R {
    return Object.assign({}, a, b);
}

const mergeObjectGeneric = mergeObjectsGeneric({ name: "Nick" }, { age: 22 });
const mergeObjectGeneric2 = mergeObjectsGeneric({ model: "Ford" }, { year: 2010 });
//const mergeObjectGeneric3 = mergeObjectsGeneric("aaa", "bbb"); error, because not object type

console.log(mergeObjectGeneric.name);
console.log(mergeObjectGeneric2);
//console.log(mergeObjectGeneric3);

// ================

function withCount<T>(value: T): {value: T, count: string} {
    return {
        value,
        count: `This object has ${value.length} symbols!`
    };
}