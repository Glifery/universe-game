import Universe from "../../application/univerce/Universe";
import ConditionInterface from "../../application/univerce/condition/ConditionInterface";

type PanelNavigation = {
    focus: (focusedObject: ConditionInterface) => void,
    universe: Universe
}

export default PanelNavigation;
