//OBJETOS
let spaceship = {
  name: "Colossus",
  crewQuantity: 10,
  isHitched: false
};

let { name: spaceshipName, crewQuantity, isHitched } = spaceship;

console.log(spaceshipName);
console.log(crewQuantity);
console.log(isHitched);

//ARRAYS
let names = ["Calango", "Artemis", "Fênix"];

let [nave1, nave2] = names;

console.log(nave1);
console.log(nave2);