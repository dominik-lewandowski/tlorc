"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TloEvent = void 0;
class TloEvent {
    constructor(element) {
        this.el = element;
        this.activeEvents = [];
    }
    static iterateThroughTypes(types, callback) {
        let typeArr = typeof types === "string" ? [types] : types;
        for (const type of typeArr) {
            callback(type);
        }
    }
    throttle(types, callback, throttleTime = 100) {
        TloEvent.iterateThroughTypes(types, type => {
            this.activeEvents.push({ type, callback });
            this.el.addEventListener(type, () => {
                if (this.throttleId)
                    return;
                this.throttleId = setTimeout(() => {
                    callback();
                    this.throttleId = undefined;
                }, throttleTime);
            });
        });
    }
    remove(types) {
        TloEvent.iterateThroughTypes(types, type => {
            const active = this.activeEvents.find(e => e.type === type);
            if (active) {
                this.el.removeEventListener(active.type, active.callback);
            }
        });
    }
    removeAll() {
        for (const active of this.activeEvents) {
            this.el.removeEventListener(active.type, active.callback);
        }
    }
}
exports.TloEvent = TloEvent;
//# sourceMappingURL=tlo-event.js.map