import Universe from "../../application/univerce/Universe";
import ConditionInterface from "../../application/univerce/condition/ConditionInterface";

type PanelNavigation = {
    navigate: (focusedObject: ConditionInterface) => void,
    navigateOnClick: (focusedObject: ConditionInterface) => () => void,
    universe: Universe
}

export default PanelNavigation;
