class OrderManager {
  constructor() {
    this.orders = [];
  }

  execute(command) {
    command.execute(this.orders);
  }

  log() {
    console.log(this.orders);
  }
}

class Command {
  constructor(execute) {
    this.execute = execute;
  }
}

function PlaceOrder(order, id) {
  return new Command((orders) => {
    orders.push(id);
    console.log(`You have successfully ordered ${order} (${id})`);
  });
}

function TrackOrder(id) {
  return new Command(() => {
    console.log(`Your order ${id} will arrive in 20 minutes.`);
  });
}

function CancelOrder(id) {
  return new Command((orders) => {
    const index = orders.indexOf(id);

    if (index > -1) {
      orders.splice(index, 1);
    }

    console.log(`You have canceled your order ${id}`);
  });
}

const manager = new OrderManager();

manager.execute(new PlaceOrder("Pad Thai", "1234"));
manager.execute(new TrackOrder("1234"));
manager.execute(new CancelOrder("1234"));

manager.log();
