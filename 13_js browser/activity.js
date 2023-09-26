class Activity {
    constructor(name, cost) {
      this.name = name;
      this.cost = cost;
    }
    
    canAfford(visitor) {
      if (visitor.budget >= this.cost) {
        return `🎉 ${visitor.name} can afford ${this.name}!`;
      } else {
        return `😢 Sorry ${visitor.name}, you can't afford ${this.name}.`;
      }
    }
    
    play() {}
  }
  
  class BumperCars extends Activity {
    constructor(cost) {
      super('Bumper Cars', cost);
    }
    
    play() {
      return `Playing ${this.name} costs ${this.cost}, Enjoy the ride!`;
    }
  }
  
  class CottonCandy extends Activity {
    constructor(cost) {
      super('Cotton Candy', cost);
    }
    
    eat() {
      return `Eating ${this.name} costs ${this.cost}`;
    }
  }
  
  export { Activity, BumperCars, CottonCandy };
  