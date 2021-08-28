class TransportSpaceShip {
  constructor(name) {
    this.name = name;
    this.currentVelocity = 0;
  }

  set velocity(newVelocity) {
    if(newVelocity > 120)
      this.currentVelocity = 120;    
    else
      this.currentVelocity = newVelocity;
  }

  get myVelocity() {
    return this.currentVelocity;
  }
}

let spaceShip = new TransportSpaceShip("Transportador");

spaceShip.velocity = 110;

console.log(spaceShip.myVelocity);