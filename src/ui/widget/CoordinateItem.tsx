import React, {FC} from "react";
import BaseUniverseObject from "../../domain/universe/BaseUniverseObject";
import LinkUniverseDetail from "../elements/LinkUniverseDetail";
import PanelNavigation from "../types/PanelNavigation";
import ConditionObject from "../../application/univerce/condition/ConditionObject";

type Props = {
    navigation: PanelNavigation;
    object: BaseUniverseObject;
}

const CoordinateItem: FC<Props> = ({ navigation, object }: Props) =>
    <LinkUniverseDetail
        onClick={() => {
            navigation.focus(new ConditionObject(object));
        }}
    >
        {object.getCoordinate().getValue()}
    </LinkUniverseDetail>

export default CoordinateItem;
