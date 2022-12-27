import BaseOrbit from "../BaseOrbit";
import Planet from "./Planet";

class PlanetOrbit extends BaseOrbit {
    planet: Planet;

    constructor(planet: Planet) {
        super();
        this.planet = planet;
    }
}

export default PlanetOrbit
