const Planet = require("./planet");
const solarSystem = require("./solar_system");
import { steelDefenses as defStell } from './defenses'; //Renomeando ao importar
const moment = require("moment");

const earth = new Planet("Terra", 50100000);
earth.rotate();

solarSystem.planets.push(earth);
solarSystem.planets.push(new Planet("Marte", 43000000));

console.log(solarSystem);
console.log(moment().format("hh:mm"))