// PizzaMaker.js
function createPizza(toppings) {
    return `🍕 Пицата е готова и включва следните добавки: ${toppings.join(", ")}`;
}

module.exports = { createPizza };