export default function getStudentsByLocation(students, city) {
  if (students instanceof Array) {
    const studentList = students.filter((student) => student.location === city);
    return studentList;
  }
  return [];
}
