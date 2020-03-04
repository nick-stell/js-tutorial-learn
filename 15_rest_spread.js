const citiesUkraine = ["Lviv", "Kiev", "Rivne", "Kharkiv", "Odessa"];
const citiesEurope = ["Madrid", "Rome", "Prague", "Sidney"];

const citiesUkraineWithPopulation = {
  Lviv: 5,
  Kiev: 12,
  Rivne: 1,
  Kharkiv: 7,
  Odessa: 5
};

const citiesEuropeWithPopulation = {
  Madrid: 26,
  Rome: 18,
  Prague: 9,
  Sidney: 33,
  Lviv: 18
};

// ====== Operator Spread
// ====== Arrays

console.log(...citiesUkraine);
console.log(...citiesEurope);

const allCitiesFirst = [...citiesUkraine, "Chicago", ...citiesEurope];
const allCitiesSecond = citiesEurope.concat(citiesUkraine);

console.log(allCitiesFirst);
console.log(allCitiesSecond);

// ====== Objects

console.log({ ...citiesUkraineWithPopulation });
console.log({ ...citiesUkraineWithPopulation, ...citiesEuropeWithPopulation });
console.log({ ...citiesEuropeWithPopulation, ...citiesUkraineWithPopulation });

// ====== Practice

const numbers = [1, 11, 45, 98, 4];
console.log(Math.max(5, 37, 34, 122, 76));
console.log(Math.max(...numbers));
console.log(Math.max.apply(null, numbers));

const divs = document.querySelectorAll("div");
const nodes = [...divs];

// console.log(divs.map()); error, it isn't array

console.log(nodes);
console.log(divs, Array.isArray(divs));
console.log(nodes, Array.isArray(nodes));

// ============ Operator Rest

function sum(a, b, ...rest) {
  console.log(rest);
  return a + b + rest.reduce((prevVal, curVal) => prevVal + curVal, 0);
}

const newNumbers = [1, 4, 23, 87, 65, 13];

// Spread !!!
console.log(sum(...newNumbers));

// const a = newNumbers[0];
// const b = newNumbers[1];

const [a, b, ...other] = newNumbers;
console.log(a, b, other);

const person = {
  name: "Nick",
  age: 20,
  city: "Lviv",
  country: "Ukraine"
};

const { name, age, ...address } = person;
console.log(name, age, address);
