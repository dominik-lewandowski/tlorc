import {TloTypeWithOptions} from "./tlo-type-with-options";

export interface TloEventConfig {
  event: TloTypeWithOptions;
  callback: (event: Event) => void;
  throttleId?: number;
  debounceId?: number;
}
