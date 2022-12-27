import React, {FC} from "react";
import FocusedObject from "../types/FocusedObject";
import BaseUniverseObject from "../../domain/universe/BaseUniverseObject";
import LinkUniverseDetail from "../elements/LinkUniverseDetail";

type Props = {
    object: BaseUniverseObject;
    focus: (focusedObject: FocusedObject) => void;
}

const CoordinateItem: FC<Props> = ({ object, focus }: Props) =>
    <LinkUniverseDetail
        onClick={() => {
            focus(object);
        }}
    >
        {object.getCoordinate().getValue()}
    </LinkUniverseDetail>

export default CoordinateItem;
