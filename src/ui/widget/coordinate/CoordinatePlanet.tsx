import React, {FC} from "react";
import {Typography} from "@mui/material";
import CoordinateItem from "./CoordinateItem";
import Planet from "../../../domain/universe/object/Planet";
import PanelNavigation from "../../type/PanelNavigation";

type Props = {
    navigation: PanelNavigation;
    planet: Planet;
}

const CoordinatePlanet: FC<Props> = ({ navigation, planet }: Props) =>
    <>
        (
        <CoordinateItem object={planet.getStar()} navigation={navigation} />
        -
        <CoordinateItem object={planet} navigation={navigation} />
        )
    </>

export default CoordinatePlanet;
