import Sentinel from "./Sentinel";
import Star from "./Star";
import BaseUniverseObject from "../BaseUniverseObject";
import Coordinate from "../../position/Coordinate";
import PlanetOrbit from "./PlanetOrbit";

class Planet extends BaseUniverseObject {
    private sentinels: Sentinel[];
    private star: Star;
    private orbit: PlanetOrbit | null;

    constructor(id: number, name: string, position: Coordinate, star: Star) {
        super(id, name, position);
        this.sentinels = [];
        this.star = star;
        this.orbit = null;
    }

    getSentinels(): Sentinel[] {
        return this.sentinels;
    }

    getStar(): Star {
        return this.star;
    }

    addSentinel(sentinel: Sentinel): Planet {
        this.sentinels.push(sentinel);

        return this;
    }

    setOrbit(orbit: PlanetOrbit): Planet {
        this.orbit = orbit;

        return this;
    }
}

export default Planet
