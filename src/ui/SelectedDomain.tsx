import FocusedObject from "./types/FocusedObject";
import React, {Component} from "react";
import Sentinel from "../domain/universe/object/Sentinel";
import Star from "../domain/universe/object/Star";
import DetailPageSentinel from "./univerce/DetailPageSentinel";
import Planet from "../domain/universe/object/Planet";
import DetailPagePlanet from "./univerce/DetailPagePlanet";
import DetailPageStar from "./univerce/DetailPageStar";

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

        const { stars } = this.props;

        return <DetailPageSentinel
            focus={this.focus}
            sentinel={stars[0].getPlanets()[0].getSentinels()[0]}
        />
    }
}

export default SelectedDomain;
