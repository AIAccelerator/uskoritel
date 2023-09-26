export class Visitor {
    constructor(name, budget) {
      this.name = name;
      this.budget = budget;
    }
    
    remainingBudget(cost) {
      this.budget -= cost;
      return `😄 ${this.name} spent $${cost}, remaining budget: $${this.budget}`;
    }
  }
  