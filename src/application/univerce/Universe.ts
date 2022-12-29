import Planet from "../../domain/universe/object/Planet";
import Star from "../../domain/universe/object/Star";
import Coordinate from "../../domain/position/Coordinate";
import Sentinel from "../../domain/universe/object/Sentinel";
import PlanetOrbit from "../../domain/universe/object/PlanetOrbit";
import SentinelOrbit from "../../domain/universe/object/SentinelOrbit";
import RandomNamesGenerator from "../util/RandomNamesGenerator";
import GlobalIdProvider from "../util/GlobalIdProvider";
import RandomValue from "../util/random/RandomValue";

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

        this.generateStars(nameGenerator);
    }

    generateStars(randomNameGenerator: RandomNamesGenerator): void {
        const starsAmount: number = RandomValue.createInterval(80, 100).nextRound();
        const coordinateRandom: RandomValue = RandomValue.createDistributedHardInterval(0, 1000, 0);

        for (let i=0; i<starsAmount; i++) {
            let star = new Star(
                GlobalIdProvider.getNextId(),
                randomNameGenerator.getRandom(),
                Coordinate.fromRandom(coordinateRandom)
            );

            this.generatePlanets(star, randomNameGenerator);

            this.stars.push(star);
        }
    }

    generatePlanets(star: Star, randomNameGenerator: RandomNamesGenerator): void {
        if (RandomValue.createDefault().next() < 0.3) {
            return;
        }

        const planetsAmount: number = RandomValue.createInterval(1, 15).nextRound();
        const coordinateRandom: RandomValue = RandomValue.createDistributedSoftInterval(50, 200, 100);

        let coordinates: number[] = [];
        for (let i=0; i<planetsAmount; i++) {
            coordinates.push(coordinateRandom.nextRound());
        }
        coordinates.sort((a, b) => a - b);

        for (let i=0; i<planetsAmount; i++) {
            let planet = new Planet(
                GlobalIdProvider.getNextId(),
                randomNameGenerator.getRandom(),
                new Coordinate(coordinates[i]),
                star
            );

            let planetOrbit = new PlanetOrbit(planet);
            planet.setOrbit(planetOrbit);

            this.generateSentinels(planet, randomNameGenerator);

            star.addPlanet(planet);
            this.planets.push(planet);
        }
    }

    generateSentinels(planet: Planet, randomNameGenerator: RandomNamesGenerator): void {
        if (RandomValue.createDefault().next() < 0.2) {
            return;
        }

        const sentinelsAmount: number = RandomValue.createDistributedSoftInterval(0, 10, 0).nextRound();
        const coordinateRandom: RandomValue = RandomValue.createDistributedSoftInterval(30, 100, 50);

        let coordinates: number[] = [];
        for (let i=0; i<sentinelsAmount; i++) {
            coordinates.push(coordinateRandom.nextRound());
        }
        coordinates.sort((a, b) => a - b);

        for (let i=0; i<=sentinelsAmount; i++) {
            let sentinel = new Sentinel(
                GlobalIdProvider.getNextId(),
                randomNameGenerator.getRandom(),
                new Coordinate(coordinates[i]),
                planet
            );

            let sentinelOrbit = new SentinelOrbit(sentinel);
            sentinel.setOrbit(sentinelOrbit);

            planet.addSentinel(sentinel);
            this.sentinels.push(sentinel);
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
