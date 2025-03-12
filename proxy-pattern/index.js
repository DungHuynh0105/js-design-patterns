const person = {
  name: "Alex",
  age: 25,
};

const personProxy = new Proxy(person, {
  get: (obj, key) => {
    console.log(`Getting property ${key}`);
    return Reflect.get(obj, key);
  },
  set: (obj, key, value) => {
    if (key === "age" && typeof value !== "number") {
      throw new TypeError("Age must be a number");
    }

    console.log(`Setting property ${key} to ${value}`);
    Reflect.set(obj, key, value);
  },
});

console.log(personProxy.name);
console.log(personProxy.age);

personProxy.name = "John";
personProxy.age = 30;

personProxy.age = "30"; // TypeError: Age must be a number
