import React, {FC} from "react";
import {Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import FocusedObject from "../types/FocusedObject";
import LinkUniverseDetail from "../elements/LinkUniverseDetail";
import DescriptionBlock from "../widget/DescriptionBlock";
import DescriptionKeyValue from "../widget/DescriptionKeyValue";
import Planet from "../../domain/universe/object/Planet";
import CoordinatePlanet from "../widget/CoordinatePlanet";

type Props = {
    planet: Planet;
    focus: (focusedObject: FocusedObject) => void;
}

const DetailPagePlanet: FC<Props> = ({ planet, focus }: Props) =>
    <Card>
        <CardContent>
            <h2>{planet.getName()}</h2>
            <Typography color="text.secondary" gutterBottom>
                <CoordinatePlanet planet={planet} focus={focus} />
            </Typography>
            <Typography component="div">
                <DescriptionBlock>
                    <DescriptionKeyValue descriptionKey={"Star:"}>
                        <LinkUniverseDetail onClick={() => focus(planet.getStar())}>
                            {planet.getStar().getName()}
                        </LinkUniverseDetail>
                    </DescriptionKeyValue>
                </DescriptionBlock>
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Learn More</Button>
        </CardActions>
    </Card>

export default DetailPagePlanet;
