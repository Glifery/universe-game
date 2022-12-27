const MinValue = 0;
const MaxValue = 1000;

class Coordinate {
    private readonly value: number

    constructor(value: number) {
        this.validate(value)

        this.value = value;
    }

    validate(value: number): Error | null {
        if (value < MinValue) {
            return new Error(`Position value should be greater or equal to ${MinValue}, ${value} passed`);
        }

        if (value > MaxValue) {
            return new Error(`Position value should be lower or equal to ${MaxValue}, ${value} passed`);
        }

        return null;
    }

    getValue(): number {
        return this.value
    }
}

export default Coordinate
