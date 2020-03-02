const obj = {
  name: "Nick",
  age: 22,
  job: "Backend"
};

const entries = [
  ["name", "Nick"],
  ["age", 22],
  ["job", "Backend"]
];

// console.log(Object.entries(obj));
// console.log(Object.fromEntries(entries));

const map = new Map(entries);
map
  .set("newField", 2)
  .set(obj, "value of object")
  .set(NaN, "NaN ?");

console.log(map);

map.delete("job");

console.log(map.has("job"));
console.log(`Size: ${map.size}`);

// map.clear();

console.log(`Updated size: ${map.size}`);

// =============

// for (let entry of map.entries()) {
//   console.log("Entry: ", entry);
// }

// simple variant
for (let [key, value] of map) {
  console.log("Entry: ", [key, value]);
}

for (let value of map.values()) {
  console.log("Value: ", value);
}

for (let key of map.keys()) {
  console.log("Key: ", key);
}

map.forEach((val, key, m) => console.log(val, key));

// =====================

const array = [...map];
const arraySecond = Array.from(map);

console.log(array);
console.log(arraySecond);

const mapObject = Object.fromEntries(map.entries());
console.log(mapObject);

// =====================

const users = [
  {
    name: "Elena"
  },
  {
    name: "Ira"
  },
  {
    name: "Mark"
  }
];

const visits = new Map();
visits
  .set(users[0], new Date())
  .set(users[1], new Date(new Date().getTime() + 1000 * 60))
  .set(users[2], new Date(new Date().getTime() + 5000 * 60));

function lastVisit(user) {
  return visits.get(user);
}

console.log(lastVisit(users[1]));
