class SpaceShip {
  constructor(name, maxCrew, maxRecommendedVelocity) {
    this.name = name;
    this.maxCrew = maxCrew;
    this.maxRecommendedVelocity = maxRecommendedVelocity;
    this.currentVelocity = 0;
  }

  speedUp(acceleration) {
    this.currentVelocity += acceleration;
    if(acceleration > this.maxRecommendedVelocity) {
      console.log("VELOCIDADE  MÁXIMA ULTRAPASSADA!!!");
    }
  }
}

class BattleSpaceShip extends SpaceShip{
  speedUp() {
    console.log("Nave de batalha só acelera 1km/s");
    this.currentVelocity += 1;
  }

  stop() {
    this.currentVelocity = 0;
    console.log("Recolhendo armas e parando nave");
  }
}

let mySpaceShip = new BattleSpaceShip("Calango de guerra", 20, 200);

console.log(mySpaceShip);
mySpaceShip.speedUp(201);
mySpaceShip.stop();

class TransportSpaceShip extends SpaceShip {
  constructor(name, maxCrew, maxRecommendedVelocity, maxLoadWeight) {
    super(name, maxCrew, maxRecommendedVelocity);
    this.maxLoadWeight = maxLoadWeight;
  }

  speedUp(acceleration) {
    acceleration /= 2;
    console.log(`Incremetando velocidade em ${acceleration}km/s`);
    super.speedUp(acceleration);
  }
}

let newSpaceShip = new TransportSpaceShip();

newSpaceShip.speedUp(200);