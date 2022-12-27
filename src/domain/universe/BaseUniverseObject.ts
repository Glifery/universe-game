import Coordinate from "../position/Coordinate";
import FocusedObject from "../../ui/types/FocusedObject";

class BaseUniverseObject implements FocusedObject {
    private readonly id: number;
    private readonly name: string;
    protected readonly coordinate: Coordinate;

    constructor(id: number, name: string, position: Coordinate) {
        this.id = id;
        this.name = name;
        this.coordinate = position;
    }

    getId(): number {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    getCoordinate(): Coordinate {
        return this.coordinate;
    }
}

export default BaseUniverseObject
