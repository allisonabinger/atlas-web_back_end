export default function getListStudentIds (studentarray) {
  let ids = [];
  if (Array.isArray(studentarray)) {
    ids = studentarray.map(student => student.id);
  }
  return ids;
}
