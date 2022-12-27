import FocusedObject from "./types/FocusedObject";
import React, {Component} from "react";
import Sentinel from "../domain/universe/object/Sentinel";
import Star from "../domain/universe/object/Star";
import DetailPageSentinel from "./univerce/DetailPageSentinel";
import Planet from "../domain/universe/object/Planet";
import DetailPagePlanet from "./univerce/DetailPagePlanet";
import DetailPageStar from "./univerce/DetailPageStar";
import ListBlock from "./widget/ListBlock";
import ListItem from "./widget/ListItem";

type Props = {
    stars: Star[]
}

type State = {
    focusedObject: FocusedObject | null
}

class SelectedDomain extends Component<Props, State> {
    constructor(props: any) {
        super(props);

        this.state = {
            focusedObject: null,
        };

        this.focus = this.focus.bind(this)
    }

    focus(focusedObject: FocusedObject) {
        this.setState({
            focusedObject: focusedObject
        })

        console.info("I'm a button.", focusedObject);
    }

    render() {
        let focusedObject = this.state.focusedObject;

        if (focusedObject instanceof Sentinel) {
            let sentinel = focusedObject as Sentinel;

            return (
                <DetailPageSentinel
                    focus={this.focus}
                    sentinel={sentinel}
                    />
            );
        }

        if (focusedObject instanceof Planet) {
            let planet = focusedObject as Planet;

            return (
                <DetailPagePlanet
                    focus={this.focus}
                    planet={planet}
                />
            );
        }

        if (focusedObject instanceof Star) {
            let star = focusedObject as Star;

            return (
                <DetailPageStar
                    focus={this.focus}
                    star={star}
                />
            );
        }

        return <ListBlock data={{foo: 'bar'}}>
            <ListItem key={0} sentinel={this.props.stars[0].getPlanets()[0].getSentinels()[0]}>
                <DetailPageSentinel
                    focus={this.focus}
                    sentinel={this.props.stars[0].getPlanets()[0].getSentinels()[0]}
                />
            </ListItem>
            <ListItem key={1} sentinel={this.props.stars[0].getPlanets()[0].getSentinels()[1]} />
            <ListItem key={2} sentinel={this.props.stars[0].getPlanets()[0].getSentinels()[2]} />
        </ListBlock>
    }
}

export default SelectedDomain;
