class RandomCalculator {
    static getLinearRandomFromZero(): number {
        return Math.random();
    }

    static getLinearRandomToOne(): number {
        let random = Math.random();

        if (random == 0) {
            return 1;
        }

        return random;
    }

    static getLinearRandomInterval(minValue: number, maxValue: number): number {
        const segment = maxValue - minValue;

        const randomValue = this.getLinearRandomToOne();

        return segment * randomValue + minValue;
    }

    /**
     * https://docs.google.com/spreadsheets/d/18WFJt05Zoe_-w3VT6vWjoqjCElo4ev1OFpb4_eqFIwM/edit#gid=0
     * @param mean - (0<x<1) target value
     * @param varianceExp (-10<x<10) - how much it will be distributed; "-6" means 1.00001, "6" means 1000001
     */
    static getDistributedRandom(mean: number, varianceExp: number): number {
        const rand = this.getLinearRandomToOne();

        // from 1,00..1 to 100..
        // less means linear, more means distributed
        const variance = 1 + 10 ** varianceExp;

        // const deviation = (variance ** Math.abs(rand - mean) - 1)

        // V-function; 0 at mean, 1 far from mean
        const deviationLinearMultiplier = (rand - mean) > 0 ?
            Math.abs(rand - mean) / (1 - mean) :
            Math.abs(rand - mean) / mean;

        // U-function; 0 at mean, 1 far from mean
        const deviationDistributedMultiplier = (variance ** deviationLinearMultiplier - 1) / (variance ** 1 - 1)

        // /-/ -function; close to mean near mean, 0/1 far from mean
        const randomValue = (rand - mean) > 0 ?
            mean + deviationDistributedMultiplier * (1 - mean) :
            mean - deviationDistributedMultiplier * mean;

        return randomValue;
    }

    static getDistributedRandomInterval(minValue: number, maxValue: number, mean: number, varianceExp: number): number {
        const segment = maxValue - minValue;
        const meanNormalized = (mean - minValue) / segment;

        const randomValue = this.getDistributedRandom(meanNormalized, varianceExp);

        return segment * randomValue + minValue;
    }
}

export default RandomCalculator;
