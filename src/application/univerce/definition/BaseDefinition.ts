import BaseValue from "../value/BaseValue";

abstract class BaseDefinition {
    abstract getDefinitionName(): string;

    getValueDefinition(value: BaseValue): string {
        let val = (Math.round(value.getValue() * 100) / 100).toString();

        if (value.getValue() > 1000000000) {
            val = `${Math.round(value.getValue() / 10000000) / 100} bln`;
        }
        if (value.getValue() > 1000000) {
            val = `${Math.round(value.getValue() / 10000) / 100} mln`;
        }

        return `${val} ${this.getDefinitionName()}`;
    }
}

export default BaseDefinition;
