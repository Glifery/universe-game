let globalIdCounter = 0;

class Util {
    public static filterUnique<T>(v: T, i: number, a: T[]): boolean {
        return a.indexOf(v) === i;
    }

    public static filterNotNull(value: any) {
        return value !== null;
    }

    public static filterString(value: string|number) {
        return isNaN(Number(value)) === false;
    }
}

export default Util;
