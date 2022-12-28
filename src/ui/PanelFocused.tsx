import FocusedObject from "./types/FocusedObject";
import React, {Component} from "react";
import Sentinel from "../domain/universe/object/Sentinel";
import Star from "../domain/universe/object/Star";
import PanelDetailSentinel from "./univerce/PanelDetailSentinel";
import Planet from "../domain/universe/object/Planet";
import PanelDetailPlanet from "./univerce/PanelDetailPlanet";
import PanelDetailStar from "./univerce/PanelDetailStar";
import ResultSetTable from "./widget/ResultSetTable";
import ConditionSet from "../application/univerce/repository/ConditionSet";
import ConditionSourceSentinel from "../application/univerce/repository/source/ConditionSourceSentinel";
import ConditionExposeSentinel from "../application/univerce/repository/expose/ConditionExposeSentinel";
import ConditionFilterByStar from "../application/univerce/repository/filter/ConditionFilterByStar";
import Universe from "../application/univerce/Universe";

type Props = {
    universe: Universe;
}

type State = {
    focused: FocusedObject | ConditionSet | null
}

class PanelFocused extends Component<Props, State> {
    constructor(props: any) {
        super(props);

        this.state = {
            focused: null,
        };

        this.focus = this.focus.bind(this)
    }

    focus(focusedObject: FocusedObject) {
        this.setState({
            focused: focusedObject,
            // focusedList: null
        })

        console.info("Focused:", focusedObject);
    }

    render() {
        let focusedObject = this.state.focused;

        switch (true) {
            case (focusedObject instanceof Star):
                return (
                    <PanelDetailStar focus={this.focus} star={focusedObject as Star} />
                );
            case (focusedObject instanceof Planet):
                return (
                    <PanelDetailPlanet focus={this.focus} planet={focusedObject as Planet} />
                );
            case (focusedObject instanceof Sentinel):
                return (
                    <PanelDetailSentinel focus={this.focus} sentinel={focusedObject as Sentinel} />
                );
            case (focusedObject instanceof ConditionSet):
                return <ResultSetTable resultSet={(focusedObject as ConditionSet).apply(this.props.universe)} />
        }

        let conditionSet = new ConditionSet();
        conditionSet
            .addSource(new ConditionSourceSentinel())
            .addFilter(new ConditionFilterByStar(this.props.universe.getStars()[0]))
            .addExposer(new ConditionExposeSentinel(this.focus))
        ;

        return <ResultSetTable resultSet={conditionSet.apply(this.props.universe)} />
    }
}

export default PanelFocused;
