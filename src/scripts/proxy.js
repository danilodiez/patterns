const person = {
  name: "Danilo",
  age: 25,
  nationality: "Argentinian🇦🇷",

}

//Instead of interacting with the person object, we set a Proxy

const personProxy = new Proxy(person, {
  get: (obj, prop) => {
    console.log(`The value of ${prop} is ${obj[prop]}`);
  },
  set: (obj, prop, value) => {
    console.log(`Changed ${prop} from ${obj[prop]} to ${value}`);
    obj[prop] = value;
  }
});

// The utility here is e.g defining validations if we try to set a string in the age prop



