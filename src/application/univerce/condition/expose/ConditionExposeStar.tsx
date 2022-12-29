import FocusedObject from "../../../../ui/type/FocusedObject";
import ResultItem from "../ResultItem";
import React from "react";
import ConditionExposeBase from "./ConditionExposeBase";
import LinkPanelDetail from "../../../../ui/elements/LinkPanelDetail";
import ConditionSet from "../ConditionSet";
import PanelNavigation from "../../../../ui/type/PanelNavigation";
import Star from "../../../../domain/universe/object/Star";
import ConditionSourcePlanet from "../source/ConditionSourcePlanet";
import ConditionFilterByStar from "../filter/ConditionFilterByStar";
import ConditionExposePlanet from "./ConditionExposePlanet";

class ConditionExposeStar extends ConditionExposeBase {
    apply(resultItem: ResultItem, focusedObject: FocusedObject, navigation: PanelNavigation): ResultItem {
        resultItem.addField("id", focusedObject.getId());

        if (focusedObject instanceof Star) {
            resultItem.addField("coordinate", this.renderStarCoordinate(focusedObject));
            resultItem.addField("name", this.renderStarName(focusedObject));
            resultItem.addField("planets", this.navigateToPlanetsList(navigation, focusedObject));
        }

        return resultItem;
    }

    private navigateToPlanetsList(navigation: PanelNavigation, star: Star) {
        return <LinkPanelDetail onClick={
            navigation.navigateOnClick(
                new ConditionSet()
                    .addSource(new ConditionSourcePlanet())
                    .addFilter(new ConditionFilterByStar(star))
                    .addExposer(new ConditionExposePlanet(navigation))
            )
        }>
            {star.getPlanets().length}
        </LinkPanelDetail>
    }
}

export default ConditionExposeStar;
