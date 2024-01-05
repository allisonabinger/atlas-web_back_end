export default class HolbertonCourse {
  /* constructor - called upon object creation */
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string.');
    }
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number.');
    }
    if (typeof students !== 'object') {
      throw new TypeError('Students must be an array object.');
      /* not sure if this should be array or object?? */
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }
  /* getters */
  
  get name() {
    return this._name;
  }
  
  get length() {
    return this._length;
  }
  
  get students() {
    return this._students;
  }
  /* setters */
  
  set name(updatedname) {
    if (typeof updatedname !== 'string') {
      throw new TypeError('New name must be a string');
    } else {
      this._name = updatedname;
    }
  }
  
  set length(updatedlength) {
    if (typeof updatedlength !== 'number') {
      throw new TypeError('New length must be a number');
    } else {
      this._name = updatedlength;
    }
  }
  
  set students(updatedstudents) {
    if (typeof updatedstudents !== 'object') {
      throw new TypeError('New students must be an array object');
    } else {
      this._name = updatedstudents;
    }
  }
  }
