export default function cleanSet(set, startString) {
  const setArray = [];
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
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
