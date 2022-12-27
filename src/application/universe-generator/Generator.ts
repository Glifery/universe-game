import Planet from "../../domain/universe/object/Planet";
import Star from "../../domain/universe/object/Star";
import Coordinate from "../../domain/position/Coordinate";
import Sentinel from "../../domain/universe/object/Sentinel";
import PlanetOrbit from "../../domain/universe/object/PlanetOrbit";
import SentinelOrbit from "../../domain/universe/object/SentinelOrbit";
import RandomNamesGenerator from "../util/RandomNamesGenerator";

class Generator {
    stars: Star[];
    planets: Planet[];
    sentinels: Sentinel[];

    constructor() {
        const nameGenerator = new RandomNamesGenerator();

        this.stars = [];
        this.planets = [];
        this.sentinels = [];

        for (let i=0; i<=10; i++) {
            let star = new Star(i, nameGenerator.getRandom(), new Coordinate(i*10));

            for (let ii=0; ii<=10; ii++) {
                let planet = new Planet(ii, nameGenerator.getRandom(), new Coordinate(ii*10), star);

                let planetOrbit = new PlanetOrbit(planet);
                planet.setOrbit(planetOrbit);

                for (let iii=0; iii<=10; iii++) {
                    let sentinel = new Sentinel(iii, nameGenerator.getRandom(), new Coordinate(iii*10), planet);

                    let sentinelOrbit = new SentinelOrbit(sentinel);
                    sentinel.setOrbit(sentinelOrbit);

                    planet.addSentinel(sentinel);
                    this.sentinels.push(sentinel);
                }

                star.addPlanet(planet);
                this.planets.push(planet);
            }

            this.stars.push(star);
        }
    }

    getStars(): Star[] {
        return this.stars;
    }

    getPlanets(): Planet[] {
        return this.planets;
    }

    getSentinels(): Sentinel[] {
        return this.sentinels;
    }
}

export default Generator
