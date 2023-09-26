import { Visitor } from "./visitor.js";

export class VIPVisitor extends Visitor {
    constructor(name, budget, VIPStatus) {
        super(name, budget);
        this.VIPStatus = VIPStatus;
    }
}