let calangoAir = {
  name: "Calango",
  velocity: 300,
  acceleration: 0
}

const velocityAfter10Seconds = (velocity, acceleration) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(acceleration > 0) {
        velocity += acceleration * 2;
        console.log(`Nova velocidade: ${velocity}`);
        resolve(velocity);
      } else {
        console.log("Aceleração inválida");
        reject("Não possui aceleração");
      }
    }, 2000)
  })
}

velocityAfter10Seconds(calangoAir.velocity, calangoAir.acceleration).then(velocity => {
  calangoAir.velocity = velocity;
  console.log("Depois de acelerar:\n", calangoAir);
}).catch(err => {
  console.log(err);
});
console.log("Execução de promises");
console.log(calangoAir);