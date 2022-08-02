export const weakMap = new WeakMap();
const counter = {};
weakMap.set(counter, 0);

export function queryAPI(arg) {
  if (arg instanceof Object) {
    if (weakMap.get(counter) < 4) {
      let tracker = weakMap.get(counter);
      weakMap.set(counter, tracker + 1);
      tracker = weakMap.get(counter);
      weakMap.set(arg, tracker);
    } else {
      throw new Error('Endpoint load is high');
    }
  }
}
