export default function getStudentsByLocation(studentList, city) {
  let filteredStudents = [];
  filteredStudents = studentList.filter(student => student.location === city);
  return filteredStudents;
}
