import ConditionSourceInterface from "../ConditionSourceInterface";
import FocusedObject from "../../../../ui/types/FocusedObject";
import Universe from "../../Universe";

class ConditionSourceStar implements ConditionSourceInterface {
    apply(universe: Universe): FocusedObject[] {
        return universe.getStars();
    }
}

export default ConditionSourceStar;
