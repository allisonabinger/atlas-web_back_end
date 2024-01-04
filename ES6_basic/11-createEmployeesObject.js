export default function createEmployeesObject(departmentName, employees) {
  const createEmployeesObject = {};
  createEmployeesObject[departmentName] = employees;
  return createEmployeesObject;
}
