import BaseUniverseObject from "../BaseUniverseObject";
import Coordinate from "../../position/Coordinate";
import Planet from "./Planet";

class Star extends BaseUniverseObject {
    private planets: Planet[];

    constructor(id: number, name: string, position: Coordinate) {
        super(id, name, position);
        this.planets = [];
    }

    getPlanets(): Planet[] {
        return this.planets;
    }

    addPlanet(planet: Planet): Star {
        this.planets.push(planet);

        return this;
    }
}

export default Star
