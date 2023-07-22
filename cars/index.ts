function car_info(manufacturer: string, model: string, ...kwargs: any[]): { manufacturer: string; model: string; [key: string]: any } {
    const car: { manufacturer: string; model: string; [key: string]: any } = {
      manufacturer: manufacturer,
      model: model,
    };
  
    for (let i = 0; i < kwargs.length; i += 2) {
      const key = kwargs[i];
      const value = kwargs[i + 1];
      car[key] = value;
    }
  
    return car;
  }
  
  const carInfo1 = car_info("Toyota", "Camry", "color", "red", "year", 2023);
  const carInfo2 = car_info("Honda", "Civic", "color", "blue", "transmission", "automatic");
  console.log(carInfo1);
  console.log(carInfo2);
  