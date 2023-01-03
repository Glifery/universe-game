import ConditionExposeInterface from "../ConditionExposeInterface";
import FocusedObject from "../../../../ui/type/FocusedObject";
import ResultItem from "../ResultItem";
import Sentinel from "../../../../domain/universe/object/Sentinel";
import CoordinateSentinel from "../../../../ui/widget/coordinate/CoordinateSentinel";
import PanelNavigation from "../../../../ui/type/PanelNavigation";
import ConditionObject from "../ConditionObject";
import LinkPanelDetail from "../../../../ui/elements/LinkPanelDetail";
import React, {ReactNode} from "react";
import {Typography} from "@mui/material";
import Star from "../../../../domain/universe/object/Star";
import CoordinateStar from "../../../../ui/widget/coordinate/CoordinateStar";
import Planet from "../../../../domain/universe/object/Planet";
import CoordinatePlanet from "../../../../ui/widget/coordinate/CoordinatePlanet";

class ConditionExposeBase implements ConditionExposeInterface {
    protected readonly navigation: PanelNavigation;

    constructor(navigation: PanelNavigation) {
        this.navigation = navigation;
    }

    apply(resultItem: ResultItem, focusedObject: FocusedObject, navigation: PanelNavigation): ResultItem {
        resultItem.addField("id", focusedObject.getId());

        if (focusedObject instanceof Star) {
            resultItem.addField("coordinate", this.renderStarCoordinate(focusedObject));
            resultItem.addField("name", this.renderStarName(focusedObject));
        }

        if (focusedObject instanceof Planet) {
            resultItem.addField("coordinate", this.renderPlanetCoordinate(focusedObject));
            resultItem.addField("name", this.renderPlanetName(focusedObject));
        }

        if (focusedObject instanceof Sentinel) {
            resultItem.addField("coordinate", this.renderSentinelCoordinate(focusedObject));
            resultItem.addField("name", this.renderSentinelName(focusedObject));
        }

        return resultItem;
    }

    protected renderStarName(star: Star): ReactNode {
        return <LinkPanelDetail onClick={this.navigation.navigateOnClick(new ConditionObject(star))}>
            {star.getName()}
        </LinkPanelDetail>
    }

    protected renderStarCoordinate(star: Star): ReactNode {
        return <Typography color="text.secondary">
                <CoordinateStar star={star} navigation={this.navigation} />
            </Typography>
    }

    protected renderPlanetName(planet: Planet): ReactNode {
        return <LinkPanelDetail onClick={this.navigation.navigateOnClick(new ConditionObject(planet))}>
            {planet.getName()}
        </LinkPanelDetail>
    }

    protected renderPlanetCoordinate(planet: Planet): ReactNode {
        return <Typography color="text.secondary">
                <CoordinatePlanet planet={planet} navigation={this.navigation} />
            </Typography>
    }

    protected renderSentinelName(sentinel: Sentinel): ReactNode {
        return <LinkPanelDetail onClick={this.navigation.navigateOnClick(new ConditionObject(sentinel))}>
            {sentinel.getName()}
        </LinkPanelDetail>
    }

    protected renderSentinelCoordinate(sentinel: Sentinel): ReactNode {
        return <Typography color="text.secondary">
                <CoordinateSentinel sentinel={sentinel} navigation={this.navigation} />
            </Typography>
    }
}

export default ConditionExposeBase;
