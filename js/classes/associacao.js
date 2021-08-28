class Captain {
  constructor(name, age, flightHours) {
    this.name = name;
    this.age = age;
    this.flightHours = flightHours;
  }
}

class SpaceShip {
  constructor(name, crewQuantity, captainName, captainAge, captainFlightHours) {
    this.name = name;
    this.crewQuantity = crewQuantity;
    this.captain = new Captain(captainName, captainAge, captainFlightHours);  
  }
}

let mySpaceShip = new SpaceShip("Calango voador", 6, "Calangão", 22, 150);

console.log(mySpaceShip);