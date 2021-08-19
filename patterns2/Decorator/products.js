//  
class Product {
  constructor(name, price, currency) {
    this._name = name;
    this._price = price;
    this._currency = currency;
    // this.seeProduct = () => {
    //   console.log(`The product: ${this.name}, has a price the: { ${this.currency}: ${this.price} }`);
    // }
  }

  get name() {
    return this._name
  }

  get price() {
    return this._price
  }

  get currency() {
    return this._currency
  }
}

module.exports = Product