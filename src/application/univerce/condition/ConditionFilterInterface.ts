import FocusedObject from "../../../ui/type/FocusedObject";
import Universe from "../Universe";
import ResultItem from "./ResultItem";

interface ConditionFilterInterface {
    apply(focusedObject: FocusedObject): boolean;
}

export default ConditionFilterInterface;
