import {EventTypeParameter} from "./event-type-parameter";

export interface TloEventModel {
  throttle: (types: EventTypeParameter, callback: () => void, throttleTime: number) => void;
  remove: (types: EventTypeParameter) => void;
  removeAll: () => void;
}
