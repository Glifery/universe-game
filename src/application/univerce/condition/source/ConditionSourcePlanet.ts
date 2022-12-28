import ConditionSourceInterface from "../ConditionSourceInterface";
import FocusedObject from "../../../../ui/types/FocusedObject";
import Universe from "../../Universe";

class ConditionSourcePlanet implements ConditionSourceInterface {
    apply(universe: Universe): FocusedObject[] {
        return universe.getPlanets();
    }
}

export default ConditionSourcePlanet;
