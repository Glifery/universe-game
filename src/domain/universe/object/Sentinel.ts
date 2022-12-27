import BaseUniverseObject from "../BaseUniverseObject";
import Planet from "./Planet";
import Coordinate from "../../position/Coordinate";
import SentinelOrbit from "./SentinelOrbit";

class Sentinel extends BaseUniverseObject {
    private planet: Planet;
    private orbit: SentinelOrbit | null;

    constructor(id: number, name: string, position: Coordinate, planet: Planet) {
        super(id, name, position);
        this.planet = planet;
        this.orbit = null;
    }

    getPlanet(): Planet {
        return this.planet;
    }

    setOrbit(orbit: SentinelOrbit): Sentinel {
        this.orbit = orbit;

        return this;
    }
}

export default Sentinel
