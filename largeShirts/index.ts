function make_shirt(size: string = "large", message: string = "I love TypeScript"): void {
    console.log(`Shirt size: ${size}, Message: "${message}"`);
  }
  
  // Making a large shirt with the default message
  make_shirt();
  
  // Making a medium shirt with the default message
  make_shirt("medium");
  
  // Making a small shirt with a custom message
  make_shirt("small", "Hello World!");
  