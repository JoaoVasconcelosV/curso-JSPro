function greetCrew(message, ...names) { //O spreed names receberá todo o restante de parametros
  names.forEach(name => console.log(`${message}, ${name}`));
};

greetCrew("Seja bem vindo", "João", "Duke", "Julia");