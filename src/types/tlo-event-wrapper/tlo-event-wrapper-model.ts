import {TloEventTypeParameter} from "./tlo-event-type-parameter";

export interface TloEventWrapperModel {
  add: (types: TloEventTypeParameter, callback: (event?: Event) => void) => void;
  throttle: (types: TloEventTypeParameter, callback: () => void, throttleTime?: number) => void;
  debounce: (types: TloEventTypeParameter, callback: () => void, debounceTime?: number) => void;
  remove: (types: string | string[]) => void;
  removeAll: () => void;
}
