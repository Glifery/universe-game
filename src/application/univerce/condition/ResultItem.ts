import FocusedObject from "../../../ui/type/FocusedObject";

class ResultItem {
    private source: FocusedObject;
    private fields: Map<string, any>;

    constructor(source: FocusedObject) {
        this.source = source;
        this.fields = new Map<string, string>();
    }

    addField(name: string, value: any) {
        this.fields.set(name, value);
    }

    getField(name: string): any {
        this.fields.get(name);
    }

    getAvailableFields(): string[] {
        return Array.from(this.fields.keys())
    }

    getFieldValues(): [string, any][] {
        return Array.from(this.fields.entries());
    }
}

export default ResultItem;
