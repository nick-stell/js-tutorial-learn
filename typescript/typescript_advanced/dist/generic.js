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
function withCount(value) {
    return {
        value,
        count: `The object has ${value.length} symbols!`
    };
}
console.log(withCount("Hello, Typescript!"));
console.log(withCount(["I", "Am", "Array"]));
console.log(withCount({ length: 20 }));
function getObjectValue(obj, key) {
    return obj[key];
}
const person = {
    name: "Nick",
    age: 22,
    job: "JS Developer"
};
console.log(getObjectValue(person, "name"));
console.log(getObjectValue(person, "age"));
console.log(getObjectValue(person, "job"));
class Collection {
    constructor(_items = []) {
        this._items = _items;
    }
    add(item) {
        this._items.push(item);
    }
    remove(item) {
        this._items = this._items.filter((i) => i !== item);
    }
    get items() {
        return this._items;
    }
}
const strings = new Collection(["I", "Am", "Strings"]);
strings.add("!");
strings.remove("Am");
console.log(strings.items);
const numbers = new Collection([1, 3, 4]);
numbers.add(15);
numbers.remove(1);
console.log(numbers.items);
function createAndValidateCar(model, year) {
    const car = {};
    if (model.length > 3) {
        car.model = model;
    }
    if (year > 2000) {
        car.year = year;
    }
    return car;
}
const newCars = ["Ford", "Audi"];
const ford = {
    model: "Ford",
    year: 2020
};
//# sourceMappingURL=generic.js.map