import _BaseValue from "./_BaseValue";
import BaseDefinition from "../definition/BaseDefinition";
import MassPointsDefinition from "../definition/MassPointsDefinition";

const definition = new MassPointsDefinition();

class _SentinelMassValue extends _BaseValue {
    getMaxValue(): number {
        return 200;
    }

    getMinValue(): number {
        return 0.1;
    }

    getDefinition(): BaseDefinition {
        return definition;
    }
}

export default _SentinelMassValue;
