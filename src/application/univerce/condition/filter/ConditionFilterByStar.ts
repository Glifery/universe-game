import ConditionFilterInterface from "../ConditionFilterInterface";
import FocusedObject from "../../../../ui/types/FocusedObject";
import Star from "../../../../domain/universe/object/Star";
import Planet from "../../../../domain/universe/object/Planet";
import Sentinel from "../../../../domain/universe/object/Sentinel";

class ConditionFilterByStar implements ConditionFilterInterface{
    private star: Star;

    constructor(star: Star) {
        this.star = star;
    }

    apply(focusedObject: FocusedObject): boolean {
        switch (true) {
            case (focusedObject instanceof Star):
                return (focusedObject as Star) == this.star;
            case (focusedObject instanceof Planet):
                return (focusedObject as Planet).getStar() == this.star;
            case (focusedObject instanceof Sentinel):
                return (focusedObject as Sentinel).getPlanet().getStar() == this.star;
            default:
                return false;
        }
    }
}

export default ConditionFilterByStar;
