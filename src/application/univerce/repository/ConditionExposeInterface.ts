import FocusedObject from "../../../ui/types/FocusedObject";
import Universe from "../Universe";
import ResultItem from "./ResultItem";

interface ConditionExposeInterface {
    apply(resultItem: ResultItem, focusedObject: FocusedObject): ResultItem;
}

export default ConditionExposeInterface;
