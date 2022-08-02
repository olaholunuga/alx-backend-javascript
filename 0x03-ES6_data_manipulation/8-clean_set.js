export default function cleanSet(set, startString) {
  const setArray = [];
  if (set instanceof Set) {
    if (startString) {
      for (const string of set) {
        if (string.startsWith(startString)) {
          setArray.push(string.replace(startString, ''));
        }
      }
    }
  }
  return setArray.join('-');
}
