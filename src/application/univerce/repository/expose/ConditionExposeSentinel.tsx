import ConditionExposeInterface from "../ConditionExposeInterface";
import FocusedObject from "../../../../ui/types/FocusedObject";
import ResultItem from "../ResultItem";
import Sentinel from "../../../../domain/universe/object/Sentinel";
import CoordinateSentinel from "../../../../ui/widget/CoordinateSentinel";

class ConditionExposeSentinel implements ConditionExposeInterface {
    private focus: (focusedObject: FocusedObject) => void;

    constructor(focus: (focusedObject: FocusedObject) => void) {
        this.focus = focus;
    }

    apply(resultItem: ResultItem, focusedObject: FocusedObject): ResultItem {
        resultItem.addField("id", focusedObject.getId());

        if (focusedObject instanceof Sentinel) {
            resultItem.addField("coordinate", <CoordinateSentinel sentinel={focusedObject} focus={this.focus} />);
            resultItem.addField("name", focusedObject.getName());
            resultItem.addField("planet", focusedObject.getPlanet().getName());
            resultItem.addField("star", focusedObject.getPlanet().getStar().getName());
        }

        return resultItem;
    }
}

export default ConditionExposeSentinel;
