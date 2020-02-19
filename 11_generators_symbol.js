function* strGenerator() {
    yield 'H';
    yield 'e';
    yield 'l';
    yield 'l';
    yield 'o';
};

const str = strGenerator();

// ============

function* numberGen(n = 10) {
    for (let i = 0; i < n; i++) {
        yield i;
    };
};

const num = numberGen(7);

// ============ create own generator

const iterator = {
    gen(n = 10) {
        let i = 0;

        return {
            next() {
                if (i < n) {
                    return {
                        value: ++i,
                        done: false
                    };
                }

                return {
                    value: undefined,
                    done: true
                };
            }
        };
    }
};

// ============

for (let symbol of 'Hello') {
    console.log(symbol);
};

for (let number of [1, 2, 3, 5, 8, 13]) {
    console.log(number);
};

function* iter(value = 10) {
    for (let j = 0; j < value; j++) {
        yield j;
    }
};

for (let val of iter(6)) {
    console.log(val);
}