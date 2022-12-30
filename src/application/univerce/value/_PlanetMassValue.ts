import _BaseValue from "./_BaseValue";
import MassPointsDefinition from "../definition/MassPointsDefinition";
import BaseDefinition from "../definition/BaseDefinition";

const definition = new MassPointsDefinition();

class _PlanetMassValue extends _BaseValue {
    getMaxValue(): number {
        return 1000;
    }

    getMinValue(): number {
        return 0.1;
    }

    getDefinition(): BaseDefinition {
        return definition;
    }
}

export default _PlanetMassValue;
