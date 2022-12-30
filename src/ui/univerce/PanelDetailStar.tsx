import React, {Component} from "react";
import {Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import Star from "../../domain/universe/object/Star";
import CoordinateStar from "../widget/CoordinateStar";
import PanelNavigation from "../type/PanelNavigation";
import ConditionSet from "../../application/univerce/condition/ConditionSet";
import DescriptionBlock from "../widget/DescriptionBlock";
import DescriptionKeyValue from "../widget/DescriptionKeyValue";
import LinkPanelDetail from "../elements/LinkPanelDetail";
import ConditionExposePlanet from "../../application/univerce/condition/expose/ConditionExposePlanet";
import ConditionFilterByStar from "../../application/univerce/condition/filter/ConditionFilterByStar";
import ConditionSourcePlanet from "../../application/univerce/condition/source/ConditionSourcePlanet";
import ConditionObject from "../../application/univerce/condition/ConditionObject";

type Props = {
    navigation: PanelNavigation;
    star: Star;
}

class PanelDetailStar extends Component<Props> {
    navigateToPlanetsList() {
        let {navigation, star} = this.props;

        return navigation.navigateOnClick(
            new ConditionSet()
                .addSource(new ConditionSourcePlanet())
                .addFilter(new ConditionFilterByStar(star))
                .addExposer(new ConditionExposePlanet(navigation))
        );
    }

    render() {
        let {navigation, star} = this.props;

        return <Card>
            <CardContent>
                <h2>{star.getName()}</h2>
                <Typography color="text.secondary" gutterBottom>
                    coordinate: <CoordinateStar star={star} navigation={navigation} />
                </Typography>
                <Typography component="div">
                    <DescriptionBlock>
                        <DescriptionKeyValue descriptionKey={"Mass:"}>{star.getMass().getValueDefinition()}</DescriptionKeyValue>
                        <DescriptionKeyValue descriptionKey={"Size:"}>{star.getSize().getValueDefinition()}</DescriptionKeyValue>
                        <DescriptionKeyValue descriptionKey={"Shining:"}>{star.getShining().getValueDefinition()}</DescriptionKeyValue>
                        <DescriptionKeyValue descriptionKey={"Planets:"}>
                            <LinkPanelDetail onClick={this.navigateToPlanetsList()}>{star.getPlanets().length} planets</LinkPanelDetail>
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

export default PanelDetailStar;
