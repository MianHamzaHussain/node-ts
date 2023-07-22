function car_info(manufacturer, model) {
    var kwargs = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        kwargs[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model,
    };
    for (var i = 0; i < kwargs.length; i += 2) {
        var key = kwargs[i];
        var value = kwargs[i + 1];
        car[key] = value;
    }
    return car;
}
var carInfo1 = car_info("Toyota", "Camry", "color", "red", "year", 2023);
var carInfo2 = car_info("Honda", "Civic", "color", "blue", "transmission", "automatic");
console.log(carInfo1);
console.log(carInfo2);
