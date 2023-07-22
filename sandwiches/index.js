function order_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich ordered with the following items: ".concat(items.join(', ')));
}
order_sandwich("Bread", "Ham", "Cheese");
order_sandwich("Bread", "Turkey", "Lettuce", "Tomato");
order_sandwich("Bread", "Peanut Butter", "Jelly", "Banana", "Honey");
