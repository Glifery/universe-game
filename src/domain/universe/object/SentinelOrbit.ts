import BaseOrbit from "../BaseOrbit";
import Sentinel from "./Sentinel";

class SentinelOrbit extends BaseOrbit {
    sentinel: Sentinel;

    constructor(sentinel: Sentinel) {
        super();
        this.sentinel = sentinel;
    }
}

export default SentinelOrbit
