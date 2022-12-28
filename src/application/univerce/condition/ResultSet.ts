import ResultItem from "./ResultItem";
import Util from "../../util/Util";

class ResultSet {
    private items: ResultItem[];

    constructor() {
        this.items = [];
    }

    addItem(item: ResultItem): ResultSet {
        this.items.push(item);

        return this;
    }

    getItems(): ResultItem[] {
        return this.items;
    }

    getAvailableFields(): string[] {
        return this.items
            .map(item => item.getAvailableFields())
            .flat()
            .filter(Util.filterUnique)
        ;
    }

    count(): number {
        return this.items.length;
    }
}

export default ResultSet;
