//
class Middleware {
  constructor(target) {
    this.target = target;
    this.middlewares = [];
    this.nums = {};

    const prototype = Object.getPrototypeOf(this.target)
    const propertyNames = Object.getOwnPropertyNames(prototype)
    propertyNames.forEach(fn => (fn !== "constructor") ? this.addFn(fn) : null);
  }

  use(middleware) {
    this.middlewares = [...this.middlewares, middleware]
  }

  runMiddlewares(i = 0) {
    if (i < this.middlewares.length) {
      this.middlewares[i].call(this, this.nums, () => this.runMiddlewares(i + 1))
    }
  }

  addFn(fn) {
    this[fn] = args => {
      this.nums = args
      this.nums.num = this.target[fn].call(this, this.nums)
      this.runMiddlewares()
      return this.nums.num
    }
  }
}

module.exports = Middleware