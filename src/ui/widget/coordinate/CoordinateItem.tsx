import React, {FC} from "react";
import BaseUniverseObject from "../../../domain/universe/BaseUniverseObject";
import LinkPanelDetail from "../../elements/LinkPanelDetail";
import PanelNavigation from "../../type/PanelNavigation";
import ConditionObject from "../../../application/univerce/condition/ConditionObject";

type Props = {
    navigation: PanelNavigation;
    object: BaseUniverseObject;
}

const CoordinateItem: FC<Props> = ({ navigation, object }: Props) =>
    <LinkPanelDetail onClick={navigation.navigateOnClick(new ConditionObject(object))}>
        {object.getCoordinate().getValue()}
    </LinkPanelDetail>

export default CoordinateItem;
