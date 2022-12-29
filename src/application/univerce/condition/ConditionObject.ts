import FocusedObject from "../../../ui/type/FocusedObject";
import ConditionInterface from "./ConditionInterface";

class ConditionObject implements ConditionInterface {
    private object: FocusedObject;

    constructor(object: FocusedObject) {
        this.object = object;
    }

    getObject(): FocusedObject {
        return this.object;
    }
}

export default ConditionObject;
