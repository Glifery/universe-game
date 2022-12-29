import React, {PureComponent} from 'react';
import './App.css';
import Universe from "./application/univerce/Universe";
import {Container} from "@mui/material";
import PanelFocused from "./ui/PanelFocused";

class App extends PureComponent {
    universe: Universe;

    constructor(props: any) {
        super(props);
        this.universe = Universe.generate();
    };

    render() {
        return (
            <Container fixed>
                <PanelFocused universe={this.universe} />
            </Container>
        );
    }
}

export default App;
