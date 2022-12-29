import React, {FC} from "react";
import {Typography} from "@mui/material";
import CoordinateItem from "./CoordinateItem";
import Sentinel from "../../domain/universe/object/Sentinel";
import PanelNavigation from "../type/PanelNavigation";

type Props = {
    navigation: PanelNavigation;
    sentinel: Sentinel;
}

const CoordinateSentinel: FC<Props> = ({ navigation, sentinel }: Props) =>
    <>
        (
        <CoordinateItem object={sentinel.getPlanet().getStar()} navigation={navigation} />
        -
        <CoordinateItem object={sentinel.getPlanet()} navigation={navigation} />
        -
        <CoordinateItem object={sentinel} navigation={navigation} />
        )
    </>

export default CoordinateSentinel;
