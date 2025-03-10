class OrderManager {
  constructor() {
    this.orders = [];
  }

  placeOrder(order, id) {
    this.orders.push(id);
    console.log(`You have successfully ordered ${order} (${id})`);
  }

  trackOrder(id) {
    console.log(`Your order ${id} will arrive in 20 minutes.`);
  }

  cancelOrder(id) {
    this.orders = this.orders.filter((order) => order !== id);
    console.log(`You have canceled your order ${id}`);
  }

  log() {
    console.log(this.orders);
  }
}

const manager = new OrderManager();

manager.placeOrder("Pad Thai", "1234");
manager.trackOrder("1234");
manager.cancelOrder("1234");

manager.log();
