import Spaceship from './spaceship';
import SpaceshipEngine from './spaceship_engine';

const calangoVoador = new Spaceship("Calango voador", 10, 5);
const araraAir = new Spaceship("Arara air", 14, 10);
const jumentoAir = new Spaceship("Jumento air", 20, 4);

const calangoVoadorEngine = new SpaceshipEngine(calangoVoador)
const araraAirEngine = new SpaceshipEngine(araraAir)
const jumentoAirEngine = new SpaceshipEngine(jumentoAir)

calangoVoadorEngine.turnOn();
araraAirEngine.turnOn();
jumentoAirEngine.turnOn();