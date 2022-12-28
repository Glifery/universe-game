let globalIdCounter = 0;

class Util {
    public static filterUnique<T>(v: T, i: number, a: T[]): boolean {
        return a.indexOf(v) === i;
    }
}

export default Util;
