import React, {FC} from "react";
import {Typography} from "@mui/material";
import CoordinateItem from "./CoordinateItem";
import Star from "../../domain/universe/object/Star";
import PanelNavigation from "../types/PanelNavigation";

type Props = {
    navigation: PanelNavigation;
    star: Star;
}

const CoordinateStar: FC<Props> = ({ navigation, star }: Props) =>
    <Typography color="text.secondary">
        (
        <CoordinateItem object={star} navigation={navigation} />
        )
    </Typography>

export default CoordinateStar;
