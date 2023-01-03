import Resource from "./Resource";

export enum ResourceType {
    hydrogen,
    oxygen,
    methane,
    stone,
    iron,
    sulfur,
}

class ResourceSet {
    private readonly resources: Resource[];

    constructor(resources: Resource[]) {
        this.resources = resources;
    }

    getResources(): Resource[] {
        return this.resources;
    }
}

export default ResourceSet;
