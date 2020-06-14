import {TloEventCallback} from "./types/tlo-event-callback";
import {EventTypeParameter} from "./types/event-type-parameter";
import {TloEventModel} from "./types/tlo-event-model";

export class TloEvent implements TloEventModel {
  private readonly el: HTMLElement | Window;
  private readonly activeEvents: TloEventCallback[];
  private throttleId: number | undefined;

  constructor(element: HTMLElement | Window) {
    this.el = element;
    this.activeEvents = [];
  }

  private static iterateThroughTypes(types: EventTypeParameter, callback: (type: string) => void): void {
    let typeArr: string[] = typeof types === "string" ? [types] : types;
    for (const type of typeArr) {
      callback(type);
    }
  }

  throttle(types: EventTypeParameter, callback: () => void, throttleTime = 100): void {
    TloEvent.iterateThroughTypes(types, type => {
      this.activeEvents.push({type, callback});
      this.el.addEventListener(type, () => {
        if (this.throttleId) return;

        this.throttleId = setTimeout(() => {
          callback();
          this.throttleId = undefined;
        }, throttleTime);
      })
    });
  }

  remove(types: EventTypeParameter): void {
    TloEvent.iterateThroughTypes(types, type => {
      const active = this.activeEvents.find(e => e.type === type);
      if (active) {
        this.el.removeEventListener(active.type, active.callback);
      }
    });
  }

  removeAll(): void {
    for (const active of this.activeEvents) {
      this.el.removeEventListener(active.type, active.callback);
    }
  }
}
