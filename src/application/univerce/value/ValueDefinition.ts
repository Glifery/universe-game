import BaseDefinition from "../definition/BaseDefinition";
import BaseValueDefinition from "./BaseValueDefinition";

class ValueDefinition<T extends BaseDefinition> extends BaseValueDefinition{
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
}

export default ValueDefinition;
