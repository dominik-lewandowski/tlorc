import { EventTypeParameter } from "./models/event-type-parameter";
import { TloEventModel } from "./models/tlo-event-model";
export declare class TloEvent implements TloEventModel {
    private readonly el;
    private readonly activeEvents;
    private throttleId;
    constructor(element: HTMLElement | Window);
    private static iterateThroughTypes;
    throttle(types: EventTypeParameter, callback: () => void, throttleTime?: number): void;
    remove(types: EventTypeParameter): void;
    removeAll(): void;
}
