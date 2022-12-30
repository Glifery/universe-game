import RandomCalculator from "./RandomCalculator";
import BaseDefinition from "../../univerce/definition/BaseDefinition";
import ValueDefinition from "../../univerce/value/ValueDefinition";

const varianceExpMin = -6;
const varianceExpMax = 6;
const varianceExpDistributedSoft = 2;
const varianceExpDistributedHard = 4;
const varianceExpLinear = -6;

class RandomValue {
    private readonly minValue: number;
    private readonly maxValue: number;
    private readonly mean: number;
    private readonly varianceExp: number;

    private constructor(minValue: number, maxValue: number, mean: number, varianceExp: number) {
        if (minValue >= maxValue) {
            throw new Error(`minValue {${minValue}} should be less then maxValue {${maxValue}}`);
        }

        if ((mean < minValue) || mean > maxValue) {
            throw new Error(`mean {${mean}} should be between minValue {${minValue}} and maxValue {${maxValue}}`);
        }

        if ((varianceExp < varianceExpMin) || varianceExp > varianceExpMax) {
            throw new Error(`varianceExp {${varianceExp}} should be between {${varianceExpMin}} and {${varianceExpMax}}`);
        }

        this.minValue = minValue;
        this.maxValue = maxValue;
        this.mean = mean;
        this.varianceExp = varianceExp;
    }

    next(): number {
        if (this.isLinear()) {
            return RandomCalculator.getLinearRandomInterval(this.getMinValue(), this.getMaxValue());
        }

        return RandomCalculator.getDistributedRandomInterval(this.getMinValue(), this.getMaxValue(), this.getMean(), this.getVarianceExpr());
    }

    nextRound(): number {
        return Math.round(this.next());
    }

    nextValueDefinition<T extends BaseDefinition>(definition: T): ValueDefinition<BaseDefinition> {
        return new ValueDefinition<T>(this.next(), definition, this.minValue, this.maxValue);
    }

    listRoundUniqueAsc(amount: number): number[] {
        let rands: number[] = [];

        while (rands.length < amount) {
            // let rand = this.next();
            let rand;
            do {
                rand = this.nextRound();
            } while (rands.indexOf(rand) !== -1) {
                rands.push(rand);
            }
        }

        rands.sort((a, b) => a - b);

        return rands;
    }

    getMinValue(): number {
        return this.minValue;
    }

    getMaxValue(): number {
        return this.maxValue;
    }

    getMean(): number {
        return this.mean;
    }

    getVarianceExpr(): number {
        return this.varianceExp;
    }

    isLinear(): boolean {
        return this.varianceExp == varianceExpLinear;
    }

    static createDefault(): RandomValue {
        return new RandomValue(0, 1, 0.5, varianceExpLinear);
    }

    static createInterval(minValue: number, maxValue: number): RandomValue {
        return new RandomValue(minValue, maxValue, (maxValue - minValue) / 2 + minValue, varianceExpLinear);
    }

    static createDistributedSoft(mean: number): RandomValue {
        return new RandomValue(0, 1, mean, varianceExpDistributedSoft);
    }

    static createDistributedSoftInterval(minValue: number, maxValue: number, mean: number): RandomValue {
        return new RandomValue(minValue, maxValue, mean, varianceExpDistributedSoft);
    }

    static createDistributedHardInterval(minValue: number, maxValue: number, mean: number): RandomValue {
        return new RandomValue(minValue, maxValue, mean, varianceExpDistributedHard);
    }

    static createDistributedIntervalVariance(minValue: number, maxValue: number, mean: number, varianceExp: number): RandomValue {
        return new RandomValue(minValue, maxValue, mean, varianceExp);
    }
}

export default RandomValue;
