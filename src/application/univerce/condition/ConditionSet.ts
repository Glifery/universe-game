import ConditionSourceInterface from "./ConditionSourceInterface";
import ResultSet from "./ResultSet";
import ResultItem from "./ResultItem";
import ConditionExposeInterface from "./ConditionExposeInterface";
import ConditionFilterInterface from "./ConditionFilterInterface";
import Util from "../../util/Util";
import ConditionInterface from "./ConditionInterface";
import PanelNavigation from "../../../ui/type/PanelNavigation";

class ConditionSet implements ConditionInterface {
    private sourcers: ConditionSourceInterface[];
    private filters: ConditionFilterInterface[];
    private exposers: ConditionExposeInterface[];

    constructor() {
        this.sourcers = [];
        this.filters = [];
        this.exposers = [];
    }

    apply(navigation: PanelNavigation): ResultSet {
        let selectedItems = this.sourcers
            .map(source => source.apply(navigation.universe))
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
                    (resultItem, exposer) => exposer.apply(resultItem, selectedItem, navigation),
                    new ResultItem(selectedItem)
                )
            )
            .forEach(resultItem => resultSet.addItem(resultItem));

        return resultSet;
    }

    setSources(sources: ConditionSourceInterface[]): ConditionSet {
        this.sourcers = sources;

        return this;
    }

    addSource(source: ConditionSourceInterface): ConditionSet {
        this.sourcers.push(source);

        return this;
    }

    setFilters(filters: ConditionFilterInterface[]): ConditionSet {
        this.filters = filters;

        return this;
    }

    addFilter(filter: ConditionFilterInterface): ConditionSet {
        this.filters.push(filter);

        return this;
    }

    setExposers(exposers: ConditionExposeInterface[]): ConditionSet {
        this.exposers = exposers;

        return this;
    }

    addExposer(exposer: ConditionExposeInterface): ConditionSet {
        this.exposers.push(exposer);

        return this;
    }

    getSources(): ConditionSourceInterface[] {
        return this.sourcers;
    }

    getFilters(): ConditionFilterInterface[] {
        return this.filters;
    }

    getExposers(): ConditionExposeInterface[] {
        return this.exposers;
    }
}

export default ConditionSet;
