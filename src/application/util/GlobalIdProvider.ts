let globalIdCounter = 0;

class GlobalIdProvider {
    public static reset(): void {
        globalIdCounter = 0;
    }
    public static getNextId(): number {
        return ++globalIdCounter;
    }
}

export default GlobalIdProvider;
