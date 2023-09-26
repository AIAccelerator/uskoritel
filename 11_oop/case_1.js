class Visitor {
    constructor(name, budget) {
      this.name = name;
      this.budget = budget;
    }
  
    remainingBudget(cost) {
      this.budget -= cost;
      return `😄 ${this.name} spent $${cost}, remaining budget is $${this.budget}`;
    }
  }
  
  // Create a visitor instance
  const visitor1 = new Visitor('Bob', 15);
  
  // Call the remainingBudget method to deduct an expense
  console.log(visitor1.remainingBudget(5)); // Output: John spent 200. Remaining budget: 300
  
  console.log(visitor1.remainingBudget(10)); // Output: John spent 400. Remaining budget: -100 (assuming no additional checks for negative budget)
  
  // here we have logical error - we do not check for negative balance
  console.log(visitor1.remainingBudget(15)); // Output: John cannot afford this expense. Budget: -100 (assuming no additional checks for negative budget)

  // Test case for the Visitor class
function testVisitor() {
    const visitor = new Visitor('John', 1000);
  
    // Test initial budget
    assert(visitor.budget, 1000);
  
    // Test remainingBudget() method
    assert(visitor.remainingBudget(500), '😄 John spent $500, remaining budget is $500');
  
    // Test remaining budget after spending
    assert(visitor.budget, 500);
  
    // Test remainingBudget() method again
    assert(visitor.remainingBudget(200), '😄 John spent $200, remaining budget is $300');
  
    // Test remaining budget after spending again
    assert(visitor.budget, 300);
  }
  
  // Run the test
  testVisitor();

  //Missing semicolon:

// this.budget -= cost
// Error: The line should end with a semicolon (;) to denote the end of the statement.

// Misspelled property:

// this.budjet = budget;
// Error: The property name is misspelled as "budjet" instead of "budget". It should be corrected to this.budget = budget;.

// Unclosed string literal:

// return `😄 ${this.name} spent $${cost}, remaining budget is $${this.budget}`;
// Error: The string literal is not closed properly. It should be corrected to:

// return `😄 ${this.name} spent $${cost}, remaining budget is $${this.budget}`;
// Missing comma in parameter list:

// constructor(name budget) {
// Error: There is a missing comma between the "name" and "budget" parameters. It should be corrected to:

// constructor(name, budget) {
// Unexpected token:
// return `😄 ${this.name} spent $${cost}, remaining budget is $${this.budget}`
// Error: The return statement is missing a semicolon (;) at the end. It should be corrected to:

// return `😄 ${this.name} spent $${cost}, remaining budget is $${this.budget}`;