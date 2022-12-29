import ConditionSourceInterface from "../ConditionSourceInterface";
import FocusedObject from "../../../../ui/type/FocusedObject";
import Universe from "../../Universe";

class ConditionSourcePlanet implements ConditionSourceInterface {
    apply(universe: Universe): FocusedObject[] {
        return universe.getPlanets();
    }
}

export default ConditionSourcePlanet;
