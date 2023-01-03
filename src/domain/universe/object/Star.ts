import BaseUniverseObject from "../BaseUniverseObject";
import Coordinate from "../../position/Coordinate";
import Planet from "./Planet";
import ValueDefinition from "../../../application/univerce/value/ValueDefinition";
import MassPointsDefinition from "../../../application/univerce/definition/MassPointsDefinition";
import SizePointsDefinition from "../../../application/univerce/definition/SizePointsDefinition";
import ShiningPointsDefinition from "../../../application/univerce/definition/ShiningPointsDefinition";

class Star extends BaseUniverseObject {
    private planets: Planet[];

    private mass: ValueDefinition<MassPointsDefinition>;
    private size: ValueDefinition<SizePointsDefinition>;
    private shining: ValueDefinition<ShiningPointsDefinition>;

    constructor(
        id: number,
        name: string,
        position: Coordinate,
        mass: ValueDefinition<MassPointsDefinition>,
        size: ValueDefinition<SizePointsDefinition>,
        shining: ValueDefinition<ShiningPointsDefinition>
    ) {
        super(id, name, position);
        this.planets = [];

        this.mass = mass;
        this.size = size;
        this.shining = shining;
    }

    getMass(): ValueDefinition<MassPointsDefinition> {
        return this.mass;
    }

    getSize(): ValueDefinition<SizePointsDefinition> {
        return this.size;
    }

    getShining(): ValueDefinition<ShiningPointsDefinition> {
        return this.shining;
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
