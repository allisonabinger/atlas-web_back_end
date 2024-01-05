/* eslint-disable no-underscore-dangle */
import Currency from './3-currency';
/* although error catching is important, this class does not have 100% error
catching capabilities */

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
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
    if (typeof newAmt === 'number') {
      this._amount = newAmt;
    } else {
      throw new TypeError('New amount must be a number');
    }
  }

  set currency(newCur) {
    if (newCur instanceof Currency) {
      this._currency = newCur;
    } else {
      throw new TypeError('New currency must be instance of Currency class');
    }
  }

  /* methods */
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
