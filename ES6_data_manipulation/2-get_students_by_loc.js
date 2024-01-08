export default function getStudentsByLocation(student, city) {
  let filteredStudents = [];
  filteredStudents = students.filter(student => student.location = city);
  return filteredStudents;
}
