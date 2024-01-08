export default function getStudentIdsSum(studentList) {
  return studentList.reduce((sum, student) => sum + student.id, 0);
}
