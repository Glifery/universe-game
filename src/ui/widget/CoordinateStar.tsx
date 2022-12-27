import React, {FC} from "react";
import FocusedObject from "../types/FocusedObject";
import {Box} from "@mui/material";
import CoordinateItem from "./CoordinateItem";
import Star from "../../domain/universe/object/Star";

type Props = {
    star: Star;
    focus: (focusedObject: FocusedObject) => void;
}

const CoordinateStar: FC<Props> = ({ star, focus }: Props) =>
    <Box component="span">
        coordinate: (
        <CoordinateItem object={star} focus={focus} />
        )
    </Box>

export default CoordinateStar;
