import {TloFilterCondition} from "./types/tlorc/tlo-filter-condition";

export class Tlorc {

  static remove<T, U>(array: T[], condition: TloFilterCondition, keep?: boolean): T[] {
    let newArr: T[] = [];
    let i = 0;
    let conditionKey: string;
    let conditionValue!: U;

    for (const prop in condition) {
      if (condition.hasOwnProperty(prop)) {
        conditionKey = prop;
        conditionValue = condition[prop];
      }
    }
    for (const item of array) {
      // if (item[conditionKey] === conditionValue) {
      //   newArr[i];
      //   i++;
      // }
    }
    return newArr;
  }
}
