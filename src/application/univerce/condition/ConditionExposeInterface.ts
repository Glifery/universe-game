import FocusedObject from "../../../ui/types/FocusedObject";
import ResultItem from "./ResultItem";
import PanelNavigation from "../../../ui/types/PanelNavigation";

interface ConditionExposeInterface {
    apply(resultItem: ResultItem, focusedObject: FocusedObject, navigation: PanelNavigation): ResultItem;
}

export default ConditionExposeInterface;
