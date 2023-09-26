import { Visitor } from './visitor.js';
import { Activity, BumperCars, CottonCandy } from './activity.js';

const bob = new Visitor('Bob', 0);

document.addEventListener('DOMContentLoaded', () => {
  const setBudgetButton = document.getElementById('setBudgetButton');
  setBudgetButton.addEventListener('click', setBudget);

  const executeActivityButton = document.getElementById('executeActivityButton');
  executeActivityButton.addEventListener('click', executeActivity);
});

function setBudget() {
  const budgetInput = document.getElementById('budget');
  const budget = parseFloat(budgetInput.value);
  bob.budget = budget;
  document.getElementById('bobBudget').textContent = `Bob's Budget: $${bob.budget}`;
}

function executeActivity() {
    const activitySelect = document.getElementById('activitySelect');
    const selectedActivity = activitySelect.value;
    let activity;
  
    if (selectedActivity === 'bumperCars') {
      activity = new BumperCars(5);
    } else if (selectedActivity === 'cottonCandy') {
      activity = new CottonCandy(3);
    }
  
    if (activity) {
      const resultMessage = activity.canAfford(bob);
  
      if (resultMessage.includes('can afford')) {
        const activityResult = activity.play();
        document.getElementById('activityResult').textContent = `Bob executed ${activity.name}! ${activityResult}`;
        bob.remainingBudget(activity.cost);
        document.getElementById('bobBudget').textContent = `Bob's Budget: $${bob.budget}`;
      } else {
        document.getElementById('activityResult').textContent = resultMessage;
      }
    }
  
}