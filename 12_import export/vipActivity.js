import { Activity } from './activity.js';

class VIPActivity extends Activity {
  constructor(name, cost, VIPStatus) {
    super(name, cost);
    this.VIPStatus = VIPStatus;
  }

  play(visitor) {
    if (visitor.VIPStatus === this.VIPStatus && visitor.budget >= this.cost) {
      return `${visitor.name} is playing ${this.name}`;
    } else {
      return `${visitor.name} cannot play ${this.name}`;
    }
  }
}

class VIPBumperCars extends VIPActivity {
  constructor(cost, VIPStatus) {
    super('Bumper Cars', cost, VIPStatus);
  }
}

class VIPCottonCandy extends VIPActivity {
  constructor(cost, VIPStatus) {
    super('Cotton Candy', cost, VIPStatus);
  }

  eat(visitor) {
    if (visitor.VIPStatus === this.VIPStatus && visitor.budget >= this.cost) {
      return `${visitor.name} is eating ${this.name}`;
      visitor.budget -= this.cost;
    } else {
      return `${visitor.name} cannot eat ${this.name}`;
    }
  }
}

export { VIPActivity, VIPBumperCars, VIPCottonCandy };