export default class {
  constructor(spaceship) {
    this.spaceship = spaceship;
  }

  turnOn() {
    this.checkCurrentCharge().then(currentCharge => {
      console.log(`Partida realizada: ${currentCharge.toFixed(2)}%`)
    }).catch(err => {
      console.log(`Carga insuficiente para partida: ${err}%`);
    })
  }

  checkCurrentCharge() {
    return new Promise((resolve, reject) => {
      let currentCharge = this.spaceship.currentPercentCharge();
      if(currentCharge >= 30) {
        resolve(currentCharge);
      }
      else {
        reject(currentCharge);
      }
    })
  }
}