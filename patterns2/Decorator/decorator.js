const badge = require('./currency_conversions.json');


class Decorator {
  constructor(product) {
    this._product = product
  }

  get product() {
    return this._product
  }

  //methode convert price
  convert() {
    switch (this._product.currency) {
      case 'USD':
        console.log(`USD_EUR: The price in euro is ${this._product.price * Object.values(badge)[0]}`);
        break;
      case 'GBP':
        console.log(`GBP_EUR: The price in euro is ${this._product.price * Object.values(badge)[1]}`);
        break;
      case 'CHF':
        console.log(`CHF_EUR: The price in euro is ${this._product.price * Object.values(badge)[2]}`);
        break
      case 'JPY':
        console.log(`JPY_EUR: The price in euro is ${this._product.price * Object.values(badge)[3]}`);
        break
      case 'CAD':
        console.log(`CAD_EUR: The price in euro is ${this._product.price * Object.values(badge)[4]}`);
        break
      case 'CNY':
        console.log(`CNY_EUR: The price in euro is ${this._product.price * Object.values(badge)[5]}`);
        break
      default:
        console.log('invalid price')

    }

  }
}

module.exports = Decorator;