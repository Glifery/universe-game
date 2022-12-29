import ConditionSourceInterface from "../ConditionSourceInterface";
import FocusedObject from "../../../../ui/type/FocusedObject";
import Universe from "../../Universe";

class ConditionSourceStar implements ConditionSourceInterface {
    getName(): string {
        return "Star";
    }
    apply(universe: Universe): FocusedObject[] {
        return universe.getStars();
    }
}

export default ConditionSourceStar;
