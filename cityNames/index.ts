function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
  }
  
  const cityAndCountry1: string = city_country("Karachi", "Pakistan");
  console.log(cityAndCountry1); 
  
  const cityAndCountry2: string = city_country("Tokyo", "Japan");
  console.log(cityAndCountry2);
    
  const cityAndCountry3: string = city_country("New York", "USA");
  console.log(cityAndCountry3);


  