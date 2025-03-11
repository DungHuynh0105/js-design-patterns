class Observable {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter(
      (subscriber) => subscriber !== observer
    );
  }

  notify(data) {
    this.observers.forEach((observer) => observer(data));
  }
}

const observable = new Observable();

const observer1 = (data) => console.log(`Observer 1 receive: ${data}`);
const observer2 = (data) => console.log(`Observer 2 receive: ${data}`);

observable.subscribe(observer1);
observable.subscribe(observer2);

observable.notify("Hello World!");
