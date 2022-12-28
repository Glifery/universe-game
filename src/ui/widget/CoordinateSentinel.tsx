import React, {FC} from "react";
import FocusedObject from "../types/FocusedObject";
import {Box, Typography} from "@mui/material";
import CoordinateItem from "./CoordinateItem";
import Sentinel from "../../domain/universe/object/Sentinel";

type Props = {
    sentinel: Sentinel;
    focus: (focusedObject: FocusedObject) => void;
}

const CoordinateSentinel: FC<Props> = ({ sentinel, focus }: Props) =>
    <Typography color="text.secondary">
        (
        <CoordinateItem object={sentinel.getPlanet().getStar()} focus={focus} />
        -
        <CoordinateItem object={sentinel.getPlanet()} focus={focus} />
        -
        <CoordinateItem object={sentinel} focus={focus} />
        )
    </Typography>

export default CoordinateSentinel;
