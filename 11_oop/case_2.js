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
  }
  
const activity = new Activity("Amusement Park Ride", 50);

// Define a visitor object
const visitor = {
  name: "John Doe",
  budget: 40
};

// Check if the visitor can afford the activity
console.log(activity.canAfford(visitor));  // Output: 😢 Sorry John Doe, you can't afford Amusement Park Ride.

// Now let's check with a visitor having enough budget
const wealthyVisitor = {
  name: "Jane Doe",
  budget: 100
};

// // Check if the visitor can afford the activity
console.log(activity.canAfford(wealthyVisitor));  // Output: 🎉 Jane Doe can afford Amusement Park Ride!


assert(activity.canAfford(visitor), "😢 Sorry John Doe, you can't afford Amusement Park Ride.");
assert(activity.canAfford(wealthyVisitor), "🎉 Jane Doe can afford Amusement Park Ride!");


// Missing parentheses:

// console.log(activity.canAfford(visitor);  // Error: missing closing parenthesis
// Missing semicolon:

// const visitor = {
//   name: "John Doe"
//   budget: 40  // Error: missing semicolon
// };
// Misspelled variable name:

// const wealthyVisitor = {
//   name: "Jane Doe",
//   budget: 100
// };

// console.log(activity.canAffrod(wealthyVisitor));  // Error: misspelled "canAfford"
// Incorrect function invocation:

// assert(activity.canAfford(visitor), "😢 Sorry John Doe, you can't afford Amusement Park Ride.");  // Error: missing function parentheses
// Unmatched curly braces:

// class Activity {
//   constructor(name, cost) {
//     this.name = name;
//     this.cost = cost;
//   }  // Error: missing closing curly brace for the class
