import React, {Component} from "react";
import {Chart, ChartAxis, ChartBar, ChartGroup, ChartThemeColor} from "@patternfly/react-charts";
import ResourceSet from "../../application/univerce/resource/ResourceSet";

type Props = {
    resourceSet: ResourceSet;
}

// https://www.patternfly.org/v4/charts/bar-chart
class ResourceSetChart extends Component<Props> {
    getLegendData(): {name: string}[] {
        return this.props.resourceSet.getResources().map(resource => ({name: resource.getTypeValue()}));
    }
    render() {
        let {resourceSet} = this.props;

        return <Chart
            legendData={this.getLegendData()}
            legendPosition="bottom-left"
            height={150}
            padding={{
                bottom: 75, // Adjusted to accommodate legend
            }}
            themeColor={ChartThemeColor.multiOrdered}
            domain={{y: [0, 1]}}
        >
            <ChartAxis dependentAxis />
            <ChartAxis dependentAxis showGrid horizontal />
            <ChartGroup offset={11}>
                {resourceSet.getResources().map(
                    resource => <ChartBar key={resource.getTypeValue()} data={[{
                        name: resource.getTypeValue(),
                        x: 1,
                        y: resource.getValue().getValue()
                    }]} />
                )}
            </ChartGroup>
        </Chart>
    }
}

export default ResourceSetChart;
