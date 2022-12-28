import React, {FC} from "react";
import {Typography} from "@mui/material";
import CoordinateItem from "./CoordinateItem";
import Planet from "../../domain/universe/object/Planet";
import PanelNavigation from "../types/PanelNavigation";

type Props = {
    navigation: PanelNavigation;
    planet: Planet;
}

const CoordinatePlanet: FC<Props> = ({ navigation, planet }: Props) =>
    <Typography color="text.secondary">
        (
        <CoordinateItem object={planet.getStar()} navigation={navigation} />
        -
        <CoordinateItem object={planet} navigation={navigation} />
        )
    </Typography>

export default CoordinatePlanet;
