let hitchedSpaceships = ['Supernova', 'Elemental', 'Helmet'];

console.log(hitchedSpaceships);

hitchedSpaceships.push("CalangoVoador");//add novo item a um array
console.log(hitchedSpaceships);
hitchedSpaceships.unshift("JumentoAir");//add novo item a primeira posição de um array
console.log(hitchedSpaceships);
hitchedSpaceships.pop();//rem o ultimo item de um array
console.log(hitchedSpaceships);
hitchedSpaceships.shift();//rem o primeiro item de um array

console.log(hitchedSpaceships.indexOf('Helmet'));//retorna a pos do item passado, se o item não existir retorna -1

console.log(hitchedSpaceships);