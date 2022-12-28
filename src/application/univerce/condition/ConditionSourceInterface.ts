import FocusedObject from "../../../ui/types/FocusedObject";
import Universe from "../Universe";

interface ConditionSourceInterface {
    apply(universe: Universe): FocusedObject[];
}

export default ConditionSourceInterface;
