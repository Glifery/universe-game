import FocusedObject from "./types/FocusedObject";
import React, {Component} from "react";
import Sentinel from "../domain/universe/object/Sentinel";
import Star from "../domain/universe/object/Star";
import PanelDetailSentinel from "./univerce/PanelDetailSentinel";
import Planet from "../domain/universe/object/Planet";
import PanelDetailPlanet from "./univerce/PanelDetailPlanet";
import PanelDetailStar from "./univerce/PanelDetailStar";
import ResultSetTable from "./widget/ResultSetTable";
import ConditionSet from "../application/univerce/condition/ConditionSet";
import ConditionSourceSentinel from "../application/univerce/condition/source/ConditionSourceSentinel";
import ConditionExposeSentinel from "../application/univerce/condition/expose/ConditionExposeSentinel";
import ConditionFilterByStar from "../application/univerce/condition/filter/ConditionFilterByStar";
import Universe from "../application/univerce/Universe";
import PanelNavigation from "./types/PanelNavigation";
import ConditionInterface from "../application/univerce/condition/ConditionInterface";
import ConditionObject from "../application/univerce/condition/ConditionObject";

type Props = {
    universe: Universe;
}

type State = {
    focused: ConditionInterface | null
}

class PanelFocused extends Component<Props, State> {
    private readonly navigation: PanelNavigation

    constructor(props: any) {
        super(props);

        this.state = {
            focused: null,
        };

        this.focus = this.focus.bind(this)
        this.navigation = {
            focus: this.focus.bind(this),
            universe: this.props.universe
        }
    }

    focus(focusedObject: ConditionInterface) {
        this.setState({
            focused: focusedObject,
        })

        console.info("Focused:", focusedObject);
    }

    renderConditionObject() {
        let focusedObject = (this.state.focused as ConditionObject).getObject();

        switch (true) {
            case (focusedObject instanceof Star):
                return (
                    <PanelDetailStar navigation={this.navigation} star={focusedObject as Star}/>
                );
            case (focusedObject instanceof Planet):
                return (
                    <PanelDetailPlanet navigation={this.navigation} planet={focusedObject as Planet}/>
                );
            case (focusedObject instanceof Sentinel):
                return (
                    <PanelDetailSentinel navigation={this.navigation} sentinel={focusedObject as Sentinel}/>
                );
        }

        throw new Error("ConditionObject value has unsupported type");
    }

    render() {
        let focusedObject = this.state.focused;

        switch (true) {
            case (focusedObject instanceof ConditionObject):
                return this.renderConditionObject();
                // focusedObject = (focusedObject as ConditionObject).getObject();
                // switch (true) {
                //     case (focusedObject instanceof Star):
                //         return (
                //             <PanelDetailStar focus={this.focus} star={focusedObject as Star}/>
                //         );
                //     case (focusedObject instanceof Planet):
                //         return (
                //             <PanelDetailPlanet panel={this.panel} focus={this.focus} planet={focusedObject as Planet}/>
                //         );
                //     case (focusedObject instanceof Sentinel):
                //         return (
                //             <PanelDetailSentinel focus={this.focus} sentinel={focusedObject as Sentinel}/>
                //         );
                // }
                // return "";
            case (focusedObject instanceof ConditionSet):
                return <ResultSetTable resultSet={(focusedObject as ConditionSet).apply(this.props.universe)} />
        }

        let conditionSet = new ConditionSet();
        conditionSet
            .addSource(new ConditionSourceSentinel())
            .addFilter(new ConditionFilterByStar(this.props.universe.getStars()[0]))
            .addExposer(new ConditionExposeSentinel(this.navigation))
        ;

        return <ResultSetTable resultSet={conditionSet.apply(this.props.universe)} />
    }
}

export default PanelFocused;
