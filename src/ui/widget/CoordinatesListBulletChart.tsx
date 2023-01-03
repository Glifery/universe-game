import React, {Component} from "react";
import {ChartBullet} from "@patternfly/react-charts";
import BaseUniverseObject from "../../domain/universe/BaseUniverseObject";

type Props = {
    list: BaseUniverseObject[];
}

// https://www.patternfly.org/v4/charts/bullet-chart
class CoordinatesListBulletChart extends Component<Props> {
    getMinDomain(): number {
        return this.props.list[0].getCoordinate().getValue();
    }
    getMaxDomain(): number {
        return this.props.list[this.props.list.length - 1].getCoordinate().getValue();
    }

    render() {
        let {list} = this.props;

        return <ChartBullet
            constrainToVisibleArea
            labels={({datum}) => `${datum.name}: ${datum.y}`}
            primaryDotMeasureData={list.map(item => ({name: item.getName(), y: item.getCoordinate().getValue()}))}
            minDomain={this.getMinDomain()}
            maxDomain={this.getMaxDomain()}
        />
    }
}

export default CoordinatesListBulletChart;
