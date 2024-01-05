export default class Currency {
  /* constructor - used at initialization */
  constructor(code, name) {
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    }
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._code = code;
    this._name = name;
  }

  /* getters */

  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  /* setters */

  set code(newCode) {
    if (typeof newCode === 'string') {
      this._code = newCode;
    } else {
      throw new TypeError('The new code must be a string');
    }
  }

  set name(newName) {
    if (typeof newName === 'string') {
      this._name = newName;
    } else {
      throw new TypeError('The new name must be a string');
    }
  }

  /* methods */
  displayFullCurrency() {
    /* returns the attributes in designated format */
    return `${this._name} (${this._code})`
  }
}
