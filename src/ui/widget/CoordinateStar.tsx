import React, {FC} from "react";
import FocusedObject from "../types/FocusedObject";
import {Box, Typography} from "@mui/material";
import CoordinateItem from "./CoordinateItem";
import Star from "../../domain/universe/object/Star";

type Props = {
    star: Star;
    focus: (focusedObject: FocusedObject) => void;
}

const CoordinateStar: FC<Props> = ({ star, focus }: Props) =>
    <Typography color="text.secondary">
        (
        <CoordinateItem object={star} focus={focus} />
        )
    </Typography>

export default CoordinateStar;
