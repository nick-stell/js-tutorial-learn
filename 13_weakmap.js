let obj = {
  name: "WeakMap"
};

const array = [obj];

obj = null;

console.log(array[0]);

// ==================

let object = {
  name: "WeakMap"
};

const weakMap = new WeakMap([[object, "object data"]]);

object = null;

console.log(weakMap.has(object));
console.log(weakMap.get(object));
console.log(weakMap);

// ================

const cache = new WeakMap();

function cacheUser(user) {
  if (!cache.has(user)) {
    cache.set(user, Date.now());
  }
  return cache.get(user);
}

let lena = { name: "Elena" };
let alex = { name: "Alex" };

cacheUser(lena);
cacheUser(alex);

lena = null;

console.log("Cached: ", cache.has(lena));
console.log("Cached: ", cache.has(alex));
