import ConditionFilterInterface from "../ConditionFilterInterface";
import FocusedObject from "../../../../ui/types/FocusedObject";
import Star from "../../../../domain/universe/object/Star";
import Planet from "../../../../domain/universe/object/Planet";
import Sentinel from "../../../../domain/universe/object/Sentinel";

class ConditionFilterByPlanet implements ConditionFilterInterface{
    private planet: Planet;

    constructor(planet: Planet) {
        this.planet = planet;
    }

    apply(focusedObject: FocusedObject): boolean {
        switch (true) {
            case (focusedObject instanceof Star):
                return false;
            case (focusedObject instanceof Planet):
                return (focusedObject as Planet) == this.planet;
            case (focusedObject instanceof Sentinel):
                return (focusedObject as Sentinel).getPlanet() == this.planet;
            default:
                return false;
        }
    }
}

export default ConditionFilterByPlanet;
