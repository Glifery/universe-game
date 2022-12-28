import React, {FC} from "react";
import Sentinel from "../../domain/universe/object/Sentinel";
import {Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import LinkUniverseDetail from "../elements/LinkUniverseDetail";
import CoordinateSentinel from "../widget/CoordinateSentinel";
import DescriptionBlock from "../widget/DescriptionBlock";
import DescriptionKeyValue from "../widget/DescriptionKeyValue";
import PanelNavigation from "../types/PanelNavigation";

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
                        <LinkUniverseDetail onClick={() => navigation.focus(sentinel.getPlanet().getStar())}>
                            {sentinel.getPlanet().getStar().getName()}
                        </LinkUniverseDetail>
                    </DescriptionKeyValue>
                    <DescriptionKeyValue descriptionKey={"Planet:"}>
                        <LinkUniverseDetail onClick={() => navigation.focus(sentinel.getPlanet())}>
                            {sentinel.getPlanet().getName()}
                        </LinkUniverseDetail>
                    </DescriptionKeyValue>
                </DescriptionBlock>
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Learn More</Button>
        </CardActions>
    </Card>

export default PanelDetailSentinel;
