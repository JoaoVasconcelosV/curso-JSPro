let spaceshipNames = ['Elemental', 'Darwin', 'Artemis', 'Supernova', 'CalangoAir'];

removedSpaceships = spaceshipNames.splice(1, 2, 'Deméter', 'Puller', 'Golias');

console.log(spaceshipNames);

spaceshipNames.splice(1, 2);

console.log(spaceshipNames);

spaceshipNames.slice(1, 2);

console.log(spaceshipNames);