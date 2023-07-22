function order_sandwich(...items: string[]): void {
    console.log(`Sandwich ordered with the following items: ${items.join(', ')}`);
  }
  
  order_sandwich("Bread", "Ham", "Cheese");
  order_sandwich("Bread", "Turkey", "Lettuce", "Tomato");
  order_sandwich("Bread", "Peanut Butter", "Jelly", "Banana", "Honey");
  