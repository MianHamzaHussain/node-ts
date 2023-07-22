function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("Shirt size: ".concat(size, ", Message: \"").concat(message, "\""));
}
// Making a large shirt with the default message
make_shirt();
// Making a medium shirt with the default message
make_shirt("medium");
// Making a small shirt with a custom message
make_shirt("small", "Hello World!");
