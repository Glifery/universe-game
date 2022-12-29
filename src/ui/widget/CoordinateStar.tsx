import React, {FC} from "react";
import {Typography} from "@mui/material";
import CoordinateItem from "./CoordinateItem";
import Star from "../../domain/universe/object/Star";
import PanelNavigation from "../type/PanelNavigation";

type Props = {
    navigation: PanelNavigation;
    star: Star;
}

const CoordinateStar: FC<Props> = ({ navigation, star }: Props) =>
    <>
        (
        <CoordinateItem object={star} navigation={navigation} />
        )
    </>

export default CoordinateStar;
