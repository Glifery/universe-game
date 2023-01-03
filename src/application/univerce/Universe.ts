import Planet from "../../domain/universe/object/Planet";
import Star from "../../domain/universe/object/Star";
import Coordinate from "../../domain/position/Coordinate";
import Sentinel from "../../domain/universe/object/Sentinel";
import PlanetOrbit from "../../domain/universe/object/PlanetOrbit";
import SentinelOrbit from "../../domain/universe/object/SentinelOrbit";
import RandomNamesGenerator from "../util/RandomNamesGenerator";
import GlobalIdProvider from "../util/GlobalIdProvider";
import RandomValue from "../util/random/RandomValue";
import MassPointsDefinition from "./definition/MassPointsDefinition";
import SizePointsDefinition from "./definition/SizePointsDefinition";
import ShiningPointsDefinition from "./definition/ShiningPointsDefinition";
import ResourceSet, {ResourceType} from "./resource/ResourceSet";
import Resource from "./resource/Resource";
import BaseValue from "./value/BaseValue";
import Util from "../util/Util";

class Universe {
    private readonly stars: Star[];
    private readonly planets: Planet[];
    private readonly sentinels: Sentinel[];
    private randomNameGenerator: RandomNamesGenerator;

    public static generate(): Universe {
        return new Universe();
    }

    private constructor() {
        this.stars = [];
        this.planets = [];
        this.sentinels = [];
        this.randomNameGenerator =new RandomNamesGenerator();

        GlobalIdProvider.reset();

        this.generateStars();
    }

    generateStars(): void {
        const starsAmount: number = RandomValue.createInterval(8, 10).nextRound();
        const coordinates: number[] = RandomValue.createDistributedHardInterval(0, 1000, 0).listRoundUniqueAsc(starsAmount);

        coordinates.forEach(coordinate => {
            let star = this.createStar(new Coordinate(coordinate));

            this.generatePlanets(star);

            this.stars.push(star);
        });
    }

    createStarResource(type: ResourceType): Resource|null {
        if (RandomValue.createDefault().next() < 0.5) {
            return null;
        }

        return new Resource(type, new BaseValue(RandomValue.createDefault().next()));
    }

    createStar(coordinate: Coordinate): Star {
        const star = new Star(
            GlobalIdProvider.getNextId(),
            this.randomNameGenerator.getRandom(),
            coordinate,
            RandomValue.createInterval(20000000, 1000000000).nextValueDefinition<MassPointsDefinition>(new MassPointsDefinition()),
            RandomValue.createInterval(20000000, 1000000000).nextValueDefinition<SizePointsDefinition>(new SizePointsDefinition()),
            RandomValue.createDistributedSoftInterval(0.1, 10, 1).nextValueDefinition<ShiningPointsDefinition>(new ShiningPointsDefinition()),
            new ResourceSet(
                Object.values(ResourceType)
                    .filter(Util.filterString)
                    .map(type => this.createStarResource(ResourceType[(type as keyof typeof ResourceType)]))
                    .filter(Util.filterNotNull) as Resource[]
            ),
        );

        return star;
    }

    generatePlanets(star: Star): void {
        if (RandomValue.createDefault().next() < 0.3) {
            return;
        }

        const minDistance = RandomValue.createDistributedSoftInterval(
            30,
            100,
            100 - (100 - 30) * star.getSize().getValueNormalized()
        ).nextRound();

        const maxDistance = RandomValue.createDistributedSoftInterval(
            minDistance,
            200,
            minDistance + (200 - minDistance) * star.getMass().getValueNormalized()
        ).nextRound();

        const planetsAmount: number = RandomValue.createDistributedHardInterval(
            0,
            20,
            (maxDistance - minDistance) / 10
        ).nextRound();

        const coordinates: number[] = RandomValue.createInterval(minDistance, maxDistance).listRoundUniqueAsc(planetsAmount);

        coordinates.forEach(coordinate => {
            let planet = new Planet(
                GlobalIdProvider.getNextId(),
                this.randomNameGenerator.getRandom(),
                new Coordinate(coordinate),
                star
            );

            let planetOrbit = new PlanetOrbit(planet);
            planet.setOrbit(planetOrbit);

            this.generateSentinels(planet);

            star.addPlanet(planet);
            this.planets.push(planet);
        });
    }

    generateSentinels(planet: Planet): void {
        if (RandomValue.createDefault().next() < 0.2) {
            return;
        }

        const sentinelsAmount: number = RandomValue.createDistributedSoftInterval(0, 10, 0).nextRound();
        const coordinates: number[] = RandomValue.createDistributedSoftInterval(30, 100, 50).listRoundUniqueAsc(sentinelsAmount);

        coordinates.forEach(coordinate => {
            let sentinel = new Sentinel(
                GlobalIdProvider.getNextId(),
                this.randomNameGenerator.getRandom(),
                new Coordinate(coordinate),
                planet
            );

            let sentinelOrbit = new SentinelOrbit(sentinel);
            sentinel.setOrbit(sentinelOrbit);

            planet.addSentinel(sentinel);
            this.sentinels.push(sentinel);
        });
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
