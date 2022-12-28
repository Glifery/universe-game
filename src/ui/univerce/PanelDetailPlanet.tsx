import React, {Component} from "react";
import {Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import LinkPanelDetail from "../elements/LinkPanelDetail";
import DescriptionBlock from "../widget/DescriptionBlock";
import DescriptionKeyValue from "../widget/DescriptionKeyValue";
import Planet from "../../domain/universe/object/Planet";
import CoordinatePlanet from "../widget/CoordinatePlanet";
import ConditionSourceSentinel from "../../application/univerce/condition/source/ConditionSourceSentinel";
import ConditionExposeSentinel from "../../application/univerce/condition/expose/ConditionExposeSentinel";
import ConditionSet from "../../application/univerce/condition/ConditionSet";
import PanelNavigation from "../types/PanelNavigation";
import ConditionFilterByPlanet from "../../application/univerce/condition/filter/ConditionFilterByPlanet";
import ConditionObject from "../../application/univerce/condition/ConditionObject";

type Props = {
    navigation: PanelNavigation;
    planet: Planet;
}

class PanelDetailPlanet extends Component<Props> {
    navigateToSentinelsList() {
        let {navigation, planet} = this.props;

        return navigation.navigateOnClick(
            new ConditionSet()
                .addSource(new ConditionSourceSentinel())
                .addFilter(new ConditionFilterByPlanet(planet))
                .addExposer(new ConditionExposeSentinel(navigation))
        );
    }

    render() {
        let {navigation, planet} = this.props;

        return <Card>
            <CardContent>
                <h2>{planet.getName()}</h2>
                <Typography color="text.secondary" gutterBottom>
                    coordinate: <CoordinatePlanet planet={planet} navigation={navigation} />
                </Typography>
                <Typography component="div">
                    <DescriptionBlock>
                        <DescriptionKeyValue descriptionKey={"Star:"}>
                            <LinkPanelDetail onClick={navigation.navigateOnClick(new ConditionObject(planet.getStar()))}>
                                {planet.getStar().getName()}
                            </LinkPanelDetail>
                        </DescriptionKeyValue>
                        <DescriptionKeyValue descriptionKey={"Sentinels:"}>
                            <LinkPanelDetail onClick={this.navigateToSentinelsList()}>{planet.getSentinels().length} sentinels</LinkPanelDetail>
                        </DescriptionKeyValue>
                    </DescriptionBlock>
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    }
}

export default PanelDetailPlanet;
