// ========== Wrapper
const withDefaultValue = (target, defaultValue = 0) => {
    return new Proxy(target, {
        get: (obj, prop) => (prop in obj ? obj[prop] : defaultValue)
    });
};

const position = withDefaultValue({
    x: 24,
    y: 42
}, 0);

console.log(position);

// ========== Hidden properties
const withHiddenProps = (target, prefix = '_') => {
    return new Proxy(target, {
        has: (obj, prop) => (prop in obj) && (!prop.startsWith(prefix)),
        ownKeys: obj => Reflect.ownKeys(obj)
            .filter(p => !p.startsWith(prefix)),
        get: (obj, prop, receiver) => (prop in receiver) ? obj[prop] : void 0
    });
};

const data = withHiddenProps({
    name: 'Nick',
    age: 22,
    _uid: '12345678'
});

// =========== Optimization
const userData = [{
        id: 11,
        name: 'Nick',
        job: 'Fullstack',
        age: 23
    },
    {
        id: 22,
        name: 'Alex',
        job: 'Student',
        age: 24
    },
    {
        id: 33,
        name: 'Julie',
        job: 'Backend',
        age: 25
    },
    {
        id: 44,
        name: 'Jensen',
        job: 'Teacher',
        age: 26
    }
];

// шукаємо через метод find, но ми проходимо по кожному елементу, 
// якщо буде 10 000 юзерів то буде багато юзерів і трата часу

const index = {}
userData.forEach(i => (index[i.id] = i));

const IndexedArray = new Proxy(Array, {
    construct(target, [args]) {
        const index = {};
        args.forEach(item => (index[item.id] = item));

        return new Proxy(new target(...args), {
            get(arr, prop) {
                switch (prop) {
                    case 'push':
                        return item => {
                            index[item.id] = item;
                            arr[prop].call(arr, item);
                        };
                    case 'findById':
                        return id => index[id];
                    default:
                        return arr[prop];
                }
            }
        });
    }
});

const users = new IndexedArray([{
        id: 11,
        name: 'Nick',
        job: 'Fullstack',
        age: 23
    },
    {
        id: 22,
        name: 'Alex',
        job: 'Student',
        age: 24
    },
    {
        id: 33,
        name: 'Julie',
        job: 'Backend',
        age: 25
    },
    {
        id: 44,
        name: 'Jensen',
        job: 'Teacher',
        age: 26
    }
]);