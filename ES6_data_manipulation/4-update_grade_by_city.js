export default function updateStudentGradeByCity(studentList, city, newGrades) {
  /* use filter to create new array with students who live in specified city */
  const studentsInCity = studentList.filter((student) => student.location === city);
  /* use map to update grades based on newGrades array */
  const updatedStudents = studentsInCity.map((student) => {
    /* search for newGrade by student id using find */
    const newGrade = newGrades.find((ng) => ng.studentId === student.id);
    /* return new student object with new grade if it exists */
    return { ...student, grade: newGrade ? newGrade.grade : 'N/A' };
  });
  return updatedStudents;
}
