function calcValues(a, b) {
  return [a + b, undefined, a * b, a / b];
}

const result = calcValues(4, 10);
const sum = result[0];
const sub = result[1];

console.log("Result:", result);
console.log(sum, sub);

// ========= Destructuring Assignment
// ========= With Arrays

// const [newSum, , newSub] = calcValues(100, 47);
const [newSum, newSub = "no value", newMult, ...other] = calcValues(100, 47);

console.log(newSum, newSub, newMult, other);

// ========= With Objects

const person = {
  name: "Nick",
  age: 22,
  address: {
    city: "Rivne",
    country: "Ukraine"
  }
};

const {
  name: firstName = "No name",
  age,
  car = "no car",
  address: { city: homeCity, country }
} = person;

const { name, ...info } = person;

console.log(firstName, age, car, homeCity, country);
console.log(info);

// ========= Example

function logPerson({ name: firstName = "no name", age }) {
  console.log(`Name: ${firstName}, Age: ${age}`);
}

logPerson(person);
