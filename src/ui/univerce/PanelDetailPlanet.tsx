import React, {FC} from "react";
import {Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import LinkUniverseDetail from "../elements/LinkUniverseDetail";
import DescriptionBlock from "../widget/DescriptionBlock";
import DescriptionKeyValue from "../widget/DescriptionKeyValue";
import Planet from "../../domain/universe/object/Planet";
import CoordinatePlanet from "../widget/CoordinatePlanet";
import ConditionSourceSentinel from "../../application/univerce/condition/source/ConditionSourceSentinel";
import ConditionExposeSentinel from "../../application/univerce/condition/expose/ConditionExposeSentinel";
import ConditionSet from "../../application/univerce/condition/ConditionSet";
import PanelNavigation from "../types/PanelNavigation";
import ConditionFilterByPlanet from "../../application/univerce/condition/filter/ConditionFilterByPlanet";

type Props = {
    navigation: PanelNavigation;
    planet: Planet;
}

const PanelDetailPlanet: FC<Props> = ({ navigation, planet }: Props) =>
    <Card>
        <CardContent>
            <h2>{planet.getName()}</h2>
            <Typography color="text.secondary" gutterBottom>
                coordinate: <CoordinatePlanet planet={planet} navigation={navigation} />
            </Typography>
            <Typography component="div">
                <DescriptionBlock>
                    <DescriptionKeyValue descriptionKey={"Star:"}>
                        <LinkUniverseDetail onClick={() => navigation.focus(planet.getStar())}>
                            {planet.getStar().getName()}
                        </LinkUniverseDetail>
                    </DescriptionKeyValue>
                    <DescriptionKeyValue descriptionKey={"Sentinels:"}>
                        <LinkUniverseDetail onClick={sentinelsListPage(navigation, planet)}>{planet.getSentinels().length} sentinels</LinkUniverseDetail>
                    </DescriptionKeyValue>
                </DescriptionBlock>
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Learn More</Button>
        </CardActions>
    </Card>

function sentinelsListPage(navigation: PanelNavigation, planet: Planet) {
    return () => navigation.focus(
        new ConditionSet()
            .addSource(new ConditionSourceSentinel())
            .addFilter(new ConditionFilterByPlanet(planet))
            .addExposer(new ConditionExposeSentinel(navigation))
    );
}

export default PanelDetailPlanet;
