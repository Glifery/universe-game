import React, {Component} from "react";
import Sentinel from "../domain/universe/object/Sentinel";
import Star from "../domain/universe/object/Star";
import PanelDetailSentinel from "./univerce/PanelDetailSentinel";
import Planet from "../domain/universe/object/Planet";
import PanelDetailPlanet from "./univerce/PanelDetailPlanet";
import PanelDetailStar from "./univerce/PanelDetailStar";
import ResultSetTable from "./widget/ResultSetTable";
import ConditionSet from "../application/univerce/condition/ConditionSet";
import Universe from "../application/univerce/Universe";
import PanelNavigation from "./type/PanelNavigation";
import ConditionInterface from "../application/univerce/condition/ConditionInterface";
import ConditionObject from "../application/univerce/condition/ConditionObject";
import ConditionSourceStar from "../application/univerce/condition/source/ConditionSourceStar";
import ConditionExposeStar from "../application/univerce/condition/expose/ConditionExposeStar";

type Props = {
    universe: Universe;
}

type State = {
    focused: ConditionInterface | null
}

class PanelFocused extends Component<Props, State> {
    private readonly navigation: PanelNavigation

    constructor(props: Props) {
        super(props);

        this.state = {
            focused: null,
        };

        this.navigate = this.navigate.bind(this)
        this.navigation = {
            navigate: this.navigate.bind(this),
            navigateOnClick: this.navigateOnLick.bind(this),
            universe: this.props.universe
        }
    }

    navigate(focusedObject: ConditionInterface) {
        this.setState({
            focused: focusedObject,
        })

        console.info("Navigated to:", focusedObject);
    }

    navigateOnLick(focusedObject: ConditionInterface) {
        return () => {
            this.navigate(focusedObject);
        }
    }

    renderConditionObject(conditionObject: ConditionObject) {
        let focusedObject = conditionObject.getObject();

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

    renderConditionSet(conditionSet: ConditionSet) {
        return <ResultSetTable navigation={this.navigation} conditionSet={conditionSet} resultSet={conditionSet.apply(this.navigation)} />
    }

    render() {
        let focusedObject = this.state.focused;

        switch (true) {
            case (focusedObject instanceof ConditionObject):
                return this.renderConditionObject(focusedObject as ConditionObject);
            case (focusedObject instanceof ConditionSet):
                return this.renderConditionSet(focusedObject as ConditionSet);
        }

        //default view
        let conditionSet = new ConditionSet();
        conditionSet
            .addSource(new ConditionSourceStar())
            .addExposer(new ConditionExposeStar(this.navigation))
        ;

        return this.renderConditionSet(conditionSet);
    }
}

export default PanelFocused;
