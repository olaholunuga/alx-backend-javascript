export default function iterateThroughObject(reportWithIterator) {
  const empolyees = [];
  for (const employee of reportWithIterator) {
    empolyees.push(employee);
  }
  return empolyees.join(' | ');
}
