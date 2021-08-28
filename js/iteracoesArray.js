let hitchedSpaceships = ['Deméter', 'Darwin', 'Supernova', 'Fenix', 'Puller'];

hitchedSpaceships.forEach((spaceship, index) => console.log('Nave: ' +spaceship+'\nIndice: ' +index));

let upcasedSpaceships = hitchedSpaceships.map(spaceship => {
  return spaceship.toUpperCase();  
})

console.log(upcasedSpaceships);

let with7Chars = hitchedSpaceships.filter(spaceship => {
  return spaceship.length < 7;
})

console.log(with7Chars);

let firstWith7Chars = hitchedSpaceships.find(spaceship => {
  return spaceship.length < 7;
})

console.log(firstWith7Chars);