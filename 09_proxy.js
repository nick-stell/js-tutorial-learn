// ============= Objects
const person = {
    name: 'Nick',
    age: 23,
    job: 'Fullstack'
};

const op = new Proxy(person, {
    get(target, prop) {
        // console.log('Target:', target);
        // console.log('Prop:', prop);

        if (!(prop in target)) {
            return prop
                .split('_')
                .map(p => target[p])
                .join(' ');
        }

        return target[prop];
    },
    set(target, prop, value) {
        if (prop in target) {
            target[value] = value;
        } else {
            throw new Error(`No ${prop} field in target!`);
        }
    },
    has(target, prop) {
        return ['age', 'job'].includes(prop);
    },
    deleteProperty(target, prop) {
        console.log('Deleting...', prop);
        delete target[prop];
        return true; // if we want delete fields in target else return false
    }
});

// =============== Functions
const log = text => `Log: ${text}`;

const fp = new Proxy(log, {
    apply(target, thisArg, args) {
        console.log('Calling fn...');

        console.log(`Target: ${target}`);
        console.log(`This arg: ${thisArg}`);
        console.log(`Args: ${args}`);

        return target.apply(thisArg, args).toUpperCase();
    }
});

// ============= Classes
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
};

const PersonProxy = new Proxy(Person, {
    construct(target, args) {
        console.log('Construct...');

        return new Proxy(new target(...args), {
            get(t, prop) {
                console.log(`Getting prop: ${prop}`);
                return t[prop];
            }
        });
    }
});

const personProxy = new PersonProxy('Nick', 19);