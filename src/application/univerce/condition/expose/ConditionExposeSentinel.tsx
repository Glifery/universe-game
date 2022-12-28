import ConditionExposeInterface from "../ConditionExposeInterface";
import FocusedObject from "../../../../ui/types/FocusedObject";
import ResultItem from "../ResultItem";
import Sentinel from "../../../../domain/universe/object/Sentinel";
import CoordinateSentinel from "../../../../ui/widget/CoordinateSentinel";
import PanelNavigation from "../../../../ui/types/PanelNavigation";

class ConditionExposeSentinel implements ConditionExposeInterface {
    private navigation: PanelNavigation;

    constructor(navigation: PanelNavigation) {
        this.navigation = navigation;
    }

    apply(resultItem: ResultItem, focusedObject: FocusedObject): ResultItem {
        resultItem.addField("id", focusedObject.getId());

        if (focusedObject instanceof Sentinel) {
            resultItem.addField("coordinate", <CoordinateSentinel sentinel={focusedObject} navigation={this.navigation} />);
            resultItem.addField("name", focusedObject.getName());
            resultItem.addField("planet", focusedObject.getPlanet().getName());
            resultItem.addField("star", focusedObject.getPlanet().getStar().getName());
        }

        return resultItem;
    }
}

export default ConditionExposeSentinel;
