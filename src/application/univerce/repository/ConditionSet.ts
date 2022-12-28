import ConditionSourceInterface from "./ConditionSourceInterface";
import ResultSet from "./ResultSet";
import Universe from "../Universe";
import ResultItem from "./ResultItem";
import ConditionExposeInterface from "./ConditionExposeInterface";
import ConditionFilterInterface from "./ConditionFilterInterface";
import Util from "../../util/Util";

class ConditionSet {
    private sourcers: ConditionSourceInterface[];
    private filters: ConditionFilterInterface[];
    private exposers: ConditionExposeInterface[];

    constructor() {
        this.sourcers = [];
        this.filters = [];
        this.exposers = [];
    }

    addSource(source: ConditionSourceInterface): ConditionSet {
        this.sourcers.push(source);

        return this;
    }

    addFilter(filter: ConditionFilterInterface): ConditionSet {
        this.filters.push(filter);

        return this;
    }

    addExposer(exposer: ConditionExposeInterface): ConditionSet {
        this.exposers.push(exposer);

        return this;
    }

    apply(universe: Universe): ResultSet {
        let selectedItems = this.sourcers
            .map(source => source.apply(universe))
            .flat()
            .filter(Util.filterUnique)//remove unique
        ;

        let resultSet = new ResultSet();

        selectedItems
            .filter(selectedItem =>
                this.filters.reduce(
                    (filterTrue, filter) => filterTrue && filter.apply(selectedItem),
                    true
                )
            )
            .map((selectedItem): ResultItem =>
                this.exposers.reduce(
                    (resultItem, exposer) => exposer.apply(resultItem, selectedItem),
                    new ResultItem(selectedItem)
                )
            )
            .forEach(resultItem => resultSet.addItem(resultItem));

        return resultSet;
    }
}

export default ConditionSet;
