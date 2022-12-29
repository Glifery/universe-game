import FocusedObject from "../../../../ui/type/FocusedObject";
import ResultItem from "../ResultItem";
import Sentinel from "../../../../domain/universe/object/Sentinel";
import React from "react";
import ConditionExposeBase from "./ConditionExposeBase";
import PanelNavigation from "../../../../ui/type/PanelNavigation";

class ConditionExposeSentinel extends ConditionExposeBase {
    apply(resultItem: ResultItem, focusedObject: FocusedObject, navigation: PanelNavigation): ResultItem {
        resultItem.addField("id", focusedObject.getId());

        if (focusedObject instanceof Sentinel) {
            resultItem.addField("coordinate", this.renderSentinelCoordinate(focusedObject));
            resultItem.addField("name", this.renderSentinelName(focusedObject));
            resultItem.addField("planet", this.renderPlanetName(focusedObject.getPlanet()));
            resultItem.addField("star", this.renderStarName(focusedObject.getPlanet().getStar()));
        }

        return resultItem;
    }
}

export default ConditionExposeSentinel;
