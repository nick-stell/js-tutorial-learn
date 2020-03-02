const people = [
  {
    name: "Nick",
    age: 22,
    budget: 40000
  },
  {
    name: "Elena",
    age: 17,
    budget: 3400
  },
  {
    name: "Igor",
    age: 49,
    budget: 50000
  },
  {
    name: "Michael",
    age: 15,
    budget: 1800
  },
  {
    name: "Vasilisa",
    age: 24,
    budget: 25000
  },
  {
    name: "Victoria",
    age: 38,
    budget: 2300
  }
];

for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}

for (let person of people) {
  console.log(person);
}

// ForEach
people.forEach(function(person, index, peopleArray) {
  console.log(person);
});

people.forEach(person => console.log(person));

// Map
const newPeople = people.map(person => `${person.name} (${person.age * 3})`);
console.log(newPeople);

// Filter
const adults = [];
for (let i = 0; i < people.length; i++) {
  if (people[i].age >= 18) {
    adults.push(people[i]);
  }
}

console.log(adults);

const newAdults = people.filter(person => person.age >= 18);
console.log(newAdults);

// Reduce
let amount = 0;

for (let i = 0; i < people.length; i++) {
  amount += people[i].budget;
}

console.log(amount);

const newAmount = people.reduce((total, person) => total + person.budget, 0);
console.log(newAmount);

// Find
const foundPerson = people.find(person => person.name === "Igor");
console.log(foundPerson);

//FindIndex
const foundPersonByIndex = people.findIndex(
  person => person.name === "Victoria"
);
console.log(foundPersonByIndex);

// ========== Task
const totalAmount = people
  .filter(person => person.budget >= 3000)
  .map(person => {
    return {
      info: `${person.name} (${person.age})`,
      budget: person.budget
    };
  })
  .reduce((total, person) => total + person.budget, 0);

console.log(totalAmount);
