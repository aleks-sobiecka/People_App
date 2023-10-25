const fs = require('fs');

const genders = ["M", "F"];
const maleNames = ["John", "Jack", "Tom", "Ben", "Dean"];
const femaleNames = ["Amanda", "Eva", "Anne", "Juliet", "Alex"];
const lastNames = ["Doe", "Night", "White", "Snow", "Brown"];
const people = [];

const randChoice = arr => {
    if (arr.length === 0) {
        return undefined;
      }
      const randomIndex = Math.floor(Math.random() * arr.length);
      return arr[randomIndex];
}

for (let i = 0; i < 20; i++) {
    const person = {};
    person.gender = randChoice(genders);

    if (person.gender === "M") {
        person.firstName = randChoice(maleNames);
    }
    else if (person.gender === "F") {
        person.firstName = randChoice(femaleNames);
    }

    person.lastName = randChoice(lastNames);
    person.age = Math.floor(Math.random() * (78 - 18 + 1)) + 18;
    person.email = `${person.firstName.toLowerCase()}.${person.lastName.toLowerCase()}@gmail.com`;
    person.phoneNumber = '';
    for (let i = 0; i < 9; i++) {
      person.phoneNumber += Math.floor(Math.random() * 10);
    }


    people.push(person);
  }

  const data = JSON.stringify(people, null, 2); // Konwertowanie tablicy do JSON z wcięciami (2 spacje).
  
  fs.writeFile('people.json', data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });


  