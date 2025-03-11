## JS Design Patterns

### Command pattern

With the Command Pattern, we can decouple objects that execute a certain task from the object that calls the method

- Pros: The command pattern allows us to decouple methods from the object that executes the operation. It gives you more control if you’re dealing with commands that have a certain lifespan, or commands that should be queued and executed at specific times.

- Cons: The use cases for the command pattern are quite limited, and often adds unnecessary boilerplate to an application.

### Observer pattern

With the observer pattern, we can subscribe certain objects, the observers, to another object, called the observable. Whenever an event occurs, the observable notifies all its observers!

- Pros: Using the observer pattern is a great way to enforce separation of concerns and the single responsibility principle. The observer objects aren’t tightly coupled to the observable object, and can be (de)coupled at any time. The observable object is responsible for monitoring the events, while the observers simply handle the received data.

- Cons: If an observer becomes too complex, it may cause performance issues when notifying all subscribers.
