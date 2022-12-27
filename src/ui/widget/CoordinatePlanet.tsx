import React, {FC} from "react";
import FocusedObject from "../types/FocusedObject";
import {Box} from "@mui/material";
import CoordinateItem from "./CoordinateItem";
import Planet from "../../domain/universe/object/Planet";

type Props = {
    planet: Planet;
    focus: (focusedObject: FocusedObject) => void;
}

const CoordinatePlanet: FC<Props> = ({ planet, focus }: Props) =>
    <Box component="span">
        coordinate: (
        <CoordinateItem object={planet.getStar()} focus={focus} />
        -
        <CoordinateItem object={planet} focus={focus} />
        )
    </Box>

export default CoordinatePlanet;
