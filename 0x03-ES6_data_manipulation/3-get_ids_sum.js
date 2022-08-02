export default function getStudentIdsSum(students) {
  if (students instanceof Array) {
    const studentIds = [];
    for (const student of students) {
      studentIds.push(student.id);
    }
    const studentIdSum = studentIds.reduce(
      (studentA, studentB) => studentA + studentB,
    );
    return studentIdSum;
  }
  return [];
}
