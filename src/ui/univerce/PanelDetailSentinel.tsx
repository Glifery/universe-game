import React, {FC} from "react";
import Sentinel from "../../domain/universe/object/Sentinel";
import {Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import LinkPanelDetail from "../elements/LinkPanelDetail";
import CoordinateSentinel from "../widget/coordinate/CoordinateSentinel";
import DescriptionBlock from "../widget/DescriptionBlock";
import DescriptionKeyValue from "../widget/DescriptionKeyValue";
import PanelNavigation from "../type/PanelNavigation";
import ConditionObject from "../../application/univerce/condition/ConditionObject";

type Props = {
    navigation: PanelNavigation;
    sentinel: Sentinel;
}

const PanelDetailSentinel: FC<Props> = ({ navigation, sentinel }: Props) =>
    <Card>
        <CardContent>
            <h2>{sentinel.getName()}</h2>
            <Typography color="text.secondary" gutterBottom>
                coordinate: <CoordinateSentinel sentinel={sentinel} navigation={navigation} />
            </Typography>
            <Typography component="div">
                <DescriptionBlock>
                    <DescriptionKeyValue descriptionKey={"Star:"}>
                        <LinkPanelDetail onClick={navigation.navigateOnClick(new ConditionObject(sentinel.getPlanet().getStar()))}>
                            {sentinel.getPlanet().getStar().getName()}
                        </LinkPanelDetail>
                    </DescriptionKeyValue>
                    <DescriptionKeyValue descriptionKey={"Planet:"}>
                        <LinkPanelDetail onClick={navigation.navigateOnClick(new ConditionObject(sentinel.getPlanet()))}>
                            {sentinel.getPlanet().getName()}
                        </LinkPanelDetail>
                    </DescriptionKeyValue>
                </DescriptionBlock>
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Learn More</Button>
        </CardActions>
    </Card>

export default PanelDetailSentinel;
