import React, {FC} from "react";
import FocusedObject from "../types/FocusedObject";
import {Box} from "@mui/material";
import CoordinateItem from "./CoordinateItem";
import Sentinel from "../../domain/universe/object/Sentinel";

type Props = {
    sentinel: Sentinel;
    focus: (focusedObject: FocusedObject) => void;
}

const CoordinateSentinel: FC<Props> = ({ sentinel, focus }: Props) =>
    <Box component="span">
        coordinate: (
        <CoordinateItem object={sentinel.getPlanet().getStar()} focus={focus} />
        -
        <CoordinateItem object={sentinel.getPlanet()} focus={focus} />
        -
        <CoordinateItem object={sentinel} focus={focus} />
        )
    </Box>

export default CoordinateSentinel;
