import BaseDefinition from "../definition/BaseDefinition";

abstract class _BaseValue {
    private value: number;

    constructor(value: number) {
        this.value = value;
    }

    abstract getMinValue(): number;
    abstract getMaxValue(): number;
    abstract getDefinition(): BaseDefinition;

    getValue(): number {
        return this.value
    }

    setValue(value: number): _BaseValue {
        this.value = value;

        return this;
    }
}

export default _BaseValue;
