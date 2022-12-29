import FocusedObject from "../../../../ui/type/FocusedObject";
import ResultItem from "../ResultItem";
import React from "react";
import Planet from "../../../../domain/universe/object/Planet";
import ConditionExposeBase from "./ConditionExposeBase";
import LinkPanelDetail from "../../../../ui/elements/LinkPanelDetail";
import ConditionSet from "../ConditionSet";
import ConditionSourceSentinel from "../source/ConditionSourceSentinel";
import ConditionFilterByPlanet from "../filter/ConditionFilterByPlanet";
import PanelNavigation from "../../../../ui/type/PanelNavigation";
import ConditionExposeSentinel from "./ConditionExposeSentinel";

class ConditionExposePlanet extends ConditionExposeBase {
    apply(resultItem: ResultItem, focusedObject: FocusedObject, navigation: PanelNavigation): ResultItem {
        resultItem.addField("id", focusedObject.getId());

        if (focusedObject instanceof Planet) {
            resultItem.addField("coordinate", this.renderPlanetCoordinate(focusedObject));
            resultItem.addField("name", this.renderPlanetName(focusedObject));
            resultItem.addField("star", this.renderStarName(focusedObject.getStar()));
            resultItem.addField("sentinels", this.navigateToSentinelsList(navigation, focusedObject));
        }

        return resultItem;
    }

    private navigateToSentinelsList(navigation: PanelNavigation, planet: Planet) {
        return <LinkPanelDetail onClick={
            navigation.navigateOnClick(
                new ConditionSet()
                    .addSource(new ConditionSourceSentinel())
                    .addFilter(new ConditionFilterByPlanet(planet))
                    .addExposer(new ConditionExposeSentinel(navigation))
            )
        }>
            {planet.getSentinels().length}
        </LinkPanelDetail>
    }
}

export default ConditionExposePlanet;
