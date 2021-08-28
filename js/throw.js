class SpaceShipWeapon {
  constructor(identifier) {
    this.identifier = identifier;
    this.shotsLeft = 5;
  }

  shoot() {
    if(this.shotsLeft >= 1){
      console.log("BANG!!!");
      this.shotsLeft--;
    }
    else
      throw new Error(`Arma ${this.identifier} sem munição!!!`);//Throw para o código e mostra o erro!!!
  }

  reload() {
    this.shotsLeft = 5;
  }
}

let fenixWeapon = new SpaceShipWeapon(10);
try { //Observar se ocorre algum erro nesse trecho de codigo, se sim, passa para o catch
  fenixWeapon.shoot();
  fenixWeapon.shoot();
  fenixWeapon.shoot();
  fenixWeapon.shoot();
  fenixWeapon.shoot();
  fenixWeapon.shoot();
} catch(e) { //Faz o tratamento do erro recebido do try
  console.log(e.message);
  fenixWeapon.reload();
} finally { //É executado indepedente do resultado do try/catch
  console.log("Foram bons tiros!!!");
}
console.log(fenixWeapon);