import {TloEventTypeParameter} from "./tlo-event-type-parameter";
import {TloEventWrapper} from "../../tlo-event-wrapper";

export interface TloEventWrapperModel {
  add: (types: TloEventTypeParameter, callback: (event?: Event) => void) => TloEventWrapper;
  throttle: (types: TloEventTypeParameter, callback: () => void, throttleTime?: number) => TloEventWrapper;
  debounce: (types: TloEventTypeParameter, callback: () => void, debounceTime?: number) => TloEventWrapper;
  remove: (types: string | string[]) => TloEventWrapper;
  removeAll: () => TloEventWrapper;
}
