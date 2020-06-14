import {TloEventConfig} from "./types/tlo-event-wrapper/tlo-event-config";
import {TloEventTypeParameter} from "./types/tlo-event-wrapper/tlo-event-type-parameter";
import {TloEventWrapperModel} from "./types/tlo-event-wrapper/tlo-event-wrapper-model";
import {TloTypeWithOptions} from "./types/tlo-event-wrapper/tlo-type-with-options";
import {TloElement} from "./types/tlo-event-wrapper/tlo-element";

export class TloEventWrapper implements TloEventWrapperModel {
  private readonly el: TloElement;
  private activeEvents: TloEventConfig[];

  constructor(element: TloElement) {
    if (element === null) throw new Error('The element cannot be null');
    this.el = element;
    this.activeEvents = [];
  }

  private static iterateThroughTypes(
    types: TloEventTypeParameter,
    callback: (type: TloTypeWithOptions) => void): void {
    let typeArr: Array<string | TloTypeWithOptions> = Array.isArray(types) ? types : [types];
    for (let type of typeArr) {
      callback(typeof type === 'string' ? {type, useCapture: false} : type);
    }
  }

  add(types: TloEventTypeParameter, callback: (event?: Event) => void): void {
    TloEventWrapper.iterateThroughTypes(types, event => {
      const eventListener = (e?: Event) => callback(e);
      this.initListener(event, eventListener);
    });
  }

  throttle(types: TloEventTypeParameter, callback: (event?: Event) => void, throttleTime = 100): void {
    TloEventWrapper.iterateThroughTypes(types, event => {
      const throttleListener = (e?: Event) => {
        const activeEvent = this.findActiveByType(event.type);
        if (activeEvent && activeEvent.throttleId) return;

        activeEvent!.throttleId = setTimeout(() => {
          callback(e);
          activeEvent!.throttleId = undefined;
        }, throttleTime);
      };
      this.initListener(event, throttleListener);
    });
  }

  debounce(types: TloEventTypeParameter, callback: (event?: Event) => void, debounceTime = 200): void {
    TloEventWrapper.iterateThroughTypes(types, event => {
      const activeEvent = this.findActiveByType(event.type);
      const debounceListener = (e?: Event) => {

        clearTimeout(activeEvent!.debounceId);
        activeEvent!.debounceId = setTimeout(() => {
          callback(e);
        }, debounceTime);
      };
      this.initListener(event, debounceListener);
    })
  }

  remove(types: string | string[]): void {
    TloEventWrapper.iterateThroughTypes(types, event => {
      const active = this.findActiveByType(event.type);
      if (active) {

        if (this.el === null) throw new Error('The element does not exist.');
        this.el.removeEventListener(active.event.type, active.callback, active.event.useCapture);
      }
    });
  }

  removeAll(): void {
    for (const active of this.activeEvents) {
      this.removeListener(active);
    }
  }

  private findActiveByType(type: string): TloEventConfig | undefined {
    return this.activeEvents.find(e => e.event.type === type);
  }

  private initListener(event: TloTypeWithOptions, callback: (event?: Event) => void): void {
    this.activeEvents.push({event, callback});
    if (this.el === null) throw new Error('The element does not exist.');
    this.el.addEventListener(event.type, callback, event.useCapture);
  }

  private removeListener(active: TloEventConfig): void {
    this.activeEvents = this.activeEvents.filter(e => e.event.type !== active.event.type);
    if (this.el === null) throw new Error('The element does not exist.');
    this.el.removeEventListener(active.event.type, active.callback, active.event.useCapture);
  }
}
