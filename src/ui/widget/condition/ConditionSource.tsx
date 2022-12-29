import React, {Component} from "react";
import {
    Checkbox, FormControl,
    InputLabel,
    ListItemText,
    MenuItem,
    OutlinedInput,
    Select,
    SelectChangeEvent
} from "@mui/material";
import PanelNavigation from "../../type/PanelNavigation";
import ConditionSet from "../../../application/univerce/condition/ConditionSet";
import ConditionSourceStar from "../../../application/univerce/condition/source/ConditionSourceStar";
import ConditionSourcePlanet from "../../../application/univerce/condition/source/ConditionSourcePlanet";
import ConditionSourceSentinel from "../../../application/univerce/condition/source/ConditionSourceSentinel";
import ConditionSourceInterface from "../../../application/univerce/condition/ConditionSourceInterface";
import ConditionExposeBase from "../../../application/univerce/condition/expose/ConditionExposeBase";

const availableSources: ConditionSourceInterface[] = [
    new ConditionSourceStar(),
    new ConditionSourcePlanet(),
    new ConditionSourceSentinel(),
]

type Props = {
    navigation: PanelNavigation;
    conditionSet: ConditionSet;
}

type State = {
    selectedSources: string[]
}

class ConditionSource extends Component<Props, State> {
    private sourceMap: Map<string, ConditionSourceInterface>;

    constructor(props: Props) {
        super(props);

        this.state = {
            selectedSources: props.conditionSet.getSources().map(source => source.getName()),
        };

        this.sourceMap = new Map<string, ConditionSourceInterface>();
        availableSources.forEach(source => {
            this.sourceMap.set(source.getName(), source);
        })
    }

    setSources(sources: string[]) {
        this.setState({
            selectedSources: sources,
        });

        this.props.navigation.navigate(
            this.props.conditionSet
                .setSources(sources.map(source => this.sourceMap.get(source) as ConditionSourceInterface))
                .setExposers([
                    new ConditionExposeBase(this.props.navigation)
                ])
        )
    }

    render() {
        return <FormControl fullWidth>
            <InputLabel id="scopes">Scopes</InputLabel>
            <Select
                labelId="scopes"
                multiple
                value={this.state.selectedSources}
                onChange={(event: SelectChangeEvent<string[]>) => {
                    const {target: {value}} = event;
                    this.setSources(typeof value === 'string' ? value.split(',') : value);
                }}
                input={<OutlinedInput label="scopes" />}
                renderValue={(selected: any) => {
                    return selected.join(', ');
                }}
            >
                {Array.from(this.sourceMap).map(([name, source]) =>
                    <MenuItem key={name} value={name}>
                        <Checkbox checked={this.state.selectedSources.indexOf(name) > -1} />
                        <ListItemText primary={name} />
                    </MenuItem>
                )}
            </Select>
        </FormControl>
    }
}

export default ConditionSource;
