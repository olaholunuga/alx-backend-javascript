export default function getStudentIdsSum(students) {
  if (students instanceof Array) {
    const studentIdSum = students.reduce(
      (studentA, studentB) => Number(studentA.id) + Number(studentB.id),
    );
    return studentIdSum;
  }
  return [];
}
