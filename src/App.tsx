import React, {PureComponent} from 'react';
import './App.css';
import Generator from "./application/universe-generator/Generator";
import {Container} from "@mui/material";
import SelectedDomain from "./ui/SelectedDomain";

class App extends PureComponent {
    generator: Generator;

    constructor(props: any) {
        super(props);
        this.generator = new Generator();
    };

    render() {
        return (
            <Container maxWidth="sm">
                <SelectedDomain stars={this.generator.getStars()} />
            </Container>
        );
    }
}

export default App;
