const timeoutId = setTimeout(() => {
  console.log("Rodou!");
}, 2000)

clearTimeout(timeoutId);

let seconds = 0;
const intervalId = setInterval(() => {
  seconds += 1;
  console.log(`${seconds}s de execução!`);
  
  if(seconds >= 10)
    clearInterval(intervalId);
}, 1000)