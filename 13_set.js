const set = new Set([1, 2, 3, 3, 4, 5, 5, 6]);
console.log(set);

set
  .add(10)
  .add(20)
  .add(30)
  .add(20);

console.log(set);
console.log(set.has(30));
console.log(set.has(42));
console.log(set.size);
console.log(set.delete(1));
console.log(set.size);

// values() and keys() similar
console.log(set.values());
console.log(set.keys());

for (let key of set) {
  console.log(key);
}

// ===================

function uniqueValues(array) {
  return [...new Set(array)];
}

console.log(uniqueValues([1, 1, 2, 2, 2, 3, 4, 4, 5, 5, 6, 6, 7, 7, 7, 7]));
