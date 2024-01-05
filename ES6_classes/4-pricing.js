import Currency from './3-currency.js';
/* although error catching is important, this class does not have 100% error
catching capabilities */

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency
  }
  
  /* getters */

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  /* setters */
  set amount(newAmt) {
    if (typeof new newAmt === 'number') {
      this._amount = newAmt;
    } else {
      throw new TypeError('New amount must be a number');
    }
  }

  set currency(newCur) {
    if (typeof newCur === 'currency') {
      this._currency = newCur;
    } else {
      throw new TypeError('The new currency must be a valid currency');
    }
  }

  /* methods */
  displayFullPrice
}
