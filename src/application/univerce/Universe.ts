import Planet from "../../domain/universe/object/Planet";
import Star from "../../domain/universe/object/Star";
import Coordinate from "../../domain/position/Coordinate";
import Sentinel from "../../domain/universe/object/Sentinel";
import PlanetOrbit from "../../domain/universe/object/PlanetOrbit";
import SentinelOrbit from "../../domain/universe/object/SentinelOrbit";
import RandomNamesGenerator from "../util/RandomNamesGenerator";
import GlobalIdProvider from "../util/GlobalIdProvider";

class Universe {
    stars: Star[];
    planets: Planet[];
    sentinels: Sentinel[];

    public static generate(): Universe {
        return new Universe();
    }

    private constructor() {
        this.stars = [];
        this.planets = [];
        this.sentinels = [];

        GlobalIdProvider.reset();

        const nameGenerator = new RandomNamesGenerator();

        for (let i=0; i<=2; i++) {
            let star = new Star(GlobalIdProvider.getNextId(), nameGenerator.getRandom(), new Coordinate(i*10));

            for (let ii=0; ii<=2; ii++) {
                let planet = new Planet(GlobalIdProvider.getNextId(), nameGenerator.getRandom(), new Coordinate(ii*10), star);

                let planetOrbit = new PlanetOrbit(planet);
                planet.setOrbit(planetOrbit);

                for (let iii=0; iii<=2; iii++) {
                    let sentinel = new Sentinel(GlobalIdProvider.getNextId(), nameGenerator.getRandom(), new Coordinate(iii*10), planet);

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

export default Universe
