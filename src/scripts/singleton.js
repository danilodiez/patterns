let instance;
let counter = 0;


class Counter {
  constructor() {
    if (instace) {
      throw new Error("only one instance!");
    }
    else {
      intance = this;
    }
  }

  getInstance() {
    return this;
  }
  
  getCount() {
    return counter;
  }

  increment() {
    return ++counter;
  }

  decrement() {
    return --counter;
  }
}

// We can add the Object.freeze method to make sure that any consumer will modify the object
const counterSingleton = Object.freeze(new Counter());
export default counterSingleton;



// the previous way is an antipattern in Js. We can do the same as it follows:

let cont = 0;

const counterBestWay = {
  increment() {
    return ++cont;
  },
  decrement() {
    return --cont;
  }
}

Object.freeze(counterBestWay);

export { counterBestWay };
