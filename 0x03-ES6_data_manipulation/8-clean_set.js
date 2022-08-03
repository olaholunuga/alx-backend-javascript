export default function cleanSet(set, startString) {
  const setArray = [];
  if (
    !set
    || !startString
    || !(set instanceof Set)
    || typeof startString !== 'string'
  ) {
    return '';
  }
  for (const value of set) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      const valueSubStr = value.substring(startString.length);

      if (valueSubStr && valueSubStr !== value) {
        setArray.push(valueSubStr);
      }
    }
  }
  return setArray.join('-');
}
