import ConditionSourceInterface from "../ConditionSourceInterface";
import FocusedObject from "../../../../ui/type/FocusedObject";
import Universe from "../../Universe";

class ConditionSourceSentinel implements ConditionSourceInterface {
    apply(universe: Universe): FocusedObject[] {
        return universe.getSentinels();
    }
}

export default ConditionSourceSentinel;
