export default function updateStudentGradeByCity(studentList, city, newGrades) {
  /* use filter to create new array with students who live in specified city */
  let studentsInCity = studentList.filter((student) => student.location === city);
  /* use map to update grades based on newGrades array */
  let updatedStudents = studentsInCity.map((student) => {
    /* search for newGrade by student id using find */
    let newGrade = newGrades.find((ng) => ng.studentId === student.id);
    /* return new student object with new grade if it exists */
    return { ...student, grade: newGrade ? newGrade.grade : 'N/A'};
  });
  return updatedStudents;
}
