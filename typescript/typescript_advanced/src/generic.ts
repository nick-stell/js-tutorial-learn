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

interface ILength {
    length: number;
}

function withCount<T extends ILength>(value: T): { value: T, count: string } {
    return {
        value,
        count: `The object has ${value.length} symbols!`
    };
}

console.log(withCount("Hello, Typescript!"));
console.log(withCount(["I", "Am", "Array"]));
//console.log(withCount(20)); error
console.log(withCount({ length: 20 }));

// ==================

function getObjectValue<T extends object, R extends keyof T>(obj: T, key: R) {
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

// ================

class Collection<T extends number | string | boolean> {
    constructor(private _items: T[] = []) { }

    add(item: T) {
        this._items.push(item);
    }

    remove(item: T) {
        this._items = this._items.filter((i) => i !== item);
    }

    get items(): T[] {
        return this._items;
    }
}

const strings = new Collection<string>(["I", "Am", "Strings"]);
strings.add("!");
strings.remove("Am");
console.log(strings.items);

const numbers = new Collection<number>([1, 3, 4]);
numbers.add(15);
numbers.remove(1);
console.log(numbers.items);

// const objs = new Collection([{a: 1}, {b:  2}]);
// objs.remove({b: 2});
// console.log(objs.items); error, because objects have different references

// ===============

interface Car {
    model: string;
    year: number;
}

function createAndValidateCar(model: string, year: number): Car {
    const car: Partial<Car> = {};

    if (model.length > 3) {
        car.model = model;
    }

    if (year > 2000) {
        car.year = year;
    }

    return car as Car;
}

// ================

const newCars: Readonly<Array<string>> = ["Ford", "Audi"];
//newCars.shift(); cannot change the state array because readonly now but we can use newCars[1]

const ford: Readonly<Car> = {
    model: "Ford",
    year: 2020
};

//ford.model = "Ferrari"; Ferrari it isn't model this car. Because add Readonly for this const 