export default class Building {
  constructor(sqft) {
    if (!this.evacuationWarningMessage && this.constructor !== Building) {
      throw new TypeError('Class extending Building must override evacuationWarningMessage');
    }
    this._sqft = sqft;
  }

  /* getters */
  get sqft() {
    return this._sqft;
  }
}
