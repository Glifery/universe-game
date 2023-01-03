import BaseDefinition from "../definition/BaseDefinition";
import BaseValue from "./BaseValue";

class ValueDefinition<T extends BaseDefinition> extends BaseValue{
    private readonly definition: T;
    private readonly minValue?: number;
    private readonly maxValue?: number;

    constructor(value: number, definition: T, minValue?: number, maxValue?: number) {
        super(value);
        this.definition = definition;
        this.minValue = minValue;
        this.maxValue = maxValue;
    }

    getValueDefinition(): string {
        return this.definition.getValueDefinition(this);
    }

    getMinValue(): number|null {
        return this.minValue ?? null;
    }

    getMaxValue(): number|null {
        return this.maxValue ?? null;
    }

    getValueNormalized(): number {
        if (this.minValue == null || this.maxValue == null) {
            return 0.5;
        }

        return (this.value - this.minValue) / (this.maxValue - this.minValue);
    }
}

export default ValueDefinition;
