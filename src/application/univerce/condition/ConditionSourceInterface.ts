import FocusedObject from "../../../ui/type/FocusedObject";
import Universe from "../Universe";

interface ConditionSourceInterface {
    getName(): string;
    apply(universe: Universe): FocusedObject[];
}

export default ConditionSourceInterface;
