export default function getListStudentIds(args) {
  let studentIds = [];
  if (args instanceof Array) {
    studentIds = args.map((student) => student.id);
    return studentIds;
  }
  return [];
}
