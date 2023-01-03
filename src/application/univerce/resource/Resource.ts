import {ResourceType} from "./ResourceSet";
import BaseValue from "../value/BaseValue";

class Resource {
    private readonly type: ResourceType;
    private readonly value: BaseValue;

    constructor(type: ResourceType, value: BaseValue) {
        this.type = type;
        this.value = value;
    }

    getType(): ResourceType {
        return this.type;
    }

    getTypeValue(): string {
        return this.type.toString();
    }

    getValue(): BaseValue {
        return this.value;
    }
}

export default Resource;
