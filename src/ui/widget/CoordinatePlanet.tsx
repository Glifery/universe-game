import React, {FC} from "react";
import FocusedObject from "../types/FocusedObject";
import {Box, Typography} from "@mui/material";
import CoordinateItem from "./CoordinateItem";
import Planet from "../../domain/universe/object/Planet";

type Props = {
    planet: Planet;
    focus: (focusedObject: FocusedObject) => void;
}

const CoordinatePlanet: FC<Props> = ({ planet, focus }: Props) =>
    <Typography color="text.secondary">
        (
        <CoordinateItem object={planet.getStar()} focus={focus} />
        -
        <CoordinateItem object={planet} focus={focus} />
        )
    </Typography>

export default CoordinatePlanet;
