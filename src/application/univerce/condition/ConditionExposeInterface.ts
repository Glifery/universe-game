import FocusedObject from "../../../ui/type/FocusedObject";
import ResultItem from "./ResultItem";
import PanelNavigation from "../../../ui/type/PanelNavigation";

interface ConditionExposeInterface {
    apply(resultItem: ResultItem, focusedObject: FocusedObject, navigation: PanelNavigation): ResultItem;
}

export default ConditionExposeInterface;
